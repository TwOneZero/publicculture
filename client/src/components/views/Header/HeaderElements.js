import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 10px;
  background-color: white;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const HeaderLogo = styled.div`
  display: flex;
  justify-content: center;
  cursor: pointer;
  width: 80%; /* Adjust width as needed */
  max-width: 300px; /* Add max-width to prevent logo from becoming too large */
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
  width: auto;
  height: 50px;
  font-size: 1rem;
  font-weight: 700;
  font-family: 'NG', 'Malgun Gothic', Dotum, '돋움', AppleGothicNeoSD,
    'Apple SD 산돌고딕 Neo', '굴림', arial, sans-serif;
  margin-left: 2px;
  margin-right: 10px; /* Add some right margin for spacing */
  cursor: pointer;
  white-space: nowrap;
`;

export const GenreShadowBox = styled.div`
  width: 100%;
  min-width: 1000px;
  box-shadow: 5px 5px 5px lightgray;

  @media (max-width: 1024px) {
    min-width: auto;
  }
`;
export const GenreContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  background-color: #fff;

  @media (max-width: 1024px) {
    padding: 0 20px;
  }
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
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  &:hover {
    border-bottom: 4px solid black;
  }
`;

export const SidebarButtonToggle = styled.div`
  margin-left: 20px; /* Adjust margin as needed */
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
`;

export const SearchBarArea = styled.form`
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
`;

export const SearchBar = styled.input`
  height: 40px;
  width: 100%;
  max-width: 300px;
  border: none;
  background: transparent;
  outline: none;
  color: black;
  caret-color: white;
  border-bottom: 2px solid black;
  font-size: 15px;
  margin: 24px 0 0 0;

  @media (max-width: 768px) {
    margin: 12px 0 0 0;
  }
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
