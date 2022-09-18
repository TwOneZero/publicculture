import styled from 'styled-components';

export const PostContainer = styled.div`
  display: flex;
  align-items: center;
  font-family: 'Noto Sans KR';
  flex-direction: column;
  margin: 60px;
`

export const PostContent = styled.div`
  display: flex;
  flex-direction: column;
`

//행사 정보
export const Event_title = styled.div`
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 45px;
  font-weight: 700;
  margin-bottom : 10px;
  //background-color: yellow;
`;

export const Event_info_container = styled.div`
  display: flex;
  flex-direction: row;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 30px;
  font-weight: 400;
  //background-color: green;
  width: 50vw;
`;

export const Photo_container = styled.img`
  width: 300px;
  height: 400px;
  margin: 25px 20px 20px 0;
  object-fit: fill;
`;

export const Event_info = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
`;

export const Event_info_content = styled.div`
  margin: 15px 0;
  font-size: 22px;
  font-weight: 400;
  //background-color: yellow;
`;

//좋아요
export const Like_container = styled.div`
  display:flex;
  flex-direction: column; 
  align-items: center;
  margin: 80px 0 20px 0;
  font-size: 22px; 
`;

export const Likebtn = styled.button`
  font-size: 30px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
  &:active{
    transform: scale(1);
  }
`;

//정보탭
export const TabBar = styled.div`
  display: flex;
  height: 55px;
  width: 70%;
  padding: 10px 100px;
  justify-content: space-between;
  background-color: white;
  align-items: center;
  border-bottom: solid 1px black;
  // border: 1px solid black;
`;

export const TabBtn = styled.button`
  font-size: 18px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 500;
  &:hover {
    //background-color: #a9a9a9;
    border-bottom: 4px solid #ffcb6b;
  }
`;