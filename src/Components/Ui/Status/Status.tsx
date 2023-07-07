import React from 'react';
import ActiveIcon from '../../../Assets/tick.svg';
import InActiveIcon from '../../../Assets/wrong.svg';
import { Image } from '../Image/Image';
import { Status } from './StatusStyle';

interface Props {
  children?: React.ReactNode;
  status?: string;
}

const status: React.FC<Props> = ({ children , status}) => {
  let image = {
    source: ActiveIcon,
    alternate: 'Tick',
    width: '16px',
  };
  
    if (status !== 'Active') {
      image = {
        source: InActiveIcon,
        alternate: 'Wrong',
        width: '16px',
      };
    }
  
  return (
    <Status status={status}> 
      <Image image={image}></Image>
      {status}
    </Status>
  );
};

export default status;
