import styled from 'styled-components';

export const InputField = styled.div`
  width: 6rem;
  background-color: #ddd;
  border: 0.1rem solid #ccc;
  padding: 0.4rem 0.6rem;
  font-size: 0.8rem;
  cursor: pointer;
  margin-right: 1rem;
  display: flex;
  justify-content: space-between;
`;

export const Option = styled.button`
  padding: 0.4rem 0.6rem;
  display: block;
  width: 7.4rem;
  border: 0.1rem solid #ccc;
  background-color: #f1f1f1;
  text-align: left;
  cursor: pointer;

  :hover {
    background-color: #ddd;
  }
`;

export const OptionField = styled.div`
  position: absolute;
`;

