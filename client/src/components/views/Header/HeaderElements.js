import styled from "styled-components";
import FaBars from "react-icons/fa";


export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: low;
  justify-content: center;
  align-items: center;
  width: 65%;
  margin: 0 auto;
  height: 100px;
  background-color: white;

`;

export const HeaderLogo = styled.div`
  display: flex;
  justify-content: flex-start;
  cursor: pointer;
  width: 200px;
`;

export const LogoImg = styled.img`
  margin-top: 30px;
  width: 100%;
`;

export const HeaderBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  width: 80px;
  height: 50px;
  font-size: 1rem;
  font-weight: 700;
  font-family: "NG", "Malgun Gothic", Dotum, "돋움", AppleGothicNeoSD,
    "Apple SD 산돌고딕 Neo", "굴림", arial, sans-serif;
  margin-left: 2px;
  cursor: pointer;
`;

export const GenreShadowBox = styled.div`
  width: 100%;
  min-width: 1000px;
  box-shadow: 5px 5px 5px lightgray;
  /* display: flex;
  justify-content: center; */
`

export const GenreContainer = styled.div`
  width: 63%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  background-color: #fff;
`;

export const GenreBar = styled.div`
  display: flex;
  height: 60px;
  width: 100%;
  padding: 20px 50px;
  justify-content: space-between;
  background-color: white;
  align-items: center;
  box-sizing: border-box;
`;

export const GenreBtn = styled.button`
  font-size: 1rem;
  background-color: white;
  padding-bottom: 10px;
  border: none;
  cursor: pointer;
  font-family: "Noto Sans KR", sans-serif;
  font-weight: 700;
  &:hover {
    border-bottom: 4px solid black;
  }
`;

export const SidebarButtonToggle = styled.div`
  margin-right: 10px;
  
`;

export const SidebarGenreBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  text-align: center;
`;

export const ToggleButton = styled.i`
  color: #000;
  cursor: pointer;
  font-size: 2em;
  font-weight: 900;
  padding-left: 20px;
  padding-top: 15px; 
`


export const SearchBarArea = styled.form`
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
`;

export const SearchBar = styled.input`
  height: 40px;
  width: 300px;
  border: none;
  background: transparent;
  outline: none;
  color: black;
  caret-color: white;
  border-bottom: 2px solid black;
  font-size: 15px;
  margin: 24px 0 0 20px;
`;

export const MenuContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-left: auto;
  margin-right: 50px;
  margin-top: 10px;
`;

export const Button = styled.button`
  background: transparent;
  margin-top: 35px;
  margin-left: 10px;
  color: #000;
  right: 30px;
  font-size: 18px;
  border: none;
  cursor: pointer;
`;
