import React, { useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getPostDetails,
  likePost,
  getRandomCodeNamePost,
} from '../../../_actions/post_action';
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
  Event_info_last_content,
  Event_Button,
  Event_detail_container,
  Event_detail_title,
  Event_detail_content,
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
import Map from '../Map/Map';

function PostPage() {
  let params = useParams();
  const postState = useSelector((state) => state.post);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [tab, setTab] = useState(0);
  const settingTab = (index) => {
    setTab(index);
  };

  useEffect(() => {
    dispatch(getPostDetails(params.postId)).then((res) => {
      if (res.payload.post) {
        console.log(res.payload.post);
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
          // setLikes(res.payload.likes);
          console.log(res.payload);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getRandomIndex = (len) => {
    return Math.floor(Math.random() * len);
  };

  return (
    <>
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
                        <Event_detail_container>
                          <Event_detail_title>장소</Event_detail_title>
                          <Event_detail_content>
                            {postState.post.place}
                          </Event_detail_content>
                        </Event_detail_container>
                      </Event_info_content>
                      <Event_info_content>
                        <Event_detail_container>
                          <Event_detail_title>지역</Event_detail_title>
                          <Event_detail_content>
                            {postState.post.guname}
                          </Event_detail_content>
                        </Event_detail_container>
                      </Event_info_content>
                      <Event_info_content>
                        <Event_detail_container>
                          <Event_detail_title>일시</Event_detail_title>
                          <Event_detail_content>
                            {postState.post.date}
                          </Event_detail_content>
                        </Event_detail_container>
                      </Event_info_content>
                      <Event_info_content>
                        <Event_detail_container>
                          <Event_detail_title>요금</Event_detail_title>
                          <Event_detail_content>
                            {postState.post.use_fee === ''
                              ? '무료'
                              : postState.post.use_fee}
                          </Event_detail_content>
                        </Event_detail_container>
                      </Event_info_content>
                      <Event_info_content>
                        <Event_detail_container>
                          <Event_detail_title>관람연령</Event_detail_title>
                          <Event_detail_content>
                            {postState.post.use_trgt}
                          </Event_detail_content>
                        </Event_detail_container>
                      </Event_info_content>
                      <Event_info_content>
                        <Event_detail_container>
                          <Event_detail_title>주최</Event_detail_title>
                          <Event_detail_content>
                            {postState.post.org_name === ''
                              ? '서울시'
                              : postState.post.org_name}
                          </Event_detail_content>
                        </Event_detail_container>
                      </Event_info_content>
                      <Event_info_last_content>
                        <Event_Button href={postState.post.org_link}>
                          공식홈페이지
                        </Event_Button>
                        <Likebtn onClick={onLikebtnClicked}>
                          {' '}
                          ❤️ {postState.post.likes.length}
                        </Likebtn>
                      </Event_info_last_content>
                    </Event_info>
                  </Event_info_container>
                </EventLContainer>
                <EventRContainer>
                  <RecommendContainer>
                    <RecommendH1>연관 추천 행사</RecommendH1>
                    <RecommendContent>
                      <RecommendList>
                        {postState.posts ? (
                          <>
                            <RcImage
                              src={
                                postState.posts[
                                  getRandomIndex(postState.posts.length)
                                ].main_img
                              }
                            />
                            <RcH2>
                              {
                                postState.posts[
                                  getRandomIndex(postState.posts.length)
                                ].title
                              }
                            </RcH2>
                            <RcP>
                              {
                                postState.posts[
                                  getRandomIndex(postState.posts.length)
                                ].place
                              }
                            </RcP>
                          </>
                        ) : null}
                      </RecommendList>
                      <RecommendList>
                        {postState.posts ? (
                          <>
                            <RcImage
                              src={
                                postState.posts[
                                  getRandomIndex(postState.posts.length)
                                ].main_img
                              }
                            />
                            <RcH2>
                              {
                                postState.posts[
                                  getRandomIndex(postState.posts.length)
                                ].title
                              }
                            </RcH2>
                            <RcP>
                              {
                                postState.posts[
                                  getRandomIndex(postState.posts.length)
                                ].place
                              }
                            </RcP>
                          </>
                        ) : null}
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
          <TabBtn name='맛집' onClick={() => settingTab(0)}>
            맛집
          </TabBtn>
          <TabBtn name='주변카페' onClick={() => settingTab(1)}>
            주변카페
          </TabBtn>
        </TabBar>
        <Map
          tab={tab}
          //place 로 하면 이상한 극장 이름 같은건 인식 못해서 일단 guname 으로 넣음
          //넣을 때 좀 여러 field 넣을 수 있는 거 찾아봐야함
          place={postState.post?.guname}
        />
      </PostContainer>
    </>
  );
}

export default Auth(PostPage, null);
