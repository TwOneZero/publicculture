import styled from 'styled-components';

export const SliderDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const IMG = styled.img`
  margin: 50px;
  width: 25vw;
  height: 48vh;
`;

export const Container = styled.div`
  width: 90%;
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