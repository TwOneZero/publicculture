import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'; //내 액션을 한 번에 모아서 처리. 이 기능이
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import MypageEdit from './MypageEdit';
import MypageInfo from './MypageInfo';
import Auth from '../../../hoc/auth';
import { auth } from '../../../_actions/user_action';
import axios from 'axios';
const MypageBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  //width: 1000px;
  padding: 0px;
  margin: 0px;
  width: 100%;
  height: 100%;
  font-size: 17px;
  font-family: 'Noto Sans KR', sans-serif;
`;

const UserBox = styled.div`
  display: flex;
  flex-direction: column;
  background-color: black;
  align-items: center;
  height: 300px;
  color: white;
  padding-left: 100px;
`;

const UserBoxContainer = styled.div`
  width: 1500px;
`;

const MypageTitle = styled.div`
  font-size: 35px;
  margin: 20px 0px 0px 40px;
  font-weight: 500;
`;

const UserInfoBox = styled.div`
  display: flex;
  width: 100%;
`;

const UserBtnBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 20px 0px 80px;
`;

const UserIcon = styled.div`
  color: white;
  font-size: 100px;
`;

const MyinfoBtn = styled.button`
  border: none;
  color: black;
  width: 80px;
  background-color: White;
  cursor: pointer;
  font-size: 18px;
`;

const UserNamePreferBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 80px 0px 20px;
`;

const UserName = styled.div`
  font-weight: 500;
  font-size: 70px;
  margin-top: 20px;
`;

const PreferenceBox = styled.div`
  font-weight: 500;
  font-size: 25px;
`;

const UserInfoMenuBtns = styled.div`
  display: flex;
  margin-left: 100px;
  width: 1000px;
  justify-content: space-around;
`;

const UserInfoEditBox = styled.button`
  margin: 10px 0px 0px 0px;
  width: 200px;
  height: 200px;
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
  margin: 10px 0px 0px 0px;
  font-weight: 400;
  font-size: 25px;
  width: 200px;
  height: 200px;
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
  margin: 10px 0px 0px 0px;
  font-weight: 400;
  font-size: 25px;
  width: 200px;
  height: 200px;
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
  const [mode, setMode] = useState('myProfile');
  const dispatch = useDispatch();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    dispatch(auth()).then((res) => {
      setUserData(res.payload);
    });
  }, [setUserData, dispatch]);

  //관심행사 테스트
  const testGetFav = () => {
    axios.get('/api/likedPost').then((res) => console.log(res.data));
  };
  //정보수정 테스트
  const testUpdate = () => {
    axios.get('/api/updateUser').then((res) => console.log(res.data));
  };

  const onMenuButtonClick = (e) => {
    if (e.target.id === 'myProfile') {
      setMode('myProfile');
      console.log(e.target.id);
    } else if (e.target.id === 'editProfile') {
      setMode('editProfile');
    } else if (e.target.id === 'likedpostings') {
      setMode('likedpostings');
    } else if (e.target.id === 'mycomment') {
      setMode('mycomment');
    }
  };

  return (
    <MypageBox>
      <UserBox>
        <MypageTitle>My Page</MypageTitle>
        <UserInfoBox>
          <UserBtnBox>
            <UserIcon>
              <i class='fa-solid fa-user'></i>
            </UserIcon>
            <MyinfoBtn onClick={onMenuButtonClick} id='myProfile'>
              My Info
            </MyinfoBtn>
          </UserBtnBox>
          <UserNamePreferBox>
            {userData ? <UserName>{userData.name}</UserName> : ''}

            <PreferenceBox>선호 장르 : 콘서트</PreferenceBox>
          </UserNamePreferBox>
          {testGetFav()}
          <UserInfoMenuBtns>
            <UserInfoEditBox onClick={onMenuButtonClick} id='editProfile'>
              <UserInfoEditIcon>
                <i class='fa-solid fa-gear'></i>
              </UserInfoEditIcon>
              <UserInfoEditTitle>내 정보 수정</UserInfoEditTitle>
              {testUpdate()}
            </UserInfoEditBox>

            <LikedBox onClick={onMenuButtonClick} id='likedpostings'>
              <LikeIcon>
                <i class='fa-solid fa-heart'></i>
              </LikeIcon>
              <LikeTitle>나의 관심 행사</LikeTitle>
            </LikedBox>

            <CommentBox onClick={onMenuButtonClick} id='mycomment'>
              <CommentIcon>
                <i class='fa-solid fa-comment'></i>
              </CommentIcon>
              <CommentTitle> 내가 쓴 댓글 </CommentTitle>
            </CommentBox>
          </UserInfoMenuBtns>
        </UserInfoBox>
      </UserBox>
      <InfoBox>
        <div>
          {mode === 'myProfile' && <MypageInfo></MypageInfo>}
          {mode === 'editProfile' && <MypageEdit></MypageEdit>}
        </div>
      </InfoBox>
    </MypageBox>
  );
}

export default Auth(Mypage, true);
