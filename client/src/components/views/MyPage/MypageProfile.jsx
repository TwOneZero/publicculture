import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  MypageContainer,
  MypageContent,
  UserIcon,
  MyinfoBtn,
  MypageTitleContainer,
  MypageH2,
  ProfileBox,
  ProfileContent,
  LeftBox,
  RightBox,
  ProfileP,
  TextContainer,
} from './MypageElements';

const MypageProfile = () => {
  const [mode, setMode] = useState('myProfile');
  const userState = useSelector((state) => state.user);

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
      <MypageContainer>
        <MypageContent>
          <MypageTitleContainer>
            <MypageH2>내 프로필</MypageH2>
          </MypageTitleContainer>

          <ProfileBox>
            <ProfileContent>
              <LeftBox>
                <TextContainer>
                  <ProfileP>프로필 사진</ProfileP>
                </TextContainer>
              </LeftBox>
              <RightBox>
                <UserIcon>
                  <i className='fa-solid fa-user'></i>
                </UserIcon>
                <MyinfoBtn onClick={onMenuButtonClick} id='myProfile'>
                  사진변경
                </MyinfoBtn>
              </RightBox>
            </ProfileContent>

            <ProfileContent>
              <LeftBox>
                <TextContainer>
                  <ProfileP>Nickname</ProfileP>
                </TextContainer>
              </LeftBox>
              <RightBox>
                <TextContainer>
                  <ProfileP>{userState.userData.name}</ProfileP>
                </TextContainer>
              </RightBox>
            </ProfileContent>
            <ProfileContent>
              <LeftBox>
                <TextContainer>
                  <ProfileP>E-mail</ProfileP>
                </TextContainer>
              </LeftBox>
              <RightBox>
                <TextContainer>
                  <ProfileP>{userState.userData.email}</ProfileP>
                </TextContainer>
              </RightBox>
            </ProfileContent>
            <ProfileContent>
              <LeftBox>
                <TextContainer>
                  <ProfileP>Prefer Genre</ProfileP>
                </TextContainer>
              </LeftBox>
              <RightBox>
                <TextContainer>
                  <ProfileP>
                    {userState.userData?.genre.map((el, idx) => {
                      if (idx + 1 === userState.userData.genre.length) {
                        return `${el}`;
                      } else return `${el},`;
                    })}
                  </ProfileP>
                </TextContainer>
              </RightBox>
            </ProfileContent>
          </ProfileBox>
        </MypageContent>
      </MypageContainer>
    </>
  );
};

export default MypageProfile;
