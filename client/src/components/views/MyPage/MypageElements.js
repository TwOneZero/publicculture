import styled from "styled-components";

export const MypageDiv = styled.div`
  width: 100%;
  //height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

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
  padding: 50px;
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
  display: flex;
  align-items: center;
  margin-top: 30px;
  margin-left: 80px;
  border-bottom: 3px solid #eee;
  background-color: #fff;
  height: 50px;
  //min-width: 1000px;
  border: none;
`;

export const UserTab = styled.div`
  width: 61%;
  margin: 0 auto;
  font-size: 1rem;
  min-width: 1000px;
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
  font-size: 0.8rem;
  font-weight: 700;
  line-height: 39px;
  height: 39px;
  text-decoration: none;
  display: flex;
  background-color: #fff;
  border: none;
  cursor: pointer;
`;

export const MypageTabIcon = styled.div``;

export const MypageTabTitle = styled.div`
  margin-left: 0.8rem;
  &:hover {
    border-bottom: 2px solid #000;
  }
  font-size: 18px;
`;

// mypage 본문 부분

export const MypageContainer = styled.div`
  width: 100%;
  min-width: 1000px;
  margin-top: 5px;
  font-size: 17px;
  font-family: "Noto Sans KR", sans-serif;
  color: #000;
`;

export const MypageContent = styled.div`
  width: 53%;
  margin: 5rem auto 5rem;
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
  padding-bottom: 1.5rem;
`;

export const TextContainer = styled.div``;

export const ProfileP = styled.div`
  padding-left: 50px;
  padding-top: 25px;
`;

export const RightBox = styled.div`
  width: 70%;
  background: #fff;
  margin-left: 1rem;
`;

export const UserIcon = styled.div`
  margin-left: 3rem;
  font-size: 100px;
`;

export const MyinfoBtn = styled.button`
  border: 2px solid #eee;
  color: #000;
  margin-left: 3.3rem;
  width: 80px;
  /* width: 88px; */
  background-color: #fff;
  cursor: pointer;
  font-size: 0.8rem;
  margin-bottom: 10px;
`;

export const UserInfoBox = styled.div``;

export const UserInfoEditBox = styled.button`
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

export const InfoBox = styled.div`
  width: 100%;
  height: 100%;
  margin-bottom: 100px;
`;

// Mypage Edit 컴포넌트

export const EditMypageContainer = styled.div`
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

export const MyprofileEdit = styled.div`
  display: flex;
  font-size: 40px;
  font-weight: 1200;
  margin: 60px 0px 50px 0px;
  background-color: white;
  color: black;
  padding: 5px;
`;

export const NicknameContainerEdit = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 50px 0px 50px 0px;
`;

export const NicknameEdit = styled.input`
  margin-top: 10px;
  padding: 10px;
  font-size: 15px;
  font-weight: 800;
  resize: none;
  font-family: "Lato", sans-serif;
  &:focus {
    outline: none;
  }
`;

export const NicknameCBtn = styled.button`
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

export const GenreContainerEdit = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px 0px 70px 0px;
`;

export const UserUpdateBtn = styled.button`
  border: none;
  background-color: #e0f2f7;
  cursor: pointer;
  width: 100%;
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

export const GENREBOX = styled.input`
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

export const LineEdit = styled.div`
  border-bottom: 1px solid grey;
  width: 12vw;
`;

export const PageAreaEdit = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  margin-top: 50px;
`;

export const Email = styled.div`
  padding: 12px;
  font-size: 20px;
  font-weight: 500;
`;

export const Genre_container_info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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

export const PasswordEdit = styled.div`
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
