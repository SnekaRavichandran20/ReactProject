import React, { useEffect, useState } from 'react';
import WrapContainer from '../../Containers/WrapContainer/WrapContainer';
import Search from '../Ui/Search/Search';
import Filter from '../Ui/Filter/Filter';
import FilterOption from '../FilterOption/FilterOption';
import Status from '../Ui/Status/Status';
import EditIcon from '../../Assets/edit.svg';
import DeleteIcon from '../../Assets/remove.svg';
import { Image } from '../Ui/Image/Image';
import Button from '../Ui/Button/Button';
import EmployeeModal from '../EmployeeModal/EmployeeModal';
import Profile from '../Ui/Profile/Profile';
import {
  Heading,
  Table,
  Td,
  Tr,
  UpdateButton,
  NoMatch,
  WrappedContainer,
  PaginateButton,
  UserManage,
  NotificationModal,
  DeleteConfirmationModal,
  UserTable,
  DeleteModal,
  P,
  Pagination,
  UserManagementContent,
} from './UserManagementStyle';
import { RestoreButton } from '../CompanyAdmin/CustomizeUi/CustomizeUiStyle';
import { Close } from '../EmployeeModal/EmployeeModalStyle';
import { useSelector } from 'react-redux';
import axios from 'axios';
import Spinner from '../Ui/Spinner/Spinner';

// the data of icons used in edit and delete employee
const Icon: ImageProp[] = [
  {
    source: EditIcon,
    alternate: 'Edit Icon',
    width: '16px',
  },
  {
    source: DeleteIcon,
    alternate: 'Delete Icon',
    width: '16px',
  },
];

interface dataProps {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
  contact: string;
  title: string;
  companyname: string;
  status?: string;
  role: string;
}

const UserManagement = () => {
  const [showFilterOption, setFilterOption] = useState(false);
  const [showModal, setModal] = useState(false);
  const [filterValue, setFilterValue] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [page, setpage] = useState(1);
  const [dataindex, setdataindex] = useState('');
  const [edit, editmode] = useState(false);
  const [notification, setNotification] = useState('');
  const [deleteConfirmation, setConfirmation] = useState<JSX.Element | string>(
    ''
  );
  const c = useSelector((state: any) => state.cus);
  const [loading, setLoading] = useState(true);
  const [count, setcount] = useState(0);
  let firstdata = [
    {
      id: '1',
      firstname: 'John',
      lastname: 'Wick',
      email: 'Siddarthkumar@propelinc.com',
      contact: '1234567890',
      title: 'Software Developer',
      companyname: 'Propel',
      status: 'Active',
      role: 'admin',
    },
  ];
  const [employeedetail, setuserdetail] = useState(firstdata);

  const getdata = (startindex: number, key: string) => {
    let sendingdata = {
      searchkey: key,
      startingindex: startindex,
      rowsize: 5,
    };
    axios
      .post(process.env.REACT_APP_BASE_URL + '/user-list', sendingdata)
      .then((response) => {
        setLoading(false);
        setuserdetail(response.data.users);
        setcount(response.data.count);
      })
      .catch((err) => {
        console.log('error', err);
      });
  };

  useEffect(() => getdata(page, searchValue), [page, searchValue]);

  // the delete handler for deleting a particular record
  const deleteHandler = (id: string) => {
    axios
      .delete(process.env.REACT_APP_BASE_URL + '/delete/' + id, {
        headers: {
          Accept: '*',
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json; charset=UTF-8',
        },
      })
      .then((response) => {
        getdata(page, searchValue);
        setNotification('Data deleted successfully');
        setTimeout(() => setNotification(''), 1000);
      })
      .catch((err) => {
        console.log('error', err.response);
      });
  };

  // the handler asking confirmation of delete action
  const deleteConfirmationHandler = (id: string) => {
    let confirmation = (
      <DeleteConfirmationModal onClick={() => setConfirmation(' ')}>
        <DeleteModal>
          <Close onClick={() => setConfirmation('')}>X</Close>
          <P>Are you sure? Do you want to delete?</P>
          <Button
            width="4rem"
            padding=".6rem"
            color="#c31515"
            hoverColor="#8f0000"
            onClick={() => deleteHandler(id)}
          >
            Yes
          </Button>
          <RestoreButton onClick={() => setConfirmation('')}>
            Cancel
          </RestoreButton>
        </DeleteModal>
      </DeleteConfirmationModal>
    );
    setConfirmation(confirmation);
  };

  // the edit handler to edit a particular record
  const editHandler = (data: dataProps) => {
    editmode(true);
    setdataindex(data.id);
    let fieldValue = [
      data.firstname,
      data.lastname,
      data.email,
      data.contact,
      data.title,
      data.companyname,
    ];
    let updatedValue = [...inputValue];
    let i = 0;
    fieldValue.map((value: any) => {
      updatedValue[i].value = value;
      updatedValue[i].valid = true;
      updatedValue[i].submit = true;
      i++;
      return 0;
    });
    setValue(updatedValue);
    setModal(!showModal);
  };

  // the search onchange handler to deliver instant output on the employee details table
  const searchHandler = (event: { target: { value: string } }) => {
    setSearchValue(event.target.value.toLowerCase());
  };

  // the filter onchange handler to deliver instant output on the employee details table
  const filterHandler = (value: string) => {
    setFilterValue(value.toLowerCase());
  };

  // the method for filteroption show and hide
  const toggle = () => {
    setFilterOption(!showFilterOption);
    setFilterValue('');
  };


  // the modal toggle which when opened by clicking add employee or edit option
  const Modal = () => {
    setModal(!showModal);
    let updatedValue = [...inputValue];
    updatedValue.map((data: any) => {
      data.value = '';
      data.valid = true;
      data.submit = false;
      return 0;
    });
    setValue(updatedValue);
  };

  // the input fields data for add/ edit employee form
  const [inputValue, setValue] = useState([
    {
      field: 'firstname',
      value: '',
      valid: true,
      submit: false,
    },
    {
      field: 'lastname',
      value: '',
      valid: true,
      submit: false,
    },
    {
      field: 'mail',
      value: '',
      valid: true,
      submit: false,
    },
    {
      field: 'contact',
      value: '',
      valid: true,
      submit: false,
    },
    {
      field: 'title',
      value: '',
      valid: true,
      submit: false,
    },
    {
      field: 'company',
      value: '',
      valid: true,
      submit: false,
    },
  ]);

  // the onchange handler for the input fields in the add/ edit employee form
  const changeHandler = (index: number) => (e: any) => {
    let updatedValue = [...inputValue];
    updatedValue[index].value = e.target.value;
    updatedValue[index].valid = checkValidity(
      e.target.value,
      updatedValue[index].field
    );
    updatedValue[index].submit = updatedValue[index].valid;
    setValue(updatedValue);
  };

  // validation of the username and password
  const checkValidity = (value: string, input: string): boolean => {
    const pattern =
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    let isValid = true;
    if (input === 'mail') {
      isValid = pattern.test(value);
      return isValid;
    }
    isValid = value.trim() !== '';
    return isValid;
  };

  // the submit handler for the input fields in the add/ edit employee form
  const submitHandler = () => {
    if (
      !inputValue[0].submit ||
      !inputValue[1].submit ||
      !inputValue[2].submit
    ) {
      if (!inputValue[0].submit) {
        let updatedValue = [...inputValue];
        updatedValue[0].valid = false;
        setValue(updatedValue);
      }
      if (!inputValue[1].submit) {
        let updatedValue = [...inputValue];
        updatedValue[1].valid = false;
        setValue(updatedValue);
      }
      if (!inputValue[2].submit) {
        let updatedValue = [...inputValue];
        updatedValue[2].valid = false;
        setValue(updatedValue);
      }
    } else {
      setModal(!showModal);

      if (edit) {
        let updatedata = {
          firstname: inputValue[0].value,
          lastname: inputValue[1].value,
          username: inputValue[2].value,
          email: inputValue[2].value,
          contact: inputValue[3].value,
          companyname: inputValue[4].value,
          role: 'employee',
          title: inputValue[4].value,
        };
        axios
          .put(
            process.env.REACT_APP_BASE_URL + '/update/' + dataindex,
            updatedata,
            {
              headers: {
                Accept: '*',
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json; charset=UTF-8',
              },
            }
          )
          .then((response) => {
            setNotification('Data edited successfully');
            setTimeout(() => setNotification(''), 1000);
            getdata(page, searchValue);
          })
          .catch((err) => {
            setNotification(err.response.data.error);
            setTimeout(() => setNotification(''), 1000);
          });
      } else {
        const characters =
          'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        const charactersLength = characters.length;
        for (let i = 0; i < 8; i++) {
          result += characters.charAt(
            Math.floor(Math.random() * charactersLength)
          );
        }
        let edata = {
          firstname: inputValue[0].value,
          lastname: inputValue[1].value,
          username: inputValue[2].value,
          email: inputValue[2].value,
          password: result,
          contact: inputValue[3].value,
          companyname: inputValue[5].value,
          role: 'employee',
          title: inputValue[4].value,
        };
        axios
          .post(process.env.REACT_APP_BASE_URL + '/register', edata, {
            headers: {
              Accept: '*',
              'Access-Control-Allow-Origin': '*',
              'Content-Type': 'application/json; charset=UTF-8',
            },
          })
          .then((response) => {
            setNotification('Data added successfully');
            setTimeout(() => setNotification(''), 1000);
            getdata(page, searchValue);
          })
          .catch((err) => {
            setNotification(err.response.data.error);
            setTimeout(() => setNotification(''), 1000);
            console.log('error', err.response.data.error);
          });
      }
      let updatedValue = [...inputValue];
      updatedValue.map((data: any) => {
        data.value = '';
        data.valid = true;
        data.submit = false;

        return 0;
      });
      setValue(updatedValue);
    }
  };

  let filterOption = showFilterOption ? (
    <FilterOption valueHandler={filterHandler} handler={toggle}></FilterOption>
  ) : (
    ''
  );

  // the content of the employee details table
  let form = employeedetail.map((userdetail) => {
    var randomcolor = Math.floor(Math.random() * 16777210).toString(16);
    if (randomcolor.length === 5) {
      randomcolor = '0000ff';
    }
    randomcolor = '#' + randomcolor;
    return (filterValue === 'active' && userdetail.status) ||
      (filterValue !== 'active' && !userdetail.status) ||
      filterValue === '' ? (
      <tr key={userdetail.id}>
        <Td>
          <Profile randomColor={randomcolor}>
            {userdetail.firstname.charAt(0).toUpperCase()}
          </Profile>
          {userdetail.firstname.charAt(0).toUpperCase() +
            userdetail.firstname.slice(1)}{' '}
          {userdetail.lastname.charAt(0).toUpperCase() +
            userdetail.lastname.slice(1)}
        </Td>
        <Td>{userdetail.email}</Td>
        <Td>
          <Status status={userdetail.status ? 'Active' : 'Inactive'}></Status>
        </Td>
        {userdetail.role === 'admin' ? (
          <Td colSpan={2}></Td>
        ) : (
          <Td>
            <UpdateButton onClick={(e) => editHandler(userdetail)}>
              <Image image={Icon[0]} />
              Edit
            </UpdateButton>
            <UpdateButton
              onClick={(e) => deleteConfirmationHandler(userdetail.id)}
            >
              <Image image={Icon[1]} />
              Remove
            </UpdateButton>
          </Td>
        )}
      </tr>
    ) : (
      <tr></tr>
    );
  });

  return (
    <UserManagementContent>
      {showModal ? (
        <EmployeeModal
          handler={Modal}
          inputValue={inputValue}
          changeHandler={changeHandler}
          submitHandler={submitHandler}
          editmode={edit}
        ></EmployeeModal>
      ) : (
        ' '
      )}
      {deleteConfirmation}
      {loading ? (
        <Spinner></Spinner>
      ) : (
        <UserManage>
          <Heading color={c.colorvalue[2].value}>User Management</Heading>
          <WrappedContainer>
            <WrapContainer>
              <Search onKeyUp={searchHandler} width="60%" />
              <Filter toggleHandler={toggle} />
            </WrapContainer>
            <Button
              width="auto"
              marginBottom="1rem"
              color={c.colorvalue[1].value}
              hoverColor={c.colorvalue[0].value}
              onClick={Modal}
              padding=".5rem"
            >
              Add Employee +
            </Button>
          </WrappedContainer>
          {filterOption}
          <UserTable>
            <Table>
              <thead>
                <Tr>
                  <Td>Name</Td>
                  <Td>Email Id</Td>
                  <Td>Status</Td>
                  <Td colSpan={2}>Action</Td>
                </Tr>
              </thead>
              <tbody>
                {form}
                {form.length === 0 ||
                employeedetail.filter(
                  (d) =>
                    (filterValue === 'active' && d.status) ||
                    (filterValue !== 'active' && !d.status) ||
                    filterValue === ''
                ).length === 0 ? (
                  <tr>
                    <NoMatch colSpan={4}>No data found</NoMatch>
                  </tr>
                ) : (
                  <tr></tr>
                )}
              </tbody>
            </Table>
          </UserTable>
          {notification !== '' ? (
            <NotificationModal>{notification}</NotificationModal>
          ) : (
            ''
          )}
          <Pagination>
            <PaginateButton
              color={c.colorvalue[0].value}
              hoverColor={c.colorvalue[1].value}
              disabled={page === 1}
              onClick={() => {
                getdata(page - 1, searchValue);
                setpage(page - 1);
              }}
            >
              Previous
            </PaginateButton>
            {page}
            <PaginateButton
              color={c.colorvalue[0].value}
              hoverColor={c.colorvalue[1].value}
              disabled={count <= 5 * page}
              onClick={() => {
                getdata(page + 1, searchValue);
                setpage(page + 1);
              }}
            >
              Next
            </PaginateButton>
          </Pagination>
        </UserManage>
      )}
    </UserManagementContent>
  );
};
export default UserManagement;
