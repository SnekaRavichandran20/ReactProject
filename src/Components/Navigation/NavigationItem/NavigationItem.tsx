import React from 'react';
import { Image } from '../../Ui/Image/Image';
import { NavigationLink, Span, Icon } from './NavigationItemStyle';
import { useSelector } from 'react-redux';


interface naviagationItemProps {
  image: any;
  navigationItemName: string;
  path: string;
  toggle: boolean;
  url: string;
  admin: boolean;
  adminHandler: any;
  handler: any;
}

// the individual navigation link of the navigation bar
const NavigationItem: React.FC<naviagationItemProps> = ({
  image,
  navigationItemName,
  path,
  toggle,
  url,
  admin, 
  adminHandler,
  handler
}) => {
  const onclickEvent = (name: string) => {
    adminHandler(name);
    handler();
  }

  const c = useSelector((state: any) => state.cus);

  return (
    <NavigationLink
      to={path}
      toggle={toggle}
      onClick={() => onclickEvent(navigationItemName)}
      color={c.colorvalue[1].value}
      admincolor={admin &&
        navigationItemName === 'Company Admin' && url.indexOf('admin') > -1
          ? c.colorvalue[1].value
          : 'inherit'
      }
    >
      <Icon>
        <Image image={image} toggle={toggle} navigation={true} />
      </Icon>
      <Span toggle={toggle}>{navigationItemName}</Span>
    </NavigationLink>
  );
};

export default NavigationItem;
