import React, { useState } from 'react';
import styled from 'styled-components';
import FullCalendar, { renderScrollShim } from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import { useLocation, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPostDetails } from '../../../_actions/post_action';
import Auth from '../../../hoc/auth';

//행사 정보
const Event_title = styled.div`
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 45px;
  font-weight: 700;
  //background-color: yellow;
`;

const Event_info_container = styled.div`
  display: flex;
  flex-direction: row;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 30px;
  font-weight: 400;
  //background-color: green;
  width: 50vw;
`;

const Photo_container = styled.div`
  width: 300px;
  height: 400px;
  margin: 25px 20px 20px 0;
  border: solid 1px;
  //background-color: white;
`;

const Event_info = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
`;

const Event_info_content = styled.div`
  margin: 15px 0;
  font-size: 18px;
  font-weight: 400;
`;

//달력
const Calender_Container = styled.div`
  display: flex;
  font-size: 15px;
  justify-content: space-around;
  alignitems: start;
  & .calendar {
    width: 20vw;
  }
`;

//댓글
const Comment_wContainer = styled.div`
  width: 650px;
  height: 120px;
  display: flex;
  // border-bottom: 2px solid black;
  position: relative;
  right: 22vh;
  margin: 40px;
`;

const Commentbox = styled.textarea`
  height: 73px;
  width: 85%;
  border: 1px solid grey;
  outline: none;
  resize: none;
  padding: 10px;
  font-family: 'Lato', sans-serif;
  &:focus {
    border: 1px solid grey;
  }
`;

const Comment_submit_btn = styled.button`
  width: 15%;
  height: 95px;
  border: none;
  color: white;
  background-color: black;
  cursor: pointer;
  &:active {
    border: 1px solid grey;
  }
`;

//좋아요
const Like_container = styled.div`
  display:'flex', 
  flexDirection: 'column', 
  alignItems: 'center', 
  margin: '20px',
  fontSize: '36px', 
  position: 'relative',
  right: '11vw'
`;

const TabBar = styled.div`
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

const TabBtn = styled.button`
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

function PostPage() {
  let params = useParams();
  const dispatch = useDispatch();

  const [tab, setTab] = useState(0);
  const settingTab = (index) => {
    setTab(index)
  }

  useEffect(() => {
    dispatch(getPostDetails(params.postId)).then((res) => {
      if (res.payload.post) {
        console.log(res.payload.post);
      } else {
        console.log('error!!!!!!!!!!!!!!');
      }
    });
  }, [dispatch, params.postId]);


  return (
    <div
      style={{
        display: 'flex',
        //justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Noto Sans KR',
        flexDirection: 'column',
        margin: '60px',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          //alignItems: 'center',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Event_title>행사이름</Event_title>
          <Event_info_container>
            <Photo_container></Photo_container>
            <Event_info>
              <Event_info_content>장소:</Event_info_content>
              <Event_info_content>일시:</Event_info_content>
              <Event_info_content>관람연령:</Event_info_content>
              <Event_info_content>요금:</Event_info_content>
            </Event_info>
          </Event_info_container>
        </div>

        <Calender_Container>
          <div className='calendar'>
            <FullCalendar
              id='fullcalendar'
              plugins={[dayGridPlugin]}
              initialView='dayGridMonth'
              locale='ko' // 한국어 설정
              businessHours={true} // 주말 색깔 블러 처리
              height='67vh'
            />
          </div>
        </Calender_Container>
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          margin: '20px',
          position: 'relative',
          right: '11vw',
        }}
      >
        <div style={{ fontSize: '36px' }}>
          <i className='fas fa-heart'></i>
        </div>
        좋아요
      </div>

      <Comment_wContainer>
        <Commentbox placeholder='여기에 댓글을 작성해주세요'></Commentbox>
        <Comment_submit_btn type='submit'>등록</Comment_submit_btn>
      </Comment_wContainer>

      
      

      <TabBar itemType='button'>
        <TabBtn
        name='지도' 
        className={tab === 0 ? "tabs active-tabs" : "tabs"}
        onClick={() => settingTab(0)}
        >지도</TabBtn>
        <TabBtn
        name='맛집'
        className={tab === 1 ? "tabs active-tabs" : "tabs"}
        onClick={() => settingTab(1)}
        >맛집</TabBtn>
        <TabBtn
        name='주변 카페'
        className={tab === 2 ? "tabs active-tabs" : "tabs"}
        onClick={() => settingTab(2)}
        >주변 카페</TabBtn>
      </TabBar>
      <TabContent tab={tab}/>
      
    </div>
  );
}
function TabContent(props){
  return [ <div>내용0</div>, <div>내용1</div>, <div>내용2</div> ][props.tab]
}

export default Auth(PostPage, null);
