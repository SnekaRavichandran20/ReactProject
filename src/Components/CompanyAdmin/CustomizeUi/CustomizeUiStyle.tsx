import styled from 'styled-components';

interface Props {
  color: string;
}

// to style heading elements
export const Heading = styled.h2<Props>`
  font-size: 1.4rem;
  color: ${({ color }) => color};
`;

export const SubHeading = styled.h4<Props>`
  color: ${({ color }) => color};
`;

// to style the container holding image and its option
export const ImageContainer = styled.div`
  border: 0.1rem solid #ccc;
  background-color: #ff;
  height: auto;
  padding: 1rem;
  font-size: 0.8rem;
`;

// to style the button of selecting image
export const SelectButton = styled.button`
  background-color: inherit;
  color: #bbb;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  :hover {
    color: #aaa;
  }
`;

// to style the button used for restoring color and logo
export const RestoreButton = styled.button`
  background-color: #eee;
  padding: 0.5rem;
  color: #ccc;
  border: 0.15rem solid #ccc;
  margin-left: 0.5rem;
  border-radius: 0.2rem;
  cursor: pointer;
  :hover {
    border: 0.15rem solid #bbb;
    color: #aaa;
  }

  @media screen and (max-width: 320px) {
    margin-left: 0;
    margin-top: 1rem;
  }
`;


// the container holds the image preview
export const ImagePreview = styled.div`
  width: 65%;
  height: 10rem;
  border: 0.15rem dashed #ccc;
  border-radius: 0.2rem;
  background-color: #eee;
  margin: 2% 12.5%;
  display: flex;
  justify-content: center;
  padding: 4%;
`;

// to make the button wrap down when screen size is small
export const WrappedContainer = styled.div`
  border: 0.1rem solid #ccc;
  display: flex;
  flex-wrap: wrap;
  padding: 1rem;
  border-top: none;
  margin-bottom: 1.5rem;
`;

// to style input of color and hex code
export const Canvas = styled.div`
  display: flex;
  border: 0.1rem solid #ccc;
  border-radius: 0.3rem;
  padding: 0.2rem;
  margin-top: 1rem;
`;

// to style the container that holds input, hex code and name of the color
export const ColorBox = styled.span`
  flex: 20%;
  padding: 1rem;
  padding-left: 1.5rem;

  @media (max-width: 400px) {
    flex: 100%;
  }
`;

// to hide the choose file option in input
export const FileUpload = styled.input`
  display: none;
`;

// to style input of color 
export const ColorInput = styled.input`
  background-color: none;
  outline: none;
  border: none;
  height: 40px;
  width: 40px;
  cursor: pointer;
`;

// to style hex code value 
export const CodeInput = styled.input`
  outline: none;
  border: none;
  height: 40px;
  width: 100px;
  padding: 0 10px;
`;

// the container that holds primary, secondary and font color container
export const ColorContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  border: 1px solid #ccc;
`;

// to style the div of success notification after every add, edit, delete action
export const NotificationModal = styled.div`
  background-color: #fff;
  box-shadow: 8px 8px 16px 0px rgba(0, 0, 0, 0.3);
  border-radius: 0.5rem;
  cursor: pointer;
  right: 4%;
  top: 2%;
  position: absolute;
  border: none;
  padding: 1rem;
  color: #ff0000;
  z-index: 1;
`;
