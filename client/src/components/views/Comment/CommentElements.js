import styled from 'styled-components';

export const Comment_wContainer = styled.div`
  width: 900px;
  height: 180px;
  display: flex;
  border-bottom: 2px solid black;
  align-items: center;
  margin: 40 0px;
  //background-color: yellow;
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

//댓글 조회
export const Comments_container = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  font-size: 14pt;
  font-family: 'Lato', sans-serif;
  margin: 10px;
  padding: 10px;
`;

//read comments screen
export const Comment_username = styled.div`
  font-size: 14pt;
  margin-bottom: 15px;
`;

export const Comment_content = styled.div`
  font-size: 15pt;
`;

export const Comment_date = styled.div`
  padding: 5px;
  display: flex;
  font-size: 10pt;
  justify-content: right;
`;

export const Comment_func = styled.div`
  display: flex;
  justify-content: right;
`;

export const Modify = styled.button`
  padding: 5px;
  font-size: 15pt;
  display: flex;
  border: 0;
  background-color: transparent;
  cursor: pointer;
`;

export const Delete = styled.button`
  padding: 5px;
  font-size: 15pt;
  display: flex;
  border: 0;
  background-color: transparent;
  cursor: pointer;
`;
