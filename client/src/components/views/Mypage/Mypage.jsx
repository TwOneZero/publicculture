import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux"; //내 액션을 한 번에 모아서 처리. 이 기능이
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import MypageEdit from "./MypageEdit";
import MypageInfo from "./MypageInfo";

const MypageBox = styled.div`
  padding: 0px;
  margin: 0px;
  width: 100%;
  height: 100%;
  font-size: 17px;
  font-family: "Noto Sans KR", sans-serif;
`;

const UserBox = styled.div`
  display: flex;
  flex-direction: column;
  background-color: black;
  height: 300px;
  color: white;
  padding-left: 100px;
`;

const MypageTitle = styled.div`
  font-size: 35px;
  margin: 40px 0px 0px 40px;
  font-weight: 500;
`;

const UserInfoBox = styled.div`
  display: flex;
`;

const UserBtnBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserIcon = styled.div`
  color: white;
  font-size: 100px;
  margin: 10px 0px 0px 100px;
`;

const MyinfoBtn = styled.button`
  border: none;
  color: black;
  width: 70px;
  background-color: White;
  cursor: pointer;
  font-size: 18px;
  margin: 0px 0px 0px 105px;
`;

const UserNamePreferBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 0px 0px 80px;
`;

const UserName = styled.div`
  font-weight: 500;
  font-size: 70px;
`;

const PreferenceBox = styled.div`
  font-weight: 500;
  font-size: 25px;
`;

const UserInfoEditBox = styled.button`
  margin: 10px 0px 0px 300px;
  font-weight: 400;
  font-size: 25px;
  color: white;
  background-color: black;
  border: none;
  cursor: pointer;
  &:hover {
    //background-color: #a9a9a9;
    border-bottom: 4px solid white;
  }
`;

const UserInfoEditIcon = styled.div`
  margin: 0px 0px 30px 0px;
`;

const UserInfoEditTitle = styled.div`
  font-weight: 400;
`;

const LikedBox = styled.button`
  margin: 10px 0px 0px 100px;
  font-weight: 400;
  font-size: 25px;
  color: white;
  background-color: black;
  border: none;
  cursor: pointer;
  &:hover {
    //background-color: #a9a9a9;
    border-bottom: 4px solid white;
  }
`;

const LikeIcon = styled.div`
  margin: 0px 0px 30px 0px;
`;

const LikeTitle = styled.div`
  font-weight: 400;
`;

const CommentBox = styled.button`
  margin: 10px 0px 0px 100px;
  font-weight: 400;
  font-size: 25px;
  color: white;
  background-color: black;
  border: none;
  cursor: pointer;
  &:hover {
    //background-color: #a9a9a9;
    border-bottom: 4px solid white;
  }
`;

const CommentIcon = styled.div`
  margin: 0px 0px 30px 0px;
`;

const CommentTitle = styled.div`
  font-weight: 400;
`;

const InfoBox = styled.div`
  color: black;
  background-color: white;
  height: 1000px;
`;

function Mypage() {
  const [mode, setMode] = useState("myProfile");
  const onMenuButtonClick = (e) => {
    if (e.target.id === "myProfile") {
      setMode("myProfile");
      console.log(e.target.id);
    } else if (e.target.id === "editProfile") {
      setMode("editProfile");
    } else if (e.target.id === "likedpostings") {
      setMode("likedpostings");
    } else if (e.target.id === "mycomment") {
      setMode("mycomment");
    }
  };

  return (
    <MypageBox>
      <UserBox>
        <MypageTitle>My Page</MypageTitle>
        <UserInfoBox>
          <UserBtnBox>
            <UserIcon>
              <i class="fa-solid fa-user"></i>
            </UserIcon>
            <MyinfoBtn onClick={onMenuButtonClick} id="myProfile">
              My Info
            </MyinfoBtn>
          </UserBtnBox>
          <UserNamePreferBox>
            <UserName>Mihee</UserName>
            <PreferenceBox>선호 장르 : 콘서트</PreferenceBox>
          </UserNamePreferBox>

          <UserInfoEditBox onClick={onMenuButtonClick} id="editProfile">
            <UserInfoEditIcon>
              <i class="fa-solid fa-gear"></i>
            </UserInfoEditIcon>
            <UserInfoEditTitle>내 정보 수정</UserInfoEditTitle>
          </UserInfoEditBox>

          <LikedBox onClick={onMenuButtonClick} id="likedpostings">
            <LikeIcon>
              <i class="fa-solid fa-heart"></i>
            </LikeIcon>
            <LikeTitle>나의 관심 행사</LikeTitle>
          </LikedBox>

          <CommentBox onClick={onMenuButtonClick} id="mycomment">
            <CommentIcon>
              <i class="fa-solid fa-comment"></i>
            </CommentIcon>
            <CommentTitle> 내가 쓴 댓글 </CommentTitle>
          </CommentBox>
        </UserInfoBox>
      </UserBox>
      <InfoBox>
        <div>
          {mode === "myProfile" && <MypageInfo></MypageInfo>}
          {mode === "editProfile" && <MypageEdit></MypageEdit>}
        </div>
      </InfoBox>
    </MypageBox>
  );
}

export default Mypage;
