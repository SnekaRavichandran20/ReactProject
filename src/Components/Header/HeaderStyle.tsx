import styled from 'styled-components';

/* to style the header where logo and icons are displayed */
export const HeadContainer = styled.div`
  height: 4rem;
  background-color: #fff;
  border: 1px solid #ddd;
  padding: 0.2rem;
  box-sizing: border-box;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  padding-right: 4%;
  padding-left: 1rem;

  @media (max-width: 1000px) {
    padding-left: 4%;
  }
`;

// the container that holds the icon
export const Icon = styled.span`
  vertical-align: middle;
  cursor: pointer;
  padding-right: 0.5rem;
  font-size: .8rem;
`;

export const ResponsiveIcon = styled(Icon)`
@media (max-width: 999px) {
  display: none;
}
`;


export const MobileViewIcon = styled(Icon)`
display: none;
@media (max-width: 999px) {
  display: inline;
}
`;

// the container that holds the menu and logo icon
export const LeftIconPosition = styled.span`
  cursor: pointer;
  min-width: 50%;
`;

// the container that holds the bell, user icons and username
export const RightIconPosition = styled.span`
  cursor: pointer;
  min-width: 50%;
  text-align: right;
`;

// design for logout button
export const Button = styled.button`
  background-color: #aaa;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  border-radius: 0.5rem;
  cursor: pointer;
  right: 3rem;
  top: 3rem;
  position: absolute;
  border: none;
  padding: .8rem 1rem;
  color: #fff;
  z-index: 1;
  opacity: 1;

  :hover {
    background-color: #ddd;
  }
`;

// style for logout backgound
export const Exit = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  position: absolute;
  z-index: 2;
`;
