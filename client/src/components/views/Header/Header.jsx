import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { searchPost } from "../../../_actions/post_action";
import { logout, auth } from "../../../_actions/user_action";
import {
  HeaderContainer,
  HeaderLogo,
  SearchBarArea,
  SearchBar,
  Button,
  MenuContainer,
  GenreBar,
  GenreBtn,
  HeaderBtn,
} from './HeaderElements';


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
      if (res.payload.isAuth === false) {
        setLogin(false);
      } else {
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

          {
            Login
              ?
              <>
                <HeaderBtn onClick={onMypageClicked}>My page</HeaderBtn>
                <HeaderBtn onClick={logOut}>Logout</HeaderBtn>
              </>
              :
              <>
                <HeaderBtn onClick={onLoginbtnClicked}>Login</HeaderBtn>
                <HeaderBtn onClick={onRegiterClicked}>Register</HeaderBtn>
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