import React from 'react';
import { Span } from './ProfileStyle';

interface Props {
    randomColor: string;
    children?: any;
}

// button tag as a reusable component
const Profile: React.FC<Props> = ({ children, randomColor}) => {
  return (
    <Span randomColor={randomColor}>{children}</Span>
  );
};

export default Profile;
