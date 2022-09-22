import styled from 'styled-components';

// LikePost 컴포넌트
export const PostingContainer = styled.div`
  margin: 4% 5%;
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const PostingInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  //height: 600px;
  padding: 50px;
  //background-color: yellow;
  align-items: center;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 16px;
`;

export const IMG = styled.img`
  width: 300px;
  height: 400px;
  object-fit: fill;
  margin: 10px;
`;

export const Title = styled.div`
  font-weight: 700;
  font-size: 19px;
  margin-bottom: 5px;
`;

// Mypage 컴포넌트

export const MypageBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0px;
  margin-bottom: 0px;
  width: 100%;
  height: 100%;
  font-size: 17px;
  font-family: 'Noto Sans KR', sans-serif;
`;

export const UserBox = styled.div`
  display: flex;
  flex-direction: column;
  background-color: black;
  align-items: center;
  width: 2000px;
  height: 300px;
  color: white;
  padding-left: 100px;
`;

export const UserBoxContainer = styled.div`
  width: 1500px;
`;

export const MypageTitleBtn = styled.div`
  font-size: 35px;
  margin: 20px 50px 0px 0px;
  font-weight: 500;
`;

export const UserInfoBox = styled.div`
  display: flex;
  width: 100%;
`;

export const UserBtnBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 20px 0px 80px;
`;

export const UserIcon = styled.div`
  color: white;
  font-size: 100px;
`;

export const MyinfoBtn = styled.button`
  border: none;
  color: black;
  width: 80px;
  background-color: White;
  cursor: pointer;
  font-size: 18px;
`;

export const UserNamePreferBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 80px 0px 20px;
`;

export const UserName = styled.div`
  font-weight: 500;
  font-size: 70px;
  margin-top: 20px;
`;

export const PreferenceBox = styled.div`
  font-weight: 500;
  font-size: 25px;
`;

export const UserInfoMenuBtns = styled.div`
  display: flex;
  margin-left: 100px;
  width: 1000px;
  justify-content: space-around;
`;

export const UserInfoEditBox = styled.button`
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

export const UserInfoEditIcon = styled.div`
  margin: 0px 0px 30px 0px;
`;

export const UserInfoEditTitle = styled.div`
  font-weight: 400;
`;

export const LikedBox = styled.button`
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

export const LikeIcon = styled.div`
  margin: 0px 0px 30px 0px;
`;

export const LikeTitle = styled.div`
  font-weight: 400;
`;

export const PasswordBox = styled.button`
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

export const PasswordIcon = styled.div`
  margin: 0px 0px 30px 0px;
`;

export const PasswordTitle = styled.div`
  font-weight: 400;
`;

export const CommentBox = styled.button`
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

export const CommentIcon = styled.div`
  margin: 0px 0px 30px 0px;
`;

export const CommentTitle = styled.div`
  font-weight: 400;
`;

export const InfoBox = styled.div``;

// Mypage Edit 컴포넌트

export const EditMypage_container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  //margin: 0px;
  //margin: 4% 5%;
  width: 100%;
  height: 100%;
  //margin: 30px 0px 30px 0px;
  margin-top: 30px;
  font-family: 'Lato', sans-serif;
  font-weight: 1000;
  font-size: 24px;
`;

export const Myprofile_edit = styled.div`
  display: flex;
  font-size: 40px;
  font-weight: 1200;
  margin: 60px 0px 50px 0px;
  background-color: white;
  color: black;
  padding: 5px;
`;

export const Nickname_container_edit = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  //background-color: green;
`;

export const Nickname_edit = styled.input`
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

export const NicknameC_btn = styled.button`
  border: none;
  color: white;
  background-color: black;
  cursor: pointer;
  font-size: 18px;
  margin: 10px;
  width: 65px;
  height: 35px;
`;

export const PasswordContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  //background-color: green;
`;
export const Password = styled.input`
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

export const PasswordCheck = styled.input`
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

export const PasswordCheckBtn = styled.button`
  border: none;
  color: white;
  background-color: black;
  cursor: pointer;
  width: 65px;
  height: 35px;
  font-size: 18px;
  margin: 10px;
`;

export const PasswordUpdateBtn = styled.button`
  border: none;
  color: white;
  background-color: black;
  cursor: pointer;
  width: 100px;
  height: 50px;
  font-size: 18px;
  margin: 10px;
`;

export const Genre_container_edit = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`;

export const UserUpdateBtn = styled.button`
  border: none;
  color: white;
  background-color: black;
  cursor: pointer;
  width: 100px;
  height: 50px;
  font-size: 18px;
  margin: 10px;
`;

export const GENRE_BOX = styled.input`
  padding: 10px;
  font-weight: 800;
  display: flex;
`;

export const Checkbox = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-size: 16px;
  //width: 40vw;
`;

export const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 10px;
`;

export const Modify_btn = styled.button`
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

export const Line_edit = styled.div`
  border-bottom: 1px solid grey;
  width: 12vw;
`;

export const Page_area_edit = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  //height: 600px;
`;

// Mypage info 컴포넌트

export const Mypage_container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`;
export const Myprofile_info = styled.div`
  display: flex;
  font-size: 36px;
  margin-bottom: 60px;
  margin-top: 120px;
  background-color: black;
  color: white;
  padding: 5px;
`;

export const Nickname_container_info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  //background-color: green;
`;

export const Nickname_info = styled.div`
  padding: 12px;
  font-size: 23px;
  font-weight: 500;
`;

export const EmailContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  //background-color: green;
  margin-top: 50px;
`;

export const Email = styled.div`
  padding: 12px;
  font-size: 20px;
  font-weight: 500;
  //width: 50vw;
`;

export const Genre_container_info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  //background-color: green;
  margin-top: 50px;
`;

export const Genre = styled.div`
  padding: 12px;
  font-size: 23px;
  font-weight: 500;
  display: flex;
`;

export const Line_info = styled.div`
  border-bottom: 1px solid grey;
  width: 12vw;
`;

export const Page_area_info = styled.div`
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

// password 컴포넌트
export const PasswordPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  margin: 0px;
  width: 100%;
  height: 100%;
  margin: 30px 0px 50px 0px;
  font-family: 'Lato', sans-serif;
  font-weight: 1000;
  font-size: 24px;
`;

export const Password_edit = styled.div`
  display: flex;
  font-size: 40px;
  font-weight: 1200;
  margin: 60px 0px 50px 0px;
  background-color: white;
  color: black;
  padding: 5px;
`;

//내 댓글 컴포넌트
export const CommentWrapper = styled.div`
  display: grid;
  place-items: center;
  min-height: 12vh;
`;
