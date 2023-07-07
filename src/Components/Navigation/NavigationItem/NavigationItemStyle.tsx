import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

interface NavProps {
  to: string;
  toggle?: boolean;
  color: string;
  admincolor: string;
}

// to style the navigation link of the navigation bar
export const NavigationLink = styled(NavLink)<NavProps>`
  padding: 0.8rem 4%;
  background-color: ${({ admincolor }) => admincolor};
  color: #fff;
  border-radius: 0.2rem;
  cursor: pointer;
  display: block;
  text-decoration: none;
  margin: 1.5rem;
  text-align: ${(NavProps) => (NavProps.toggle ? 'left' : 'center')};

  :hover,
  &.active {
    background-color: ${({ color }) => color};
  }
`;

interface props {
  toggle: boolean;
}

export const Span = styled.span<props>`
  margin-left: 1rem;
  display: ${(props) => (props.toggle ? 'inline' : 'none')};
  @media (max-width: 999px) {
    display: inline;
  }
`;

export const Icon = styled.span`
  vertical-align: middle;
`;
