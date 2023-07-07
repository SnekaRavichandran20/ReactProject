import styled from 'styled-components';

interface Props {
  children?: React.ReactNode;
  width?: string;
}

export const StyledInputContainer = styled.div<Props>`
  border: 1px solid #ccc;
  padding: 0.2rem;
  border-radius: 0.2rem;
  background-color: #eee;
  margin-right: 2rem;
  margin-bottom: 1rem;
  :hover {
    border: 1px solid #069ad9;
  }
`;
