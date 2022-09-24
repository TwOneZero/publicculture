import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"; //내 액션을 한 번에 모아서 처리. 이 기능이
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import MypageEdit from "./MypageEdit";
import MypageInfo from "./MypageInfo";
import MyLikedPost from "./MyLikedPost";
import PasswordChange from "./PasswordChange";
import Auth from "../../../hoc/auth";
import { auth } from "../../../_actions/user_action";
import axios from "axios";
import { } from "react-icons/fa";

import {
  MypageBox,
  UserBox,
  MypageTitleBtn,
  UserInfoBox,
  UserBtnBox,
  UserIcon,
  MyinfoBtn,
  UserNamePreferBox,
  UserName,
  PreferenceBox,
  UserInfoMenuBtns,
  UserInfoEditBox,
  InfoBox,

  MypageIcon,
  MypageTitle,

  UserTabContainer,
  UserTab,
  UserTabUl,
  UserTabLi,
  UserTabItem,
} from "./MypageElements";
import MyComment from "./MyComment";

function Mypage() {
  const navigate = useNavigate();
  const [mode, setMode] = useState("myProfile");
  const userState = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const onMenuButtonClick = (e) => {
    if (e.target.id === "myProfile") {
      setMode("myProfile");
      console.log(e.target.id);
    } else if (e.target.id === "editProfile") {
      setMode("editProfile");
    } else if (e.target.id === "myLikedPost") {
      setMode("myLikedPost");
    } else if (e.target.id === "passwordChange") {
      setMode("passwordChange");
    } else if (e.target.id === "mycomment") {
      setMode("mycomment");
    }
  };

  return (
    <>
      <UserTabContainer>
        <UserTab>
          <UserTabUl>
            <UserTabLi>
              <UserTabItem>
                <MypageIcon>
                  <i
                    onClick={onMenuButtonClick}
                    id="editProfile"
                    className="fa-solid fa-gear"
                  ></i>
                </MypageIcon>
                <MypageTitle onClick={onMenuButtonClick} id="myProfile">
                  내 프로필
                </MypageTitle>
              </UserTabItem>
            </UserTabLi>
            <UserTabLi>
              <UserTabItem>
                <MypageIcon>
                  <i
                    onClick={onMenuButtonClick}
                    id="editProfile"
                    className="fa-solid fa-gear"
                  ></i>
                </MypageIcon>
                <MypageTitle onClick={onMenuButtonClick} id="editProfile">
                  내 정보 수정
                </MypageTitle>
              </UserTabItem>
            </UserTabLi>
            <UserTabLi>
              <UserTabItem>
                <MypageIcon>
                  <i
                    className="fa-solid fa-lock"
                    onClick={onMenuButtonClick}
                    id="passwordChange"
                  ></i>
                </MypageIcon>
                <MypageTitle onClick={onMenuButtonClick} id="passwordChange">
                  {" "}
                  비밀번호 변경{" "}
                </MypageTitle>
              </UserTabItem>
            </UserTabLi>
            <UserTabLi>
              <UserTabItem>
                <MypageIcon>
                  <i
                    className="fa-solid fa-heart"
                    onClick={onMenuButtonClick}
                    id="myLikedPost"
                  ></i>
                </MypageIcon>
                <MypageTitle onClick={onMenuButtonClick} id="myLikedPost">
                  나의 관심 행사
                </MypageTitle>
              </UserTabItem>
            </UserTabLi>
            <UserTabLi>
              <UserTabItem>
                <MypageIcon>
                  <i
                    className="fa-solid fa-comment"
                    onClick={onMenuButtonClick}
                    id="myLikedPost"
                  ></i>
                </MypageIcon>
                <MypageTitle onClick={onMenuButtonClick} id="mycomment">
                  내가 쓴 댓글
                </MypageTitle>
              </UserTabItem>
            </UserTabLi>
          </UserTabUl>
        </UserTab>
      </UserTabContainer>

      <MypageBox>
        <UserBox>
          {/* <MypageTitleBtn onClick={onMenuButtonClick} id="myProfile">
            My Page
          </MypageTitleBtn> */}
          <UserInfoBox>
            <UserBtnBox>
              <UserIcon>
                <i className="fa-solid fa-user"></i>
              </UserIcon>
              <MyinfoBtn onClick={onMenuButtonClick} id="myProfile">
                My Info
              </MyinfoBtn>
            </UserBtnBox>
            <UserNamePreferBox>
              <UserName>{userState.userData.name}</UserName>

              <PreferenceBox>
                선호 장르 : {userState.userData.genre}
              </PreferenceBox>
            </UserNamePreferBox>



          </UserInfoBox>
        </UserBox>
        <InfoBox>
          <div>
            {mode === "myProfile" && <MypageInfo></MypageInfo>}
            {mode === "editProfile" && <MypageEdit></MypageEdit>}
            {mode === "myLikedPost" && <MyLikedPost></MyLikedPost>}
            {mode === "passwordChange" && <PasswordChange></PasswordChange>}
            {mode === "mycomment" && <MyComment />}
          </div>
        </InfoBox>
      </MypageBox>
    </>
  );
}

export default Auth(Mypage, true);
