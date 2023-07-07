import React from 'react';
import { StyledInputContainer } from './InputContainerStyle';

interface Props {
  children?: React.ReactNode;
  width?: string;
}

const InputContainer: React.FC<Props> = ({ children, width }) => {
  return <StyledInputContainer width={width}>{children}</StyledInputContainer>;
};

export default InputContainer;
