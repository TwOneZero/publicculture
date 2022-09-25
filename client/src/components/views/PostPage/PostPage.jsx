import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
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
  EventTitle,
  EventInfoContainer,
  PhotoContainer,
  EventInfo,
  EventInfoContent,
  EventInfoLastContent,
  EventButton,
  EventDetailContainer,
  EventDetailTitle,
  EventDetailContent,
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
import axios from 'axios';

function PostPage() {
  let params = useParams();
  const postState = useSelector((state) => state.post);
  const dispatch = useDispatch();

  const [tab, setTab] = useState(0);
  const settingTab = (index) => {
    setTab(index);
  };

  const [randoms, setRandoms] = useState(0);
  const [randoms2, setRandoms2] = useState(0);

  const [address, setAddress] = useState('');
  const [xpos, setXpos] = useState();
  const [ypos, setYpos] = useState();

  useEffect(() => {
    dispatch(getPostDetails(params.postId)).then((res) => {
      if (res.payload.post) {
        console.log(res.payload.post);
        setRandoms(Math.floor(Math.random() * postState.posts.length));
    setRandoms2(Math.floor(Math.random() * postState.posts.length));
      } else {
        console.log('error!!!!!!!!!!!!!!');
      }
    });
    
  }, [dispatch, params.postId, postState.posts.length]);

  const onLikebtnClicked = () => {
    dispatch(likePost(params.postId))
      .then((res) => {
        if (res.payload.isAuth === false) {
          alert(res.payload.message);
        }
        if (res.payload) {
          console.log(res.payload);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (
      postState.post?.guname !== undefined &&
      postState.post?.place !== undefined
    ) {
      axios
        .get(
          `https://dapi.kakao.com/v2/local/search/keyword.json?query=${
            postState.post.guname
          } ${postState.post.place.split(' ')[0]}`,
          {
            headers: {
              Authorization: 'KakaoAK 1edeaebc50d51faf8d8fb0333bb65234',
            },
          }
        )
        .then((response) => {
          if (response.data.documents.length >= 1) {
            const pname = response.data.documents[0].address_name;
            setAddress(pname);
            setXpos(response.data.documents[0].x);
            setYpos(response.data.documents[0].y);
          }
        });
    }
  }, [postState]);

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
                  <EventTitle>{postState.post.title}</EventTitle>
                  <EventInfoContainer>
                    <PhotoContainer
                      src={postState.post.main_img}
                      alt='images'
                    ></PhotoContainer>
                    <EventInfo>
                      <EventInfoContent>
                        <EventDetailContainer>
                          <EventDetailTitle>장소</EventDetailTitle>
                          <EventDetailContent>
                            {postState.post.place}
                          </EventDetailContent>
                        </EventDetailContainer>
                      </EventInfoContent>
                      <EventInfoContent>
                        <EventDetailContainer>
                          <EventDetailTitle>지역</EventDetailTitle>
                          <EventDetailContent>
                            {postState.post.guname}
                          </EventDetailContent>
                        </EventDetailContainer>
                      </EventInfoContent>
                      <EventInfoContent>
                        <EventDetailContainer>
                          <EventDetailTitle>일시</EventDetailTitle>
                          <EventDetailContent>
                            {postState.post.date}
                          </EventDetailContent>
                        </EventDetailContainer>
                      </EventInfoContent>
                      <EventInfoContent>
                        <EventDetailContainer>
                          <EventDetailTitle>요금</EventDetailTitle>
                          <EventDetailContent>
                            {postState.post.use_fee === ''
                              ? '무료'
                              : postState.post.use_fee}
                          </EventDetailContent>
                        </EventDetailContainer>
                      </EventInfoContent>
                      <EventInfoContent>
                        <EventDetailContainer>
                          <EventDetailTitle>관람연령</EventDetailTitle>
                          <EventDetailContent>
                            {postState.post.use_trgt}
                          </EventDetailContent>
                        </EventDetailContainer>
                      </EventInfoContent>
                      <EventInfoContent>
                        <EventDetailContainer>
                          <EventDetailTitle>주최</EventDetailTitle>
                          <EventDetailContent>
                            {postState.post.org_name === ''
                              ? '서울시'
                              : postState.post.org_name}
                          </EventDetailContent>
                        </EventDetailContainer>
                      </EventInfoContent>
                      <EventInfoLastContent>
                        <EventButton href={postState.post.org_link}>
                          공식홈페이지
                        </EventButton>
                        <Likebtn onClick={onLikebtnClicked}>
                          {' '}
                          ❤️ {postState.post.likes.length}
                        </Likebtn>
                      </EventInfoLastContent>
                    </EventInfo>
                  </EventInfoContainer>
                </EventLContainer>
                <EventRContainer>
                  <RecommendContainer>
                    <RecommendH1>이런 행사는 어때요?</RecommendH1>
                    <RecommendContent>
                      <RecommendList>
                        {postState.posts ? (
                          <>
                            <a href={`/post/${postState.posts[randoms]?._id}`}>
                              <RcImage
                                src={postState.posts[randoms]?.main_img}
                              />
                            </a>

                            <RcH2>{postState.posts[randoms]?.title}</RcH2>
                            <RcP>{postState.posts[randoms]?.place}</RcP>
                          </>
                        ) : null}
                      </RecommendList>
                      <RecommendList>
                        {postState.posts ? (
                          <>
                            <a href={`/post/${postState.posts[randoms2]?._id}`}>
                              <RcImage
                                src={postState.posts[randoms2]?.main_img}
                              />
                            </a>

                            <RcH2>{postState.posts[randoms2]?.title}</RcH2>
                            <RcP>{postState.posts[randoms2]?.place}</RcP>
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
          place={address}
          xpos={xpos}
          ypos={ypos}
        />
      </PostContainer>
    </>
  );
}

export default Auth(PostPage, null);
