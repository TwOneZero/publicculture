import { useDispatch } from 'react-redux';
import React, { useState } from 'react';
import styled from 'styled-components';
import { updateUser, checkName } from '../../../_actions/user_action';
const EditMypage_container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  margin: 0px;
  width: 100%;
  height: 100%;
  margin-top: 30px;
  font-family: 'Lato', sans-serif;
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
  font-family: 'Lato', sans-serif;
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
  font-family: 'Lato', sans-serif;
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
  font-family: 'Lato', sans-serif;
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

const GENRE_BOX = styled.input`
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
  const [Name, setName] = useState('');
  const [Password, setPassword] = useState('');
  const [PasswordConfirm, setPasswordConfirm] = useState('');
  const [Genre, setGenre] = useState('');
  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const onChangePasswordConfirm = (e) => {
    setPasswordConfirm(e.target.value);
  };
  const onCheckPassword = (e) => {
    Password === PasswordConfirm
      ? alert('비밀번호가 일치합니다.')
      : alert('비밀번호가 일치하지 않습니다.');
  };

  const onCheckName = async () => {
    dispatch(checkName({ name: Name })).then((res) => {
      if (res.payload.success) {
        alert('사용가능한 닉네임입니다.');
      } else {
        alert('이미 존재하는 닉네임입니다.');
      }
    });
  };

  const onUpdateConfirm = () => {
    let body = {
      name: Name,
      password: Password,
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
    setPassword('');
    setPasswordConfirm('');
    setGenre('');
    window.location.reload();
  };

  const onCheckElement = (checked, item) => {
    if (checked) {
      setGenre(item);
    } else if (!checked) {
      setGenre(Genre.filter((el) => el !== item));
    }
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
            <NicknameC_btn onClick={onCheckName}>confirm</NicknameC_btn>
          </Nickname_container>
          <PasswordContainer>
            비밀번호 변경
            <Line></Line>
            <PasswordCheck onChange={onChangePassword}></PasswordCheck>
          </PasswordContainer>
          <PasswordContainer>
            비밀번호 변경 확인
            <Line></Line>
            <PasswordCheck onChange={onChangePasswordConfirm}></PasswordCheck>
            <PasswordCheckBtn onClick={onCheckPassword}>
              confirm
            </PasswordCheckBtn>
          </PasswordContainer>
          <Genre_container>
            선호 장르
            <Line></Line>
            <Checkbox>
              <CheckboxContainer>
                <GENRE_BOX
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
                <GENRE_BOX
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
                <GENRE_BOX
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
                <GENRE_BOX
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
                <GENRE_BOX
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
                <GENRE_BOX
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
          </Genre_container>
          <button
            style={{ height: '50px', width: '100px' }}
            onClick={onUpdateConfirm}
          >
            유저업데이트 해보셈
          </button>
        </Page_area>
      </EditMypage_container>
    </>
  );
};

export default MypageEdit;
