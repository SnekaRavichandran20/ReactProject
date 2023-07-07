import React from 'react';
import { PaidTrail } from './PaidStyle';


interface Props {
  children?: React.ReactNode;
}


const paidTrail: React.FC<Props> = ({ children }) => {
  return <PaidTrail>{children}</PaidTrail>;
};

export default paidTrail;
