import React, { useState } from 'react';
import { useSelector } from 'react-redux';

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
  const userState = useSelector((state) => state.user);

  
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
                  {/* <ProfileP>프로필 사진</ProfileP> */}
                </TextContainer>
              </LeftBox>
              <RightBox>
                <UserIcon>
                  <i className='fa-solid fa-user'></i>
                </UserIcon>
                {/* <MyinfoBtn onClick={onMenuButtonClick} id='myProfile'>
                  사진변경
                </MyinfoBtn> */}
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
                      if (idx + 1 === userState.userData?.genre.length) {
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
