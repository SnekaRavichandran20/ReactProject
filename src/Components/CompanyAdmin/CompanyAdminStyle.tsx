import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

interface Props {
  color: string;
}

export const Content = styled.div`
  margin: 4%;
  margin-bottom: 5rem;
`;

/* to style the header where logo and icons are displayed */
export const Heading = styled.h2<Props>`
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: ${({ color }) => color};
`;

// to style the container that holds the switching  tab button
export const TabForContent = styled.div`
  overflow: hidden;
  border: 0.1rem solid #ccc;
  background-color: #ffffff;
  height: auto;
  display: flex;
`;

interface NavProps {
  to: string;
  exact?: any;
}

//  to style the navigation link
export const NavigationLink = styled(NavLink)<NavProps>`
  width: auto;
  background-color: inherit;
  float: left;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 1.2rem 0rem;
  font-size: 1rem;
  opacity: 0.5;
  color: #000;
  border-bottom: 0.2rem solid #fff;
  opacity: 0.5;
  text-decoration: none;
  margin-left: 2rem;

  :hover,
  &.active {
    border-bottom: 0.2rem solid #0000ff;
    opacity: 1;
  }
`;

// to style the container holds content of admin tabs
export const AdminContent = styled.div`
  padding: 0.5rem 2rem;
  border: 0.1rem solid #ccc;
  border-top: none;
  background-color: #fff;
`;
