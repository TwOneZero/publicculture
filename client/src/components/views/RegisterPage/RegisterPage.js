// import { Axios } from 'axios';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../../../_actions/user_action';
import styled from 'styled-components';
import Auth from '../../../hoc/auth';
import axios from 'axios';

const Register_page_container = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: middle;
  align-items: center;
  padding: 20px 10px;
  width: 500px;
  height: 1000px;
`;

const Register_text = styled.div`
  margin: 70px 0;
  font-size: 24px;
  font-weight: 1000;
`;

const Register_form_container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 500px;
`;

const Input_Name = styled.input`
  width: 400px;
  height: 50px;
  border: 1px solid lightgrey;
  outline: none;
  margin-bottom: 10px;
  padding-left: 10px;
  &:focus {
    border: 1px solid grey;
  }
`;

const Input_Nickname = styled.input`
  width: 400px;
  height: 50px;
  border: 1px solid lightgrey;
  outline: none;
  margin: 20px 0px 10px 0px;
  padding-left: 10px;
  &:focus {
    border: 1px solid grey;
  }
`;

const NicknameCheckBtn = styled.button`
  width: 413px;
  height: 50px;
  background-color: black;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 15px;
  &:hover {
    cursor: pointer;
  }
  margin: 5px 0px 20px 0px;
`;

const Input_Email = styled.input`
  width: 400px;
  height: 50px;
  border: 1px solid lightgrey;
  outline: none;
  margin-bottom: 10px;
  padding-left: 10px;
  &:focus {
    border: 1px solid grey;
  }
`;

const EmailCheckBtn = styled.button`
  width: 413px;
  height: 50px;
  background-color: black;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 15px;
  &:hover {
    cursor: pointer;
  }
  margin: 5px 0px 20px 0px;
`;

const Input_PW = styled.input`
  width: 400px;
  height: 50px;
  border: 1px solid lightgrey;
  outline: none;
  margin-bottom: 10px;
  padding-left: 10px;
  &:focus{
    border: 1px solid grey;
`;

const Input_ConfirmPW = styled.input`
  width: 400px;
  height: 50px;
  border: 1px solid lightgrey;
  outline: none;
  margin-bottom: 10px;
  padding-left: 10px;
  &:focus{
    border: 1px solid grey;
`;

const Register_btn = styled.button`
  width: 413px;
  height: 50px;
  background-color: black;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 15px;
  &:hover {
    cursor: pointer;
  }
  margin-top: 20px;
`;

function RegisterPage() {
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [Name, setName] = useState('');
  const [ConfirmPW, setConfirmPW] = useState('');

  const dispatch = useDispatch();
  let navigate = useNavigate();
  //SetState Handler
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const onChangeConfirmPW = (e) => {
    setConfirmPW(e.target.value);
  };

  const onCheckEmail = async () => {
    await axios.post('/api/users/checkEmail', { email: Email }).then((res) => {
      if (res.data.success) {
        alert('사용 가능한 이메일 입니다.');
      } else {
        alert('이미 존재하는 이메일 입니다.');
      }
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault(); //refresh 안 시킴

    if (Password !== ConfirmPW) {
      return alert('비밀번호가 일치하지 않습니다.');
    }

    let body = {
      email: Email,
      name: Name,
      password: Password,
    };

    dispatch(registerUser(body)).then((res) => {
      if (res.payload.success) {
        navigate('/login');
      } else {
        if (res.payload.err.keyValue.email === body.email) {
          alert('이메일이 존재합니다.');
        }
      }
    });
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
      }}
    >
      <Register_page_container onSubmit={onSubmitHandler}>
        <Register_text>Register</Register_text>
        <Register_form_container>
          <Input_Name
            type='text'
            value={Name}
            onChange={onChangeName}
            placeholder='이름'
          />

          <Input_Email
            type='email'
            value={Email}
            onChange={onChangeEmail}
            placeholder='이메일'
          />
          <EmailCheckBtn type='button' onClick={onCheckEmail}>
            이메일 중복 확인
          </EmailCheckBtn>
          <Input_PW
            type='password'
            value={Password}
            onChange={onChangePassword}
            placeholder='비밀번호'
          />
          <Input_ConfirmPW
            type='password'
            value={ConfirmPW}
            onChange={onChangeConfirmPW}
            placeholder='비밀번호 확인'
          />

          <Register_btn>회원가입</Register_btn>
        </Register_form_container>
      </Register_page_container>
    </div>
  );
}

export default Auth(RegisterPage, false);
