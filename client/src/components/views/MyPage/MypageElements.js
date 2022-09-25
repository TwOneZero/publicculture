import styled from "styled-components";

// LikePost 컴포넌트
export const MyLikedPostContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px 0px 100px 0px;
`;

export const MyLikedPostTitle = styled.div`
  display: flex;
  font-size: 40px;
  font-weight: 1000;
  margin: 60px 0px 50px 0px;
  background-color: white;
  color: black;
  padding: 5px;
  justify-content: center;
  font-family: "Lato", sans-serif;
`;

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
  font-family: "Noto Sans KR", sans-serif;
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

// mypage 탭부분
export const UserTabContainer = styled.div`
  margin-top: 5px;
  border-bottom: 3px solid #eee;
  background-color: #fff;
  height: 40px;
  padding-bottom: 1px;
`;

export const UserTab = styled.div`
  width: 66%;
  margin: 0 auto;
  font-size: 1rem;
`;

export const UserTabUl = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: start;
  background: #fff;
  width: 100%;
  margin: 0;
  padding: 0;
`;

export const UserTabLi = styled.li`
  margin-left: 1rem;
  &:first-child {
    margin-left: 0;
  }
`;

export const UserTabItem = styled.button`
  font-size: 1rem;
  font-weight: 700;
  line-height: 39px;
  height: 39px;
  text-decoration: none;
  display: flex;
  background-color: #fff;
  border: none;
  cursor: pointer;
`;

export const MypageIcon = styled.div``;

export const MypageTitle = styled.div`
  margin-left: 0.8rem;
  &:hover {
    border-bottom: 2px solid #000;
  }
`;

// mypage 본문 부분

export const MypageContainer = styled.div`
  width: 100%;
  margin-top: 5px;
  font-size: 17px;
  font-family: "Noto Sans KR", sans-serif;
  color: #000;
`;

export const MypageContent = styled.div`
  width: 55%;
  margin: 5rem auto 0;
`;

export const MypageTitleContainer = styled.div``;

export const MypageH2 = styled.h2``;

export const ProfileBox = styled.div`
  margin-top: 3rem;
  border: 2px solid #eee;
  border-bottom: none;
`;
export const ProfileContent = styled.div`
  display: flex;
  border-bottom: 2px solid #eee;
`;

export const LeftBox = styled.div`
  width: 30%;
  background: #f9f9f9;
  color: #000;
  border-right: 2px solid #eee;
`;

export const TextContainer = styled.div``;

export const ProfileP = styled.div`
  padding-left: 50px;
  padding-top: 25px;
`;

export const RightBox = styled.div`
  width: 70%;
  background: #fff;
  margin-bottom: 1.5rem;
  margin-left: 1rem;
`;

export const UserIcon = styled.div`
  margin-left: 3rem;
  font-size: 100px;
`;

export const MyinfoBtn = styled.button`
  border: 1px solid #eee;
  color: #000;
  margin-left: 3rem;
  width: 12%;
  /* width: 88px; */
  background-color: #fff;
  cursor: pointer;
  font-size: 0.8rem;
`;

export const UserInfoBox = styled.div`
  /* display: flex;
  justify-content: center; */
`;

export const UserInfoEditBox = styled.button`
  /* width: 200px;
  height: 150px; */
  font-weight: 400;
  font-size: 25px;
  background-color: #fff;
  border: none;
  cursor: pointer;
  &:hover {
    border-bottom: 4px solid #000;
  }
`;

export const UserInfoMenuBtns = styled.div`
  display: flex;
  /* width: 1000px; */
  justify-content: space-around;
`;

export const MypageTitleBtn = styled.div`
  font-size: 45px;
  font-weight: 500;
  cursor: pointer;
`;

export const UserBtnBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UserNamePreferBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UserName = styled.div`
  font-weight: 500;
  font-size: 70px;
`;

export const PreferenceBox = styled.div`
  font-weight: 500;
  font-size: 25px;
`;

export const InfoBox = styled.div``;

// Mypage Edit 컴포넌트

export const EditMypage_container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  width: 100%;
  height: 100%;
  margin: 30px 0px 100px 0px;
  font-family: "Lato", sans-serif;
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
  margin: 50px 0px 50px 0px;
  //background-color: green;
`;

export const Nickname_edit = styled.input`
  margin-top: 10px;
  //height: 15px;
  padding: 10px;
  font-size: 15px;
  font-weight: 800;
  resize: none;
  font-family: "Lato", sans-serif;
  &:focus {
    outline: none;
  }
`;

export const NicknameC_btn = styled.button`
  border: none;
  color: black;
  background-color: #e0f2f7;
  cursor: pointer;
  font-size: 18px;
  margin-top: 30px;
  padding: 10px;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  font-weight: bold;
  &:hover {
    color: white;
    background-color: black;
  }
`;
export const NicknameChangeBtn = styled.button`
  border: none;
  color: white;
  background-color: black;
  cursor: pointer;
  font-size: 18px;
  margin: 10px;
  padding: 10px;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  font-weight: bold;
`;

export const NotNicknameChangeBtn = styled.div`
  border: none;
  color: white;
  text-align: center;
  background-color: #a9a9a9;
  font-size: 18px;
  margin: 10px;
  width: 100%;
  padding-top: 10px;
  padding-bottom: 10px;
  height: 100%;
  border-radius: 5px;
  font-weight: bold;
`;

export const PasswordContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  //background-color: green;
`;
export const Password = styled.input`
  margin-top: 10px;
  height: 15px;
  padding: 10px;
  font-size: 15px;
  font-weight: 800;
  resize: none;
  font-family: "Lato", sans-serif;
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
  font-family: "Lato", sans-serif;
  &:focus {
    outline: none;
  }
`;

export const PasswordCheckBtn = styled.button`
  border: none;
  color: white;
  background-color: black;
  color: black;
  background-color: #e0f2f7;
  cursor: pointer;
  font-size: 18px;
  margin-top: 30px;
  padding: 10px;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  font-weight: bold;
  &:hover {
    color: white;
    background-color: black;
  }
`;

export const PasswordUpdateBtn = styled.button`
  border: none;
  color: white;
  background-color: black;
  color: black;
  background-color: #e0f2f7;
  cursor: pointer;
  font-size: 18px;
  margin-top: 30px;
  padding: 10px;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  font-weight: bold;
  &:hover {
    color: white;
    background-color: black;
  }
`;

export const NotPasswordUpdateBtn = styled.div`
  border: none;
  color: white;
  background-color: #a9a9a9;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 45px;
  font-size: 18px;
  margin-top: 30px;
  border-radius: 5px;
`;

export const Genre_container_edit = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px 0px 70px 0px;
`;

export const UserUpdateBtn = styled.button`
  border: none;
  background-color: #e0f2f7;
  cursor: pointer;
  font-size: 18px;
  margin-top: 10px;
  padding: 10px;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  font-weight: bold;
  &:hover {
    color: white;
    background-color: black;
  }
`;

export const NotUserUpdateBtn = styled.div`
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  background-color: #a9a9a9;
  width: 100%;
  height: 45px;
  font-size: 18px;
  border-radius: 5px;
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
  margin-bottom: 70px;
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
  margin: 30px 0px 100px 0px;
  font-family: "Lato", sans-serif;
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
