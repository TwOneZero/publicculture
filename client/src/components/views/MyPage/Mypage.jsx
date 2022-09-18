import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'; //내 액션을 한 번에 모아서 처리. 이 기능이
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import MypageEdit from './MypageEdit';
import MypageInfo from './MypageInfo';
import MyLikedPost from './MyLikedPost';
import Auth from '../../../hoc/auth';
import { auth } from '../../../_actions/user_action';
import axios from 'axios';

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
  UserInfoEditIcon,
  UserInfoEditTitle,
  LikedBox,
  LikeIcon,
  LikeTitle,
  CommentBox,
  CommentIcon,
  CommentTitle,
  InfoBox,
} from './MypageElements';
import MyComment from './MyComment';

function Mypage() {
  const navigate = useNavigate();
  const [mode, setMode] = useState('myProfile');
  const userState = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [resData, setResData] = useState(null);
  const [userData, setUserData] = useState(null);

  // useEffect(() => {
  //   dispatch(auth())
  //     .then((res) => {
  //       setResData(res.payload);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, [dispatch]);

  // useEffect(() => {
  //   if (resData) {
  //     setUserData(resData);
  //   }
  // }, [resData]);

  const onMenuButtonClick = (e) => {
    if (e.target.id === 'myProfile') {
      setMode('myProfile');
      console.log(e.target.id);
    } else if (e.target.id === 'editProfile') {
      setMode('editProfile');
    } else if (e.target.id === 'myLikedPost') {
      setMode('myLikedPost');
    } else if (e.target.id === 'mycomment') {
      setMode('mycomment');
    }
  };

  return (
    <MypageBox>
      <UserBox>
        <MypageTitleBtn onClick={onMenuButtonClick} id='myProfile'>
          My Page
        </MypageTitleBtn>
        <UserInfoBox>
          <UserBtnBox>
            <UserIcon>
              <i className='fa-solid fa-user'></i>
            </UserIcon>
            <MyinfoBtn onClick={onMenuButtonClick} id='myProfile'>
              My Info
            </MyinfoBtn>
          </UserBtnBox>
          <UserNamePreferBox>
            {/* {userData ? <UserName>{userData.name}</UserName> : ''} */}
            <UserName>{userState.userData.name}</UserName>

            <PreferenceBox>
              {/* 선호 장르 : {userData ? userData.genre : ''} */}
              선호 장르 : {userState.userData.genre}
            </PreferenceBox>
          </UserNamePreferBox>
          <UserInfoMenuBtns>
            <UserInfoEditBox onClick={onMenuButtonClick} id='editProfile'>
              <UserInfoEditIcon>
                <i
                  onClick={onMenuButtonClick}
                  id='editProfile'
                  className='fa-solid fa-gear'
                ></i>
              </UserInfoEditIcon>
              <UserInfoEditTitle onClick={onMenuButtonClick} id='editProfile'>
                내 정보 수정
              </UserInfoEditTitle>
            </UserInfoEditBox>

            <LikedBox onClick={onMenuButtonClick} id='myLikedPost'>
              <LikeIcon>
                <i
                  className='fa-solid fa-heart'
                  onClick={onMenuButtonClick}
                  id='myLikedPost'
                ></i>
              </LikeIcon>
              <LikeTitle onClick={onMenuButtonClick} id='myLikedPost'>
                나의 관심 행사
              </LikeTitle>
            </LikedBox>

            <CommentBox onClick={onMenuButtonClick} id='mycomment'>
              <CommentIcon>
                <i
                  className='fa-solid fa-comment'
                  onClick={onMenuButtonClick}
                  id='myLikedPost'
                ></i>
              </CommentIcon>
              <CommentTitle onClick={onMenuButtonClick} id='mycomment'>
                내가 쓴 댓글
              </CommentTitle>
            </CommentBox>
          </UserInfoMenuBtns>
        </UserInfoBox>
      </UserBox>
      <InfoBox>
        <div>
          {mode === 'myProfile' && <MypageInfo></MypageInfo>}
          {mode === 'editProfile' && <MypageEdit></MypageEdit>}
          {mode === 'myLikedPost' && <MyLikedPost></MyLikedPost>}
          {mode === 'mycomment' && <MyComment />}
        </div>
      </InfoBox>
    </MypageBox>
  );
}

export default Auth(Mypage, true);
