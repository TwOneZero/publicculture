import React, { useState } from "react";
import MypageEdit from "./MypageEdit";
import MypageProfile from "./MypageProfile";
import MyLikedPost from "./MyLikedPost";
import PasswordChange from "./PasswordChange";
import Auth from "../../../hoc/auth";
import MyComment from "./MyComment";
import {
  InfoBox,
  MypageIcon,
  MypageTitle,
  UserTabContainer,
  UserTab,
  UserTabUl,
  UserTabLi,
  UserTabItem,
} from "./MypageElements";





function Mypage() {
  const [mode, setMode] = useState('myProfile');
  const onMenuButtonClick = (e) => {
    if (e.target.id === 'myProfile') {
      setMode('myProfile');
      console.log(e.target.id);
    } else if (e.target.id === 'editProfile') {
      setMode('editProfile');
    } else if (e.target.id === 'myLikedPost') {
      setMode('myLikedPost');
    } else if (e.target.id === 'passwordChange') {
      setMode('passwordChange');
    } else if (e.target.id === 'mycomment') {
      setMode('mycomment');
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
                    className="fa-solid fa-user"
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
      <InfoBox>
          <div>
            {mode === "myProfile" && <MypageProfile></MypageProfile>}
            {mode === "editProfile" && <MypageEdit></MypageEdit>}
            {mode === "myLikedPost" && <MyLikedPost></MyLikedPost>}
            {mode === "passwordChange" && <PasswordChange></PasswordChange>}
            {mode === "mycomment" && <MyComment />}
          </div>
        </InfoBox>
      
    </>
  );
}

export default Auth(Mypage, true);
