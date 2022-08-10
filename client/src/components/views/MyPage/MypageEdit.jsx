import { useDispatch} from "react-redux";
import React, { useState } from "react";

import styled from "styled-components";
import axios from "axios";
import { updateUser } from "../../../_actions/user_action";



const EditMypage_container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  margin: 0px;
  width: 100%;
  height: 100%;
  margin-top: 30px;
  font-family: "Lato", sans-serif;
  font-weight: 1000;
  font-size: 24px;
`;

const Myprofile = styled.div`
  display: flex;
  font-size: 40px;
  font-weight: 1200;
  margin: 60px 0px 50px 0px;
  background-color: white;
  color: black;
  padding: 5px;
`;

const Nickname_container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  //background-color: green;
`;

const Nickname = styled.input`
  margin-top: 10px;
  height: 15px;
  padding: 10px;
  font-size: 15px;
  font-weight: 800;
  resize: none;
  font-family: "Lato", sans-serif;
  &:focus {
    outline: none;
  }
`;

const NicknameC_btn = styled.button`
  border: none;
  color: white;
  background-color: black;
  cursor: pointer;
  font-size: 18px;
  margin: 10px;
`;

const PasswordContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
  //background-color: green;
`;
const Password = styled.input`
  margin-top: 10px;
  height: 15px;
  padding: 10px;
  font-size: 15px;
  font-weight: 800;
  resize: none;
  font-family: "Lato", sans-serif;
  &:focus {
    outline: none;
  }
`;

const PasswordCheck = styled.input`
  margin-top: 10px;
  height: 15px;
  padding: 10px;
  font-size: 15px;
  font-weight: 800;
  resize: none;
  font-family: "Lato", sans-serif;
  &:focus {
    outline: none;
  }
`;

const PasswordCheckBtn = styled.button`
  border: none;
  color: white;
  background-color: black;
  cursor: pointer;
  font-size: 18px;
  margin: 10px;
`;

const Genre_container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px 0;
`;

const Genre = styled.input`
  padding: 10px;
  font-weight: 800;
  display: flex;
`;

const Checkbox = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-size: 16px;
  //width: 40vw;
`;

const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 10px;
`;

const Modify_btn = styled.button`
  display: flex;
  justify-content: center;
  border: none;
  color: white;
  background-color: black;
  cursor: pointer;
  font-size: 30px;
  margin: 10px;
  width: 120px;
`;

const Line = styled.div`
  border-bottom: 1px solid grey;
  width: 12vw;
`;

const Page_area = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  //height: 600px;
`;

const MypageEdit = () => {
  const dispatch = useDispatch();
  const [Name, setName] = useState("");
  const onChangeName = (e) => {
    setName(e.target.value);
  }
  const onNameConfirm = () => {
    let body = {
      name: Name,
      password: "12345678",
    }
    dispatch(updateUser(body)).then((res) =>{
      if(res.payload.success){
        console.log("변경완료");
      }else{
        console.log(res.payload);
      }
    });
  };
  return (
    <>
      <EditMypage_container>
        <Myprofile>내 정보 수정</Myprofile>
        
        <Page_area>
          <Nickname_container>
            닉네임 변경
            <Line></Line>
            <Nickname onChange={onChangeName}></Nickname>
            <NicknameC_btn onClick={onNameConfirm}>confirm</NicknameC_btn>
          </Nickname_container>
          <PasswordContainer>
            비밀번호 변경
            <Line></Line>
            <PasswordCheck></PasswordCheck>
          </PasswordContainer>
          <Nickname_container>
            비밀번호 변경 확인
            <Line></Line>
            <Nickname></Nickname>
            <PasswordCheckBtn>confirm</PasswordCheckBtn>
          </Nickname_container>

          <Genre_container>
            선호 장르
            <Line></Line>
            <Checkbox>
              <CheckboxContainer>
                <Genre
                  type="checkbox"
                  id="cb1"
                  value="musicalopera"
                  name="musicalopera"
                />
                뮤지컬/오페라
              </CheckboxContainer>
              <CheckboxContainer>
                <Genre
                  type="checkbox"
                  id="cb2"
                  value="exhibitionart"
                  name="전시/미술"
                />
                전시/미술
              </CheckboxContainer>
              <CheckboxContainer>
                <Genre type="checkbox" id="cb3" value="theater" name="연극" />
                연극
              </CheckboxContainer>
              <CheckboxContainer>
                <Genre type="checkbox" id="cb4" value="concert" name="콘서트" />
                콘서트
              </CheckboxContainer>
              <CheckboxContainer>
                <Genre type="checkbox" id="cb5" value="classic" name="클래식" />
                클래식
              </CheckboxContainer>
              <CheckboxContainer>
                <Genre type="checkbox" id="cb6" value="dancing" name="무용" />
                무용
              </CheckboxContainer>
            </Checkbox>
          </Genre_container>
          <Modify_btn>Modify</Modify_btn>
        </Page_area>
      </EditMypage_container>
    </>
  );
};

export default MypageEdit;
