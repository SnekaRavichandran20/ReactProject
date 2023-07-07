import styled from 'styled-components';

export const Table = styled.table`
  width: 100%;
  margin: 1.5rem 0;
`;

// to style the heading div
export const Header = styled.div`
  border: 0.1rem solid #ddd;
  border-bottom: none;
  padding: 2%;
`;

// the container that holds the input
export const FormContainer = styled(Header)`
  border-bottom: 0.1rem solid #ddd;
  padding: 1rem 4%;
  padding-bottom: 4%; ;
`;

export const Td = styled.td`
  padding: 1% 0;
  font-size: 0.9rem;
`;

// style of input tag
export const InputField = styled.input`
  width: 80%;
  outline: none;
  background-color: #fff;
  border: 0.1rem solid #ccc;
  padding: 3% 5%;
  font-size: 0.7rem;
  border-radius: 0.3rem;
`;

// to depict the mandatory fields
export const Required = styled.span`
  color: #ff0000;
`;

// to style the error message
export const ErrorMessage = styled(Td)`
  color: #ff0000;
  font-size: 0.7rem;
`;

// to style the whole conatiner of adding data
export const Employee = styled.div`
  z-index: 2;
  position: absolute;
  width: 100%;
  right: 0;
  height: 100%;
  margin: 0;
  top: 0;
  background-color: rgb(0, 0, 0, 0.3);
`;

export const Modal = styled.div`
  background-color: #fefefe;
  margin: 3%;
  padding: 2% 4%;
  border: 1px solid #888;
`;

interface Props {
  color: string;
}

//  to style the heading
export const Heading = styled.span<Props>`
  padding: 2% 0;
  margin: 0 2%;
  font-size: 0.9rem;
  border: none;
  border-bottom: 0.2rem solid #0000ff;
  width: auto;
  color: ${({ color }) => color};
`;

// to style the close span
export const Close = styled.span`
  cursor: pointer;
  margin-bottom: 2rem;
  font-weight: bold;
  width: 1rem;
  float: right;
  color: #000000;

  :hover {
    color: #ff0000;
  }
`;

export const ModalHeader = styled.h2<Props>`
  color: ${({ color }) => color};
`;
