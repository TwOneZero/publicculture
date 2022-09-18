import React, { useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPostDetails, likePost } from '../../../_actions/post_action';
import Comment from '../Comment/Comment';
import Auth from '../../../hoc/auth';

import {
  PostContainer,
  PostContent,
  ContainerH1,
  Line,
  Event_title,
  Event_info_container,
  Photo_container,
  Event_info,
  Event_info_content,
  Event_Button,
  Like_container,
  Likebtn,
  TabBar,
  TabBtn,
  EventLContainer,
  WrapContainer,
  EventRContainer,
  RecommendContainer,
  RecommendH1,
  RecommendContent,
  RecommendList,
  RcImage,
  RcH2,
  RcP,
} from './PostElements';
import Loading from '../Loading/Loading';

import TestImage from '../../../assets/image/test.jpg';

function PostPage() {
  let params = useParams();
  const postState = useSelector((state) => state.post);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const [post, setPost] = useState([]);
  // const [title, setTitle] = useState();
  // const [main_img, setImg] = useState();
  // const [place, setPlace] = useState();
  // const [date, setDate] = useState();
  // const [use_trgt, setTarget] = useState();
  // const [use_fee, setFee] = useState();
  const [likes, setLikes] = useState(0);
  const [tab, setTab] = useState(0);
  const [link, setLink] = useState('');
  const settingTab = (index) => {
    setTab(index);
  };

  useEffect(() => {
    dispatch(getPostDetails(params.postId)).then((res) => {
      if (res.payload.post) {
        console.log(res.payload.post);
        // setPost(res.payload.post);
        // setTitle(res.payload.post.title);
        // setImg(res.payload.post.main_img);
        // setPlace(res.payload.post.place);
        // setDate(res.payload.post.date);
        // setTarget(res.payload.post.use_trgt);
        // setFee(res.payload.post.use_fee);
        // setLikes(res.payload.post.likes.length);
        //console.log(params.postId);
        setLink(res.payload.post.org_link);
      } else {
        console.log('error!!!!!!!!!!!!!!');
      }
    });
  }, [dispatch, params.postId]);

  const onEventBtnClicked = () => {
    navigate(link);
  }

  const onLikebtnClicked = () => {
    dispatch(likePost(params.postId))
      .then((res) => {
        if (res.payload.isAuth === false) {
          alert(res.payload.message);
        }
        if (res.payload) {
          // setLikes(res.payload.likes);
          console.log(res.payload);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <PostContainer>
      <PostContent>
        {postState.post ? (
          <>
            <ContainerH1>{postState.post.codename}</ContainerH1>
            <Line></Line>
            <WrapContainer>
              <EventLContainer>
                <Event_title>{postState.post.title}</Event_title>
                <Event_info_container>
                  <Photo_container
                    src={postState.post.main_img}
                    alt='images'
                  ></Photo_container>
                  <Event_info>
                    <Event_info_content>
                      장소 : {postState.post.place}
                    </Event_info_content>
                    <Event_info_content>
                      일시 : {postState.post.date}
                    </Event_info_content>
                    <Event_info_content>
                      관람연령 : {postState.post.use_trgt}
                    </Event_info_content>
                    <Event_info_content>
                      요금 : {postState.post.use_fee}
                    </Event_info_content>
                    <Event_info_content>
                      <Event_Button href={postState.post.org_link}>공식홈페이지</Event_Button>
                    </Event_info_content>
                  </Event_info>
                </Event_info_container>

                <Likebtn onClick={onLikebtnClicked}>
                  {' '}
                  ❤️ {postState.post.likes.length}
                </Likebtn>
              </EventLContainer>

              <EventRContainer>
                <RecommendContainer>
                  <RecommendH1>연관 추천 행사</RecommendH1>
                  <RecommendContent>
                    <RecommendList>
                      <RcImage src={TestImage} />
                      <RcH2>Abcaaaaaaaaaaaaaaaaaaaaa</RcH2>
                      <RcP>qwrasfasfsadasdassfsa</RcP>
                    </RecommendList>
                    <RecommendList>
                      <RcImage src={TestImage} />
                      <RcH2>Abcaaaaaaaaaaaaaaaaaaaaa</RcH2>
                      <RcP>qwrasfasfsfsaasfasfasfasfasf</RcP>
                    </RecommendList>
                    
                  </RecommendContent>
                </RecommendContainer>
              </EventRContainer>

            </WrapContainer>
          </>
        ) : (
          <Loading />
        )}

        <Comment props={params.postId} />

      </PostContent>

      <TabBar itemType='button'>
        <TabBtn name='지도' onClick={() => settingTab(0)}>
          지도
        </TabBtn>
        <TabBtn name='맛집' onClick={() => settingTab(1)}>
          맛집
        </TabBtn>
        <TabBtn name='주변 카페' onClick={() => settingTab(2)}>
          주변 카페
        </TabBtn>
      </TabBar>
      <TabContent tab={tab} />
    </PostContainer>
  );
}

function TabContent(props) {
  return [<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][props.tab];
}

export default Auth(PostPage, null);
