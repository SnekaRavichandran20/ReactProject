import styled from 'styled-components';

interface Props {
  children?: React.ReactNode;
}

export const PaidTrail = styled.span<Props>`
  border-radius: 0.8rem;
  border: ${(Props) =>
    Props.children === 'Paid'
      ? '.15rem solid #008d00'
      : '.15rem solid #ff0000'};
  padding: 0.1rem 0.8rem;
  color: ${(Props) => (Props.children === 'Paid' ? '#008d00' : '#ff0000')};
  text-align: center;
`;