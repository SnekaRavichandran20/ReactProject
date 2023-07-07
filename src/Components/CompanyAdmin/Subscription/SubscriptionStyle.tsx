import styled from 'styled-components';

interface Props {
  color: string;
}

// to style the heading
export const Heading = styled.h2<Props>`
  font-size: 1.4rem;
  color: ${({ color }) => color};
`;
