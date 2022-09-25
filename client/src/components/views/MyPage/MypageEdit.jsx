import { useDispatch, useSelector } from 'react-redux';
import React, { useState } from 'react';
import { updateUser, checkName } from '../../../_actions/user_action';

import {
  EditMypageContainer,
  MyprofileEdit,
  PageAreaEdit,
  NicknameContainerEdit,
  NicknameCBtn,
  NicknameEdit,
  LineEdit,
  GenreContainerEdit,
  Checkbox,
  CheckboxContainer,
  GENREBOX,
  UserUpdateBtn,
  NotUserUpdateBtn,
} from './MypageElements';

const MypageEdit = () => {
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.user);
  const [Name, setName] = useState('');
  const [Genre, setGenre] = useState([]);
  const [Next, setIsNext] = useState(false);

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onCheckName = async () => {
    if (Name) {
      dispatch(checkName({ name: Name })).then((res) => {
        if (res.payload.success) {
          alert('사용가능한 닉네임입니다.');
          setIsNext(true);
        } else {
          if (Name === userState.userData.name) {
            alert('사용가능한 닉네임입니다.');
            setIsNext(true);
          } else {
            alert('이미 존재하는 닉네임입니다.');
          }
        }
      });
    } else {
      return alert('닉네임이 없습니다.');
    }
  };

  const onUpdateConfirm = () => {
    let body = {
      name: Name,
      genre: Genre,
    };

    dispatch(updateUser(body)).then((res) => {
      if (res.payload.success) {
        console.log(res.payload);
      } else {
        console.log(res.payload);
      }
    });

    setName('');
    setGenre('');
    window.location.reload();
  };

  const onCheckElement = (checked, item) => {
    if (checked) {
      setGenre((prev) => [...prev, item]);
    } else if (!checked) {
      setGenre((prev) => [...prev].filter((el) => el !== item));
    }
    setIsNext(true);
  };

  return (
    <>
      <EditMypageContainer>
        <MyprofileEdit>내 정보 수정</MyprofileEdit>

        <PageAreaEdit>
          <NicknameContainerEdit>
            닉네임 변경
            <LineEdit></LineEdit>
            <NicknameEdit onChange={onChangeName}></NicknameEdit>
            <NicknameCBtn onClick={onCheckName}>중복 확인</NicknameCBtn>
          </NicknameContainerEdit>

          <GenreContainerEdit>
            선호 장르
            <LineEdit></LineEdit>
            <Checkbox>
              <CheckboxContainer>
                <GENREBOX
                  type='checkbox'
                  id='cb1'
                  value='뮤지컬/오페라'
                  name='뮤지컬/오페라'
                  onChange={(e) => {
                    onCheckElement(e.target.checked, e.target.value);
                  }}
                />
                뮤지컬/오페라
              </CheckboxContainer>
              <CheckboxContainer>
                <GENREBOX
                  type='checkbox'
                  id='cb2'
                  value='전시/미술'
                  name='전시/미술'
                  onChange={(e) => {
                    onCheckElement(e.target.checked, e.target.value);
                  }}
                />
                전시/미술
              </CheckboxContainer>
              <CheckboxContainer>
                <GENREBOX
                  type='checkbox'
                  id='cb3'
                  value='연극'
                  name='연극'
                  onChange={(e) => {
                    onCheckElement(e.target.checked, e.target.value);
                  }}
                />
                연극
              </CheckboxContainer>
              <CheckboxContainer>
                <GENREBOX
                  type='checkbox'
                  id='cb4'
                  value='콘서트'
                  name='콘서트'
                  onChange={(e) => {
                    onCheckElement(e.target.checked, e.target.value);
                  }}
                />
                콘서트
              </CheckboxContainer>
              <CheckboxContainer>
                <GENREBOX
                  type='checkbox'
                  id='cb5'
                  value='클래식'
                  name='클래식'
                  onChange={(e) => {
                    onCheckElement(e.target.checked, e.target.value);
                  }}
                />
                클래식
              </CheckboxContainer>
              <CheckboxContainer>
                <GENREBOX
                  type='checkbox'
                  id='cb6'
                  value='무용'
                  name='무용'
                  onChange={(e) => {
                    onCheckElement(e.target.checked, e.target.value);
                  }}
                />
                무용
              </CheckboxContainer>
            </Checkbox>
          </GenreContainerEdit>
          {Next ? (
            <UserUpdateBtn onClick={onUpdateConfirm}>Update</UserUpdateBtn>
          ) : (
            <NotUserUpdateBtn>Update</NotUserUpdateBtn>
          )}
        </PageAreaEdit>
      </EditMypageContainer>
    </>
  );
};

export default MypageEdit;
