import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux'; //내 액션을 한 번에 모아서 처리. 이 기능이
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../../_actions/user_action';
import Auth from '../../../hoc/auth';

import {
  Login_Container,
  Login_page_container,
  Login_text,
  Login_form_container,
  Input_Email,
  Input_PW,
  Login_btn,
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
    <Login_Container>
      <Login_page_container onSubmit={onSubmitHandler}>
        <Login_text>Login</Login_text>
        <Login_form_container>
          <Input_Email
            onChange={onChangeEmail}
            type='text'
            id='id'
            value={Email}
            placeholder='이메일 입력'
          />
          <Input_PW
            onChange={onChangePassword}
            type='password'
            id='password'
            value={Password}
            placeholder='패스워드 입력'
          />
          <Login_btn>로그인</Login_btn>
        </Login_form_container>
      </Login_page_container>
      </Login_Container>
  );
}

export default Auth(LoginPage, false);
