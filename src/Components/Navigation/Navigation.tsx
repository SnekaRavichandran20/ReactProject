import React from 'react';
import { NavigationBar, Close, NavigationItemBar } from './NavigationStyle';
import AdminIcon from '../../Assets/admin.svg';
import UserIcon from '../../Assets/employee.svg';
import NavigationItem from './NavigationItem/NavigationItem';
import { useSelector } from 'react-redux';


// the data for navigation bar
const navigationItem: naviagationItemProps[] = [
  {
    image: {
      source: AdminIcon,
      alternate: 'Admin Icon',
      width: '30px',
    },
    navigationItemName: 'Company Admin',
    path: '/home/admin/sub'
  },
  {
    image: {
      source: UserIcon,
      alternate: 'User Icon',
      width: '30px',
    },
    navigationItemName: 'User Management',
    path: '/home/user'
  },
];

interface Props {
  width: string;
  toggle: boolean;
  left: string;
  handler: any;
  url: string;
  admin: boolean;
  adminHandler: any;
  closeHandler: any;
}

const Navigation: React.FC<Props> = ({ width, toggle , left, handler, url, admin, adminHandler, closeHandler}) => {
  const c = useSelector((state: any) => state.cus);

  return (
    <div>
    <NavigationItemBar display={left !== '0' ? 'none' : 'block'} onClick={closeHandler}>
    <NavigationBar color={c.colorvalue[0].value} width={width} left={left}>
      <Close onClick={closeHandler}>X</Close>
      {
        navigationItem.map((item) => {
          return (
            <NavigationItem
            key={item.navigationItemName}
            toggle={toggle}
            image={item.image}
            navigationItemName={item.navigationItemName}
            path={item.path}
            url={url}
            admin={admin}
            handler={closeHandler}
            adminHandler = {adminHandler}
          ></NavigationItem>
          )
        })
      }
    </NavigationBar>

      
    </NavigationItemBar>
    </div>
  );
};

export default Navigation;
