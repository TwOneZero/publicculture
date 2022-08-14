import React, { useState } from 'react';
import styled from 'styled-components';
import { useLocation, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPostDetails, likePost } from '../../../_actions/post_action';
import Comment from '../Comment/Comment';
import Auth from '../../../hoc/auth'

//행사 정보
const Event_title = styled.div`
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 45px;
  font-weight: 700;
  margin-bottom : 10px;
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

const Photo_container = styled.img`
  width: 300px;
  height: 400px;
  margin: 25px 20px 20px 0;
  object-fit: fill;
`;

const Event_info = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
`;

const Event_info_content = styled.div`
  margin: 15px 0;
  font-size: 22px;
  font-weight: 400;
  //background-color: yellow;
`;

//좋아요
const Like_container = styled.div`
  display:flex;
  flex-direction: column; 
  align-items: center;
  margin: 80px 0 20px 0;
  font-size: 22px; 
`;

const Likebtn = styled.button`
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
  const [post, setPost] = useState([]);
  const [title, setTitle] = useState();
  const [main_img, setImg] = useState();
  const [place, setPlace] = useState();
  const [date, setDate] = useState();
  const [use_trgt, setTarget] = useState();
  const [use_fee, setFee] =  useState();
  const [likes, setLikes] = useState([]);

  const [tab, setTab] = useState(0);
  const settingTab = (index) => {
    setTab(index)
  }
  
  useEffect(() => {
    dispatch(getPostDetails(params.postId)).then((res) => {
      if (res.payload.post) {
        console.log(res.payload.post);
        setPost(res.payload.post);
        setTitle(res.payload.post.title);
        setImg(res.payload.post.main_img);
        setPlace(res.payload.post.place);
        setDate(res.payload.post.date);
        setTarget(res.payload.post.use_trgt);
        setFee(res.payload.post.use_fee);
        setLikes(res.payload.post.likes);
        //console.log(params.postId);
      } else {
        console.log('error!!!!!!!!!!!!!!');
      }
    });
  }, [dispatch, params.postId]);

  const onLikebtnClicked = () => {
    dispatch(likePost(params.postId))
    .then((res) => {
      if (res.payload.isAuth === false) {
        alert(res.payload.message);
      }
      if (res.payload) {
        setLikes(res.payload.updatedPost.likes);
        console.log(res.payload);
      }
    })
    .catch((err) => {
      console.log(err);
    });
  };
    
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
            flexDirection: 'column',
          }}
        >
          <Event_title>{title}</Event_title>
          <Event_info_container>
            <Photo_container src={main_img} alt='images'></Photo_container>
            <Event_info>
              <Event_info_content>장소: {place}</Event_info_content>
              <Event_info_content>일시: {date}</Event_info_content>
              <Event_info_content>관람연령: {use_trgt}</Event_info_content>
              <Event_info_content>요금: {use_fee}</Event_info_content>
            </Event_info>
          </Event_info_container>
        </div>
      <Like_container>
        <Likebtn onClick={onLikebtnClicked}>❤️</Likebtn>
        <div>좋아요</div>
        {likes.length}
     </Like_container>
     <Comment props={params.postId}/>

     <TabBar itemType='button'>
        <TabBtn
        name='지도'
        onClick={() => settingTab(0)}
        >지도</TabBtn>
        <TabBtn
        name='맛집'
        onClick={() => settingTab(1)}
        >맛집</TabBtn>
        <TabBtn
        name='주변 카페'
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

export default Auth(PostPage,null);
