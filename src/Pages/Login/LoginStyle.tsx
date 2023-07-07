import styled from 'styled-components';

// the design style of whole login page
export const LoginPageContainer = styled.div`
  background-color: #069ad9;
  font-family: arial;
  padding: 2% 4%;
  font-size: 0.8rem;
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
`;

// container for logo image
export const ImageContainer = styled.div`
  top: 2%;
  left: 2%;
  position: absolute;

`;

// logo size of login page
export const LogoSize = '100px';

// container style that holds the input and login button
export const LoginContainer = styled.div`
  font-family: Arial;
  width: 28%;
  max-height: 70%;
  background-color: #ffffff;
  position: absolute;
  top: 20%;
  padding: 2% 4% 4% 4%;
  resize: vertical;
  border-radius: 0.1rem;
  @media screen and (max-width: 600px) {
    width: 50%;
  }
`;

// style for login heading
export const Heading = styled.h2`
  color: #069ad9;
  font-size: 1.5rem;
  padding-bottom: 2%;
`;

/* to keep the svg icon and input adjacent */
export const InputContainer = styled.div`
  display: flex;
  width: 95%;
  margin: 5% 0%;
  border: 1px solid #ccc;
  padding-left: 4%;
  border-radius: 0.2rem;

  :hover {
    border: 1px solid #069ad9;
  }
`;

// style of input tag
export const InputField = styled.input`
  width: 100%;
  outline: none;
  background-color: #fff;
  border: none;
  padding: 4% 5%;
  font-size: 0.7rem;
`;

// username and password icon size
export const IconSize = '7%';

// style for forgot password font
export const ParagraphStyle = styled.p`
  text-align: right;
  color: #069ad9;
  padding-bottom: 1rem;
`;

// style for error message
export const Error = styled.p`
  color: #ff0000;
`;
