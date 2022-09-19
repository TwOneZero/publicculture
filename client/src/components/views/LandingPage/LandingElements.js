import styled from 'styled-components';

export const SliderDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1400px;
  /* margin: 100px 0; */
  margin: 100px auto;
`;

export const IMG = styled.img`
  margin: 50px;
  width: 15vw;
  height: 36vh;
`;

export const Container = styled.div`
  width: 100%;
  overflow: hidden;
  display: flex;
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
  &:hover {
    transition: all 0.3s ease-in-out;
    //background-color: coral;
    //color: #fff;
  }
`;
export const SliderContainer = styled.div`
  width: 100%;
  display: flex;
`;