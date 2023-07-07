import React, { useState } from 'react';
import {
  Heading,
  ImageContainer,
  InputContainer,
  InputField,
  LoginContainer,
  LoginPageContainer,
  LogoSize,
  IconSize,
  ParagraphStyle,
  Error,
} from './LoginStyle';
import Logo from '../../Assets/propel.png';
import UserIcon from '../../Assets/person.svg';
import LockIcon from '../../Assets/lock.svg';
import { Image } from '../../Components/Ui/Image/Image';
import Button from '../../Components/Ui/Button/Button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

// for the logo image
const LogoImage: ImageProp[] = [
  {
    source: Logo,
    alternate: 'Logo',
    width: LogoSize,
  },
  {
    source: UserIcon,
    alternate: 'User Icon',
    width: IconSize,
  },
  {
    source: LockIcon,
    alternate: 'Password',
    width: IconSize,
  },
];

const Login = () => {
  // the data to be displayed for input username and password
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');

  const [emailvalid, setemailvalid] = useState(false);
  const [passwordvalid, setpasswordvalid] = useState(false);

  const [emailerror, setemailerror] = useState('');
  const [passworderror, setpassworderror] = useState('');

  const [error, seterror] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // validation of the username and password
  const checkValidity = (value: string, inputtype: string) => {
    if (inputtype === 'email') {
      const pattern =
        /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
      if (value.trim() === '') {
        setemailerror('Please Enter User Name');
      } else if (!pattern.test(value)) {
        setemailerror('Please Enter a valid User Name');
      } else {
        setemailerror('');
        setemailvalid(true);
        setemail(value.trim());
      }
    } else {
      if (value.trim() === '') {
        setpassworderror('Please Enter Password');
      } else if (value.length < 6) {
        setpassworderror('Minimum length of password should be 6');
      } else if (value.length > 12) {
        setpassworderror('Maximum length of password should be 12');
      } else {
        setpassworderror('');
        setpasswordvalid(true);
        setpassword(value.trim());
      }
    }
  };

  // two way binding on input value and onchange for the input and to show instant error message
  const inputChangedHandler = (event: any, inputtype: string) => {
    checkValidity(event.target.value, inputtype);
  };

  // const history = useHistory();

  // to check validation on submit and redirect to home page
  const submitHandler = () => {
    if (emailvalid && passwordvalid) {
      let logindata = {
        username: email,
        password: password,
      };
      axios
        .post(process.env.REACT_APP_BASE_URL + '/login', logindata, {
          headers: {
            Accept: '*',
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json; charset=UTF-8',
          },
        })
        .then((response) => {
          console.log(response);
          window.localStorage.setItem('id', response.data.id);
          navigate('/home/admin/sub');
          let username = response.data.firstname.charAt(0).toUpperCase() + response.data.firstname.slice(1) + ' ' + response.data.lastname.charAt(0).toUpperCase() + response.data.lastname.slice(1);
          window.localStorage.setItem("username", username);

          // iVB - png  // /9j- jpg //PHN, PD9 - svg
          let type = '';
          if (response.data.logourl.slice(0, 1) === 'P') {
            type = 'svg+xml';
          } else if (response.data.logourl.slice(0, 3) === 'iVB') {
            type = 'png';
          } else if (response.data.logourl.slice(0, 3) === '/9j') {
            type = 'jpeg';
          }
          let url = 'data:image/' + type + ';base64,' + response.data.logourl;

          window.localStorage.setItem('image', url);
          dispatch({ type: 'logosetup', value: url });
          window.localStorage.setItem(
            'primary',
            response.data.customUI.primarycolor
          );
          window.localStorage.setItem(
            'secondary',
            response.data.customUI.secondarycolor
          );
          window.localStorage.setItem('font', response.data.customUI.fontcolor);
          dispatch({
            type: 'initialsettingcolor',
            value: response.data.customUI,
          });
        })
        .catch((err) => {
          // console.log(err.response)
          seterror(err.response.data.message);
        });
    } else {
      checkValidity(email, 'email');
      checkValidity(password, 'password');
    }
  };

  return (
    // login page content
    <LoginPageContainer>
      <ImageContainer>
        <Image image={LogoImage[0]} />
      </ImageContainer>
      <LoginContainer>
        <Heading>Login</Heading>

        <div>
          <InputContainer>
            <Image image={LogoImage[1]} />
            <InputField
              type="email"
              placeholder="Enter User Name"
              // value={email}
              onChange={(event) => inputChangedHandler(event, 'email')}
            />
          </InputContainer>
          {emailerror !== '' ? <Error>{emailerror}</Error> : ''}
        </div>
        <div>
          <InputContainer>
            <Image image={LogoImage[2]} />
            <InputField
              type="password"
              placeholder="Enter Password"
              // value={password}
              onChange={(event) => inputChangedHandler(event, 'password')}
            />
          </InputContainer>
          {passworderror !== '' ? <Error>{passworderror}</Error> : ''}
        </div>

        <ParagraphStyle>Forgot Password?</ParagraphStyle>
        <Error>
          {error}
        </Error>
        <Button
          width="100%"
          color="#069AD9"
          hoverColor="#00467f"
          onClick={() => submitHandler()}
          padding="1rem"
          // loading={this.state.loading}
        >
          Login
        </Button>
      </LoginContainer>
    </LoginPageContainer>
  );
};

export default Login;
