import React from 'react';
import { StyledButton } from './ButtonStyle';

interface IButtonProps {
  children?: React.ReactNode;
  props?: any;
  onClick?: any;
  color: string;
  hoverColor: string;
  width: string;
  disabled?: boolean;
  padding?: string;
  marginBottom?: string;
}

// button tag as a reusable component
const Button: React.FC<IButtonProps> = ({ onClick, children, disabled,padding,marginBottom, ...props }) => {
  return (
    <StyledButton {...props} padding={padding} onClick={onClick} marginBottom={marginBottom} >
      {children}
    </StyledButton>
  );
};

export default Button;
