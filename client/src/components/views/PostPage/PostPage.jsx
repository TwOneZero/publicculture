import React, { useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPostDetails, likePost } from '../../../_actions/post_action';
import Comment from '../Comment/Comment';
import Auth from '../../../hoc/auth'

import {
  Event_title,
  Event_info_container,
  Photo_container,
  Event_info,
  Event_info_content,
  Like_container,
  Likebtn,
  TabBar,
  TabBtn,
} from './PostElements';



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
