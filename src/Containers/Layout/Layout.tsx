import React, { useState } from 'react';
import Header from '../../Components/Header/Header';
import Navigation from '../../Components/Navigation/Navigation';
import { ContentStyle, Container } from './LayoutStyle';

interface Props {
  children?: React.ReactNode;
  url: string;
  admin: boolean;
  adminHandler: any;
}

const Layout: React.FC<Props> = ({ children, url, admin, adminHandler }) => {
  const [NavigatorToggle, toggleHandler] = useState(true);
  const [left, set] = useState('0');

  const toggle = () => {
    toggleHandler(!NavigatorToggle);
  };

  const closeHandler = () => {
    left === '0' ? set('-312px') : set('0');
  }

  return (
    <div>
      <Header handler={toggle} closeHandler={closeHandler}/>
      <Container>
        <Navigation
          left={left}
          width={NavigatorToggle ? '23%' : '8%'}
          toggle={NavigatorToggle}
          handler={toggle}
          url={url}
          admin={admin} 
          adminHandler={adminHandler}
          closeHandler={closeHandler}
        />
        <ContentStyle width={NavigatorToggle ? '77%' : '92%'}>
          {children}
        </ContentStyle>
      </Container>
    </div>
  );
};

export default Layout;
