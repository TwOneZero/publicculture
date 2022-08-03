import React from "react";
import styled from "styled-components";
import Mypage from "./Mypage";

const Mypage_container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 30px;
`;
const Myprofile = styled.div`
  display: flex;
  font-size: 36px;
  margin-bottom: 60px;
  margin-top: 120px;
  background-color: black;
  color: white;
  padding: 5px;
`;

const Nickname_container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  //background-color: green;
`;

const Nickname = styled.div`
  padding: 12px;
  font-size: 23px;
  font-weight: 500;
`;

const EmailContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  //background-color: green;
  margin-top: 50px;
`;

const Email = styled.div`
  padding: 12px;
  font-size: 20px;
  font-weight: 500;
  //width: 50vw;
`;

const Genre_container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  //background-color: green;
  margin-top: 50px;
`;

const Genre = styled.div`
  padding: 12px;
  font-size: 23px;
  font-weight: 500;
  display: flex;
`;

const Line = styled.div`
  border-bottom: 1px solid grey;
  width: 12vw;
`;

const Page_area = styled.div`
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 300px;
  // left: 50%
  // top: 50%
  padding: 5px;
`;

const MypageInfo = ({ nickname, about_me, genres }) => {
  return (
    <>
      <Mypage_container>
        <Myprofile>My Profile</Myprofile>
        <Page_area>
          <Nickname_container>
            Nickname
            <Line></Line>
            <Nickname>Mihee</Nickname>
          </Nickname_container>
          <EmailContainer>
            E-mail
            <Line></Line>
            <Email>chemh9738@gmail.com</Email>
          </EmailContainer>
          <Genre_container>
            Prefer Genre
            <Line></Line>
            <Genre>콘서트</Genre>
          </Genre_container>
        </Page_area>
      </Mypage_container>
    </>
  );
};

export default MypageInfo;
