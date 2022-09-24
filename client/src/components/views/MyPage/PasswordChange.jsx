import { useDispatch } from "react-redux";
import React, { useState, useEffect } from "react";
import { auth } from "../../../_actions/user_action";
import {
  updateUser_Password,
} from "../../../_actions/user_action";

import {
  PasswordPage,
  PasswordCheck,
  PasswordCheckBtn,
  Line_edit,
  Password_edit,
  PasswordContainer,
  PasswordUpdateBtn,
} from "./MypageElements";

const PasswordChange = () => {
  const dispatch = useDispatch();
  const [Password, setPassword] = useState("");
  const [PasswordConfirm, setPasswordConfirm] = useState("");
  const [userData, setUserData] = useState("");

  useEffect(() => {
    dispatch(auth()).then((res) => {
      setUserData(res.payload);
    });
  }, [setUserData, dispatch]);

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const onChangePasswordConfirm = (e) => {
    setPasswordConfirm(e.target.value);
  };
  const onCheckPassword = (e) => {
    Password === PasswordConfirm
      ? alert("비밀번호가 일치합니다.")
      : alert("비밀번호가 일치하지 않습니다.");
  };

  const onUpdatePasswordConfirm = () => {
    let body = {
      password: Password,
    };
    dispatch(updateUser_Password(body)).then((res) => {
      if (res.payload.success) {
        console.log(res.payload);
      } else {
        console.log(res.payload);
      }
    });

    setPassword("");
    window.location.reload();
  };



  return (
    <>
      <PasswordPage>
        <Password_edit>비밀번호 변경</Password_edit>
        <PasswordContainer>
          비밀번호 변경
          <Line_edit></Line_edit>
          <PasswordCheck onChange={onChangePassword}></PasswordCheck>
        </PasswordContainer>
        <PasswordContainer>
          비밀번호 변경 확인
          <Line_edit></Line_edit>
          <PasswordCheck onChange={onChangePasswordConfirm}></PasswordCheck>
          <PasswordCheckBtn onClick={onCheckPassword}>confirm</PasswordCheckBtn>
          <PasswordUpdateBtn onClick={onUpdatePasswordConfirm}>
            Password Change
          </PasswordUpdateBtn>
        </PasswordContainer>
      </PasswordPage>
    </>
  );
};

export default PasswordChange;
