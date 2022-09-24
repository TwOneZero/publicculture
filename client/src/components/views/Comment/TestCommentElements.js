import styled from "styled-components";

//댓글 조회

export const CommentArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px 0px 100px 0px;
`;
export const CommentHeader = styled.div`
  display: flex;
  font-size: 40px;
  font-weight: 1000;
  margin: 60px 0px 50px 0px;
  background-color: white;
  color: black;
  padding: 5px;
  justify-content: center;
  font-family: "Lato", sans-serif;
`;

export const CommentBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 40px 0px 40px 0px;
  
`;

export const Comments_content = styled.a`
  text-decoration: none;
  color: #000;

  &:hover{
    font-weight: bold;
  }
`

export const Comments_container = styled.div`
  display: flex;
  flex-direction: column;
  //align-items: center;
  justify-content: center;
  
  font-size: 14pt;
  font-family: "Noto Sans KR", sans-serif;
  width: 50vw;
  margin: 20px 0;
  border-bottom: 1px solid lightgrey;
`;

//read comments screen
export const Comment_username = styled.div`
  font-size: 14pt;
  margin-bottom: 16px;
  font-weight: 700;
`;

export const Comment_content = styled.div`
  font-size: 15pt;
`;

export const Comment_date = styled.div`
  padding: 5px;
  display: flex;
  font-size: 10pt;
  justify-content: right;
  color: grey;
`;

export const Comment_func = styled.div`
  display: flex;
  justify-content: right;
`;

export const Delete = styled.div`
  padding: 10px 0;
  font-size: 12pt;
  display: flex;
  color: grey;
  background-color: transparent;
  justify-content: right;
  &:hover {
    cursor: pointer;
    color: black;
  }
`;
