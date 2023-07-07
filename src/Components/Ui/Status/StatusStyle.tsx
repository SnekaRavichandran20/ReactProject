import styled from 'styled-components';

interface Props {
  children?: React.ReactNode;
  status?: string;
}

export const Status = styled.span<Props>`
  color: ${(Props) => (Props.status === 'Active' ? '#008d00' : '#ff0000')};
  display: flex;
  gap: .3rem;
`;
