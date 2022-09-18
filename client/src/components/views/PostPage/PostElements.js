import styled from 'styled-components';

export const PostContainer = styled.div`
  display: flex;
  align-items: center;
  font-family: 'Noto Sans KR';
  flex-direction: column;
  margin-top: 50px;
`

export const PostContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 1300px;
`

export const WrapContainer = styled.div`
  width: 1250px;
  display: grid;
  grid-template-columns: 1fr 1fr;
`

export const EventLContainer = styled.div`
  max-width: 900px;
  margin-left: 20px;
`

export const EventRContainer = styled.div`
  width: 400px;
  height: 600px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`

export const RecommendContainer = styled.div``

export const RecommendH1 = styled.h1`
  text-align: center;
  margin-bottom: 30px;
`

export const RecommendContent = styled.div`
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    align-items: flex-start;
    grid-gap: 36px;
    width: 300px;
`

export const RecommendList = styled.div`
  background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height: 340px;
    transition: all 0.2s ease-in-out;
`
export const RcImage = styled.img`
  width: 180px;
  height: 150px;
  object-fit: cover;
`

export const RcH2 = styled.h2`
  font-size: 1rem;
  width: 150px;
  margin: 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-align: start;
`

export const RcP = styled.p`
  font-size: 1rem;
  width: 150px;
  text-align: start;
  margin: 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`

export const ContainerH1 = styled.h1`
  color: #000;
  font-size: 26px;
  font-weight: bold;
`

export const Line = styled.div`
    border-bottom: 1px solid #000;
`



//행사 정보
export const Event_title = styled.div`
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 26px;
  font-weight: normal;
  margin-top: 20px;
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
  object-fit: cover;
`;

export const Event_info = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: -10px;
  margin-left: 20px;
  margin: -10px 20px 20px;
`;

export const Event_info_content = styled.div`
  margin: 15px 0;
  font-size: 22px;
  font-weight: 400;
`;

export const Event_info_last_content = styled.div`
  margin: 50px 0 15px;
  font-size: 22px;
  font-weight: 400;
  display: flex;
  flex-direction: row;
`;

export const Event_detail_container = styled.div`
  display: flex;
  flex-direction: row;
  height: 24px;
`

export const Event_detail_title = styled.p`
  width: 100px;
  font-size: 20px;
`

export const Event_detail_content = styled.p`
  width: 400px;
  font-size: 20px;
`

export const Event_Button = styled.a`
  display: flex;
  width: 150px;
  height: 40px;
  align-items: center;
  justify-content: center;
  border: 1px solid #4e8cff;
  border-radius: 4px;
  font-size: 16px;
  background-color: #ebf4ff;
  cursor: pointer;
  text-decoration: none;
  color: #000;
`

//좋아요


export const Likebtn = styled.button`
  margin-left: 50px;
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