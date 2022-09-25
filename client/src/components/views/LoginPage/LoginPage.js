import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../../_actions/user_action';
import Auth from '../../../hoc/auth';

import {
  LoginContainer,
  LoginPageContainer,
  LoginText,
  LoginFormContainer,
  InputEmail,
  InputPW,
  LoginBtn,
} from './LoginElements';

function LoginPage() {
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const onSubmitHandler = (e) => {
    e.preventDefault(); //refresh 안 시킴

    let body = {
      email: Email,
      password: Password,
    };

    dispatch(loginUser(body)).then((res) => {
      if (res.payload.loginSuccess) {
        navigate('/');
      } else {
        alert(res.payload.message);
      }
    });
  };

  return (
    // <div
    //   style={{
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     width: '100%',
    //   }}
    // >
    <LoginContainer>
      <LoginPageContainer onSubmit={onSubmitHandler}>
        <LoginText>Login</LoginText>
        <LoginFormContainer>
          <InputEmail
            onChange={onChangeEmail}
            type='text'
            id='id'
            value={Email}
            placeholder='이메일 입력'
          />
          <InputPW
            onChange={onChangePassword}
            type='password'
            id='password'
            value={Password}
            placeholder='패스워드 입력'
          />
          <LoginBtn>로그인</LoginBtn>
        </LoginFormContainer>
      </LoginPageContainer>
      </LoginContainer>
  );
}

export default Auth(LoginPage, false);
