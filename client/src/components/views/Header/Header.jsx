import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import EventPage from "../EventPage/EventPage";
import { searchPost } from "../../../_actions/post_action";
import { logout, auth } from "../../../_actions/user_action";
import { useSyncExternalStore } from "react";

//jsx 컴포넌트 만들 때, PascalCase 나 SCREAMING_SNAkE_CASE 가 규칙
const MenuContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-left: auto;
  margin-right: 50px;
  margin-top: 10px;
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: low;
  justify-content: center;
  align-items: center;
  height: 100px;
  background-color: white;
`;

const HeaderLogo = styled.div`
  display: flex;
  justify-content : flex-start;
  font-family: 'NG','Malgun Gothic',Dotum,'돋움',AppleGothicNeoSD,'Apple SD 산돌고딕 Neo','굴림',arial,sans-serif;
  color: black;
  font-size: 60px;
  margin: 15px 5px;
  margin-left: 50px;
  cursor: pointer;
  text-shadow: 1px 1px 1px #000;
`;

const LoginBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  width: 80px;
  height: 50px;
  font-size: 17px;
  font-weight : 700;
  font-family: 'NG','Malgun Gothic',Dotum,'돋움',AppleGothicNeoSD,'Apple SD 산돌고딕 Neo','굴림',arial,sans-serif;
  margin-left: 2px;
  cursor: pointer;
`;

const MypageBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  width: 80px;
  height: 50px;
  font-size: 17px;
  font-weight : 700;
  font-family: 'NG','Malgun Gothic',Dotum,'돋움',AppleGothicNeoSD,'Apple SD 산돌고딕 Neo','굴림',arial,sans-serif;
  margin-left: 2px;
  cursor: pointer;
`;

const RegisterBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: balck;
  width: 80px;
  height: 50px;
  font-size: 17px;
  font-weight : 700;
  font-family: 'NG','Malgun Gothic',Dotum,'돋움',AppleGothicNeoSD,'Apple SD 산돌고딕 Neo','굴림',arial,sans-serif;
  margin-left: 2px;
  text-align: center;
  cursor: pointer;
`;

const LogoutBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  width: 80px;
  height: 50px;
  font-size: 17px;
  font-weight : 700;
  font-family: 'NG','Malgun Gothic',Dotum,'돋움',AppleGothicNeoSD,'Apple SD 산돌고딕 Neo','굴림',arial,sans-serif;
  margin-left: 2px;
  text-align: center;
  cursor: pointer;
`;

const TestBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  width: 80px;
  height: 50px;
  font-size: 17px;
  font-weight : 700;
  font-family: 'NG','Malgun Gothic',Dotum,'돋움',AppleGothicNeoSD,'Apple SD 산돌고딕 Neo','굴림',arial,sans-serif;
  margin-left: 2px;
  text-align: center;
  cursor: pointer;
`;

const GenreBar = styled.div`
  display: flex;
  height: 55px;
  //width: 100%;
  padding: 10px 100px;
  justify-content: space-between;
  background-color: white;
  align-items: center;
  box-shadow: 5px 5px 5px lightgray;
`;

const GenreBtn = styled.button`
  font-size: 18px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-family: "Noto Sans KR", sans-serif;
  font-weight: 700;
  &:hover {
    border-bottom: 4px solid black;
  }
`;

const SearchBarArea = styled.form`
  display: flex;
  justify-content: center;
  //position: relative;
  margin-bottom: 10px;
`;

const SearchBar = styled.input`
  height: 40px;
  width: 400px;
  border: none;
  background: transparent;
  outline: none;
  color: black;
  caret-color: white;
  border-bottom: 2px solid black;
  font-size: 15px;
  margin: 24px 0 0 20px;
`;

const Button = styled.button`
  background: transparent;
  color: white;
  right: 30px;
  font-size: 18px;
  border: none;
  cursor: pointer;
`;

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const [Login, setLogin] = useState(true);

  const onLogoClicked = () => {
    navigate("/");
  };

  const onLoginbtnClicked = () => {
    navigate("/login");
  };

  const onRegiterClicked = () => {
    navigate("/register");
  };

  const onMypageClicked = () => {
    navigate("/mypage");
  };
  const logOut = () => {
    dispatch(logout()).then((res) => {
      if (res.payload.isAuth === false) {
        alert("이미 로그아웃 상태입니다.!");
      } else {
        alert("로그아웃 성공");
        navigate("/");
      }
    });
  };

  const CheckLogin = () => {
    dispatch(auth()).then((res) => {
      if(res.payload.isAuth === false){
        setLogin(false);
      }else{
        setLogin(true);
      }
    })
  }

  const onGenreClicked = (e) => {
    e.preventDefault();
    let name = e.target.name;
    dispatch(searchPost(name)).then((res) => {
      if (res.payload.success) {
        navigate(`showevent/${name}`, { state: { infos: res.payload } });
      }
    });
  };

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const onSearchClicked = (e) => {
    e.preventDefault();
    dispatch(searchPost(search)).then((res) => {
      if (res.payload.success) {
        console.log(res);
        navigate(`showevent/${search}`, { state: { infos: res.payload } });
      } else {
        return new Response({ error: "error!" });
      }
    });
  };

  return (
    <>
      {CheckLogin()}
      <HeaderContainer>
      <HeaderLogo type="button" onClick={onLogoClicked}>
          public culture
        </HeaderLogo>

        <SearchBarArea onSubmit={onSearchClicked}>
          <label htmlFor="search"></label>
          <SearchBar
            onChange={onChangeSearch}
            name="search"
            value={search}
            type="text"
            placeholder="검색어를 입력해주세요."
          ></SearchBar>
          <Button type="submit">
            <i className="fas fa-search"></i>
          </Button>
        </SearchBarArea>

        <MenuContainer>
          <MypageBtn onClick={onMypageClicked}>My page</MypageBtn>
          {
            Login 
            ? 
            <LogoutBtn onClick={logOut}>Logout</LogoutBtn>
            :
            <>
            <LoginBtn onClick={onLoginbtnClicked}>Login</LoginBtn>
            <RegisterBtn onClick={onRegiterClicked}>Register</RegisterBtn>
            </>  
          }         
        </MenuContainer>
      </HeaderContainer>

      <GenreBar itemType="button" onClick={onGenreClicked}>
        <GenreBtn name="뮤지컬">뮤지컬/오페라</GenreBtn>
        <GenreBtn name="전시">전시/미술</GenreBtn>
        <GenreBtn name="연극">연극</GenreBtn>
        <GenreBtn name="콘서트">콘서트</GenreBtn>
        <GenreBtn name="클래식">클래식</GenreBtn>
        <GenreBtn name="무용">무용</GenreBtn>
      </GenreBar>
    </>
  );
}

export default Header;