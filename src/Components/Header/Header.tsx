import React, { useState } from 'react';
import {
  Button,
  HeadContainer,
  Icon,
  LeftIconPosition,
  RightIconPosition,
  Exit,
  ResponsiveIcon,
  MobileViewIcon,
} from './HeaderStyle';
import { Image } from '../Ui/Image/Image';

import BurgerIcon from '../../Assets/menu.svg';
import BellIcon from '../../Assets/bell.svg';
import UserIcon from '../../Assets/contact.svg';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Icons: ImageProp[] = [
  {
    source: BurgerIcon,
    alternate: 'Logo',
    width: '45px',
  },
  {
    source: BellIcon,
    alternate: 'Password',
    width: '28px',
  },
  {
    source: UserIcon,
    alternate: 'Password',
    width: '32px',
  },
];

interface Props {
  handler: any;
  closeHandler: any;
}

// the home page head element
const Header: React.FC<Props> = ({ handler, closeHandler }) => {
  const [Logout, toggleHandler] = useState(false);
  const c = useSelector((state: any) => state.cus);

  const navigate = useNavigate();

  const redirecthandler = () => {
    navigate('/home/admin/sub');
  }

  const logoutHandler = () => {
    axios
      .post(process.env.REACT_APP_BASE_URL+'/logout', {
        headers: {
          Accept: '*',
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json; charset=UTF-8',
        },
      })
      .then((response) => {
        localStorage.removeItem('id');
        localStorage.removeItem('primary');
        localStorage.removeItem('secondary');
        localStorage.removeItem('font');
        navigate('/');
      })
      .catch((err) => {
        console.log('error', err.response.data.error);
      });
  };

  return (
    <HeadContainer>
      <LeftIconPosition>
        <ResponsiveIcon>
          {/* menu icon */}
          <Image image={Icons[0]} clicked={handler} />
        </ResponsiveIcon>
        <MobileViewIcon>
          {/* menu icon */}
          <Image image={Icons[0]} clicked={closeHandler} />
        </MobileViewIcon>
        <Icon>
          {/* company logo */}
          <Image image={c.logo} clicked={redirecthandler} />
        </Icon>
      </LeftIconPosition>
      <RightIconPosition>
        <ResponsiveIcon>
          {/* bell icon */}
          <Image image={Icons[1]} />
        </ResponsiveIcon>
        <ResponsiveIcon>
          {/* user icon */}
          <Image image={Icons[2]} />
        </ResponsiveIcon>
        <Icon onClick={() => toggleHandler(!Logout)}>{window.localStorage.getItem('username')}</Icon>
      </RightIconPosition>
      {/* logout option */}
      {Logout ? (
        <Exit onClick={() => toggleHandler(!Logout)}>
          <Button onClick={() => logoutHandler()}>Logout</Button>
        </Exit>
      ) : (
        ''
      )}
    </HeadContainer>
  );
};

export default Header;
