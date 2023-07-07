import styled from 'styled-components';

interface StyledButtonProps {
  children?: React.ReactNode;
  props?: any;
  onClick?: any;
  color: string;
  hoverColor: string;
  width: string;
  padding?: string;
  marginBottom?: string;
}

export const StyledButton = styled.button<StyledButtonProps>`
  width: ${({ width }) => width};
  padding: ${(StyledButtonProps) => StyledButtonProps.padding !== '' ? StyledButtonProps.padding: '.6rem'};
  background-color:  ${({ color }) => color};
  border: none;
  color: #fff;
  border-radius: 0.2rem;
  cursor: pointer;
  margin-bottom: ${({marginBottom}) => marginBottom};

  :hover {
    background-color: ${({ hoverColor }) => hoverColor};
  }

`;
