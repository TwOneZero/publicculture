import styled from 'styled-components';

export const SgginfoDiv = styled.div`
  width: 100%;
  height: 1050px;
  display: flex;
  align-items: center;
  background-color: #E0F2F7;
  flex-direction: column;
`;

export const SgginfoImg = styled.img`
  margin-top: 150px;
  padding-right: 200px;
  width: 70%;
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
  width: 1400px;
  margin: 60px auto;
  overflow: hidden;
`;

export const IMGCover = styled.div`
  width: 15vw;
  height: 36vh;
  background-color: black;
  margin: 50px;
  position: absoulte;
  font-size: 0px;
  &:hover {
    font-size: 15px;
  }
`;

export const IMG = styled.img`
  width: 15vw;
  height: 36vh;
  object-fit: cover;
  background-color: black;
  &:hover {
    position: relative;
    opacity: 0.5;
  }
`;

export const IMGTitle = styled.div`
  font-size: 15px;
  color: white;
  opacity: 0;
  &:hover {
    opacity: 1;
  }
`;

export const Container = styled.div`
  width: 100%;
  overflow: hidden;
  //display: flex;
  //flex-direction: center;
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