import styled from "styled-components";


export const Main_Container = styled.div`
  width: 100%;
  background-color: #e0f2f7;
`

export const SgginfoDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin: 0 auto;
  margin-top: 5px;
  flex-direction: column;
`;

export const SgginfoImg = styled.img`
  margin-top: 150px;
  /* margin-bottom: 150px; */
  width: 60%;
  &:hover {
    transition: all 0.3s ease-in-out;
    //background-color: coral;
    //color: #fff;
  }
`;

export const SliderDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 65%;
  margin-top: 60px auto;
  overflow: hidden;
`;

export const IMGCover = styled.div`
  width: 22%;
  /* width: 300px; */
  height: 45vh;
  //background-color: black;
  margin: 50px;
  /* position: absoulte; */
  font-size: 0px;
  &:hover {
    font-size: 15px;
  }
`;

export const IMG = styled.img`
  
  height: 36vh;
  /* height: 100%; */
  object-fit: cover;
  background-color: black;
  &:hover {
    /* position: relative; */
    opacity: 0.5;
  }
`;

export const TitleBox = styled.div`
  display: flex;
  height: 150px;
  font-family: "NG", "Malgun Gothic", Dotum, "돋움", AppleGothicNeoSD,
    "Apple SD 산돌고딕 Neo", "굴림", arial, sans-serif;
`;

export const ImgTitle = styled.div`
  margin-top: 20px;
  width: 290px;
  color: black;
  font-weight: 800;
  font-size: 19px;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Container = styled.div`
  width: 1200px;
  overflow: hidden;
  //margin-right: 10px;
`;
export const Button = styled.button`
  //all: unset;
  border: none;
  padding: 1%;
  background-color: transparent;
  //border-radius: 10px;
  font-size: 30px;
  cursor: pointer;
`;
export const SliderContainer = styled.div`
  width: 100%;
  display: flex;
`;
