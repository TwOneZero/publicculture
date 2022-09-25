import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { searchPost } from "../../../_actions/post_action";
import { logout } from "../../../_actions/user_action";
import Auth from "../../../hoc/auth";
import Sidebar from "./Sidebar";
import logo from "../../../assets/image/logo.png";
import { FaBars } from "react-icons/fa";
import {
  HeaderContainer,
  HeaderLogo,
  LogoImg,
  SearchBarArea,
  SearchBar,
  Button,
  MenuContainer,
  GenreContainer,
  GenreBar,
  GenreBtn,
  HeaderBtn,
  SidebarButtonToggle,
  SidebarGenreBox,
  ToggleButton,
  GenreShadowBox,
} from "./HeaderElements";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.user);
  const [search, setSearch] = useState("");
  const [isSidebarOpened, setIsSidebarOpened] = useState(false);
  const codenames = [
    "국악",
    "뮤지컬",
    "전시",
    "연극",
    "콘서트",
    "클래식",
    "무용",
    "축제",
    "문화교양",
  ];
  const onSidebarToggleButtonClicked = () => {
    setIsSidebarOpened(!isSidebarOpened);
  };

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
    e.preventDefault();
    setSearch(e.target.value);
  };

  const onSearchClicked = (e) => {
    e.preventDefault();
    dispatch(searchPost(search)).then((res) => {
      if (res.payload.success) {
        navigate(`showevent/${search}`, { state: { infos: res.payload } });
      } else {
        return new Response({ error: "error!" });
      }
    });
    setSearch("");
  };

  return (
    <>
      {isSidebarOpened && (
        <Sidebar
          isSidebarOpened={isSidebarOpened}
          onSidebarToggleButtonClicked={onSidebarToggleButtonClicked}
        />
      )}
      <HeaderContainer>
        <HeaderLogo type="button" onClick={onLogoClicked}>
          <LogoImg src={logo} />
        </HeaderLogo>

        <SearchBarArea onSubmit={onSearchClicked}>
          <label htmlFor="search"></label>
          <SearchBar
            onChange={onChangeSearch}
            name="search"
            value={search}
            type="text"
            placeholder="장르 / 제목 / 장소"
          ></SearchBar>
          <Button type="submit">
            <i className="fas fa-search"></i>
          </Button>
        </SearchBarArea>
        <MenuContainer>
          {userState ? (
            userState.userData.isAuth === true ? (
              <>
                <HeaderBtn onClick={onMypageClicked}>My page</HeaderBtn>
                <HeaderBtn onClick={logOut}>Logout</HeaderBtn>
              </>
            ) : (
              <>
                <HeaderBtn onClick={onLoginbtnClicked}>Login</HeaderBtn>
                <HeaderBtn onClick={onRegiterClicked}>Register</HeaderBtn>
              </>
            )
          ) : null}
        </MenuContainer>
      </HeaderContainer>
      <GenreShadowBox>
        <GenreContainer>
          <SidebarGenreBox>
            <SidebarButtonToggle>
              <ToggleButton onClick={onSidebarToggleButtonClicked}>
                <FaBars />
              </ToggleButton>
            </SidebarButtonToggle>

            <GenreBar>
              {codenames.map((item, index) => {
                return (
                  <GenreBtn
                    key={index}
                    itemType="button"
                    onClick={onGenreClicked}
                    name={item}
                  >
                    {item}
                  </GenreBtn>
                );
              })}
            </GenreBar>
          </SidebarGenreBox>
        </GenreContainer>
      </GenreShadowBox>
    </>
  );
}

export default Auth(Header, null);
