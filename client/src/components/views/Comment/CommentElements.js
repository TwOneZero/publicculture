import styled from 'styled-components';


export const Comment_wContainer = styled.div`
  width: 50vw;
  height: 180px;
  display: flex;
  justify-self: start;
  border-bottom: 2px solid black;
  align-items: center;
  margin: 40 0px;
`;

export const Commentbox = styled.textarea`
  height: 100px;
  width: 85%;
  border: 1px solid grey;
  outline: none;
  resize: none;
  padding: 10px;
  font-size: 20px;
  font-family: 'Lato', sans-serif;
  &:focus {
    border: 1px solid grey;
  }
`;

export const Comment_submit_btn = styled.button`
  width: 15%;
  height: 122px;
  border: none;
  color: white;
  background-color: black;
  cursor: pointer;
  &:active {
    border: 1px solid grey;
  }
`;