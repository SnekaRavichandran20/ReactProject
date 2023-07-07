import styled from 'styled-components';

interface Props {
  width: string;
  color: string;
  left: string;
}

/* to style the navigation bar */
export const NavigationBar = styled.div<Props>`
  position: absolute;
  width: ${({ width }) => width};
  height: 100%;
  text-align: center;
  background-color: ${({ color }) => color};
  z-index: 1;
  color: white;
  @media screen and (max-width: 999px) {
    top: 0;
    left: ${({ left }) => left};
    position: absolute;
    width: 18rem;
  }
`;

interface navProps {
  display: string;
}

export const NavigationItemBar = styled.div<navProps>`
width: 100%;
background-color: rgb(0,0,0,0.3);
right: 0;
position: absolute;
height: 100%;
@media screen and (max-width: 999px) {
  z-index: 1;
  top: 0;
  display: ${({ display }) => display};
}

`;

interface closeProps {
  onClick? : any;
}

// to style the exit icon of the navigation bar
export const Close = styled.div<closeProps>`
text-align: right;
width: auto;
cursor: pointer;
margin: 2rem;
font-weight: bold;
display: none;

@media screen and (max-width: 999px) {
display: block;
}

:hover {
  color: #ff0000;
}
`;