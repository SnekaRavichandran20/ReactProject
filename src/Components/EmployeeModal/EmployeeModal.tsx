// the content of adding or editing employee modal

import React from 'react';
import Button from '../Ui/Button/Button';
import {
  Table,
  Header,
  FormContainer,
  Td,
  InputField,
  Employee,
  Modal,
  Heading,
  Required,
  ErrorMessage,
  Close,
  ModalHeader
} from './EmployeeModalStyle';
import FormData from '../../Data/form.json';
import { useSelector } from 'react-redux';


interface inputProps {
  field: string;
  value: string;
  valid: boolean;
  submit: boolean;
}

interface Props {
  handler: any;
  changeHandler: any;
  inputValue: inputProps[];
  submitHandler: any;
  editmode: boolean;
}

const EmployeeModal: React.FC<Props> = ({
  handler,
  changeHandler,
  submitHandler,
  inputValue,
  editmode,
}) => {
  const c = useSelector((state: any) => state.cus);

  return (
    <Employee>
      <Modal>
          <ModalHeader color={c.colorvalue[2].value}>
          {/* to show appropriate heading according to the edit/ add mode */}
          {!editmode ? 'Add Employee' : 'Edit Employee'}
          <Close onClick={handler}>X</Close>
          </ModalHeader>
        <Header>
          <Heading color={c.colorvalue[2].value}>Basic Information</Heading>{' '}
        </Header>
        <FormContainer>
          {/* input fileds */}
          <Table>
            <tr>
              <Td>
                {FormData[0].elementName}
                <Required>*</Required>
              </Td>
              <Td>
                {FormData[1].elementName}
                <Required>*</Required>
              </Td>
            </tr>
            <tr>
              <Td>
                <InputField
                  type={FormData[0].elementType}
                  value={inputValue[0].value}
                  onChange={changeHandler(0)}
                />
              </Td>
              <Td>
                <InputField
                  type={FormData[1].elementType}
                  value={inputValue[1].value}
                  onChange={changeHandler(1)}
                />
              </Td>
            </tr>
            <tr>
              <ErrorMessage>
                {!inputValue[0].valid ? FormData[0].errorMessage : ' '}
              </ErrorMessage>
              <ErrorMessage>
                {!inputValue[1].valid ? FormData[1].errorMessage : ' '}
              </ErrorMessage>
            </tr>
            <tr>
              <Td>
                {FormData[2].elementName}
                <Required>*</Required>
              </Td>
              <Td>{FormData[3].elementName}</Td>
            </tr>
            <tr>
              <Td>
                <InputField
                  type={FormData[2].elementType}
                  value={inputValue[2].value}
                  onChange={changeHandler(2)}
                />
              </Td>
              <Td>
                <InputField
                  type={FormData[3].elementType}
                  value={inputValue[3].value}
                  onChange={changeHandler(3)}
                />
              </Td>
            </tr>
            <tr>
              <ErrorMessage>
                {!inputValue[2].valid ? FormData[2].errorMessage : ' '}
              </ErrorMessage>
              <Td></Td>
            </tr>
            <tr>
              <Td>{FormData[4].elementName}</Td>
              <Td>{FormData[5].elementName}</Td>
            </tr>
            <tr>
              <Td>
                <InputField
                  type={FormData[4].elementType}
                  value={inputValue[4].value}
                  onChange={changeHandler(4)}
                />
              </Td>
              <Td>
                <InputField
                  type={FormData[5].elementType}
                  value={inputValue[5].value}
                  onChange={changeHandler(5)}
                />
              </Td>
            </tr>
          </Table>
          <Button
            width="10rem"
            padding="1rem"
            color={c.colorvalue[0].value}
            hoverColor={c.colorvalue[1].value}
            onClick={submitHandler}
          >
            {!editmode ? 'Add Employee' : 'Save Changes'}
          </Button>
        </FormContainer>
      </Modal>
    </Employee>
  );
};

export default EmployeeModal;
