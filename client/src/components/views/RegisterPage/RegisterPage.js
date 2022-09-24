/* eslint-disable react/jsx-pascal-case */
// import { Axios } from 'axios';
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { checkName, registerUser } from "../../../_actions/user_action";
import styled from "styled-components";
import Auth from "../../../hoc/auth";
import axios from "axios";

import {
  RegisterPage_Container,
  Register_page_container,
  Register_text,
  Register_form_container,
  Input_Name,
  NameCheckBtn,
  Input_Email,
  Input_PW,
  Input_ConfirmPW,
  Register_btn,
} from './RegisterElements';

function RegisterPage() {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Name, setName] = useState("");
  const [ConfirmPW, setConfirmPW] = useState("");

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

  const onCheckName = async () => {
    dispatch(checkName({ name: Name })).then((res) => {
      if (res.payload.success) {
        alert("사용가능한 닉네임입니다.");
      } else {
        alert("이미 존재하는 닉네임입니다.");
      }
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault(); //refresh 안 시킴

    if (Password !== ConfirmPW) {
      return alert("비밀번호가 일치하지 않습니다.");
    }

    let body = {
      email: Email,
      name: Name,
      password: Password,
    };

    dispatch(registerUser(body)).then((res) => {
      if (res.payload.success) {
        navigate("/login");
      } else {
        console.log(res.payload);
      }
    });
  };

  return (
    <RegisterPage_Container>
      <Register_page_container onSubmit={onSubmitHandler}>
        <Register_text>Register</Register_text>
        <Register_form_container>
          <Input_Name
            type="text"
            value={Name}
            onChange={onChangeName}
            placeholder="닉네임"
          />
          <NameCheckBtn onClick={onCheckName}>닉네임 중복 확인</NameCheckBtn>
          <Input_Email
            type="email"
            value={Email}
            onChange={onChangeEmail}
            placeholder="이메일"
          />
          <Input_PW
            type="password"
            value={Password}
            onChange={onChangePassword}
            placeholder="비밀번호"
          />
          <Input_ConfirmPW
            type="password"
            value={ConfirmPW}
            onChange={onChangeConfirmPW}
            placeholder="비밀번호 확인"
          />

          <Register_btn>회원가입</Register_btn>
        </Register_form_container>
      </Register_page_container>
    </RegisterPage_Container>
  );
}

export default Auth(RegisterPage, false);
