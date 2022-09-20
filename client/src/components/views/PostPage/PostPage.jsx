import React, { useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPostDetails, likePost, getRandomCodeNamePost } from '../../../_actions/post_action';
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

  const [randoms, setRandoms] = useState(0);
  const [randoms2, setRandoms2] = useState(0);


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
    let Randoms, Randoms2;
    Randoms = Math.floor(Math.random() * 100) + 1;
    Randoms2 = Math.floor(Math.random() * 100) + 1;
    setRandoms(Randoms)
    setRandoms2(Randoms2)
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

  return (
<<<<<<< HEAD
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
                          <Event_detail_title>
                            장소
                          </Event_detail_title>
                          <Event_detail_content>
                            {postState.post.place}
                          </Event_detail_content>
                        </Event_detail_container>
                      </Event_info_content>
                      <Event_info_content>
                        <Event_detail_container>
                          <Event_detail_title>
                            지역
                          </Event_detail_title>
                          <Event_detail_content>
                            {postState.post.guname}
                          </Event_detail_content>
                        </Event_detail_container>
                      </Event_info_content>
                      <Event_info_content>
                        <Event_detail_container>
                          <Event_detail_title>
                            일시
                          </Event_detail_title>
                          <Event_detail_content>
                            {postState.post.date}
                          </Event_detail_content>
                        </Event_detail_container>
                      </Event_info_content>
                      <Event_info_content>
                        <Event_detail_container>
                          <Event_detail_title>
                            요금
                          </Event_detail_title>
                          <Event_detail_content>
                            {
                              postState.post.use_fee === "" ? "무료" : postState.post.use_fee
                            }
                          </Event_detail_content>
                        </Event_detail_container>
                      </Event_info_content>
                      <Event_info_content>
                        <Event_detail_container>
                          <Event_detail_title>
                            관람연령
                          </Event_detail_title>
                          <Event_detail_content>
                            {postState.post.use_trgt}
                          </Event_detail_content>
                        </Event_detail_container>
                      </Event_info_content>
                      <Event_info_content>
                        <Event_detail_container>
                          <Event_detail_title>
                            주최
                          </Event_detail_title>
                          <Event_detail_content>
                            {
                              postState.post.org_name === "" ? "서울시" : postState.post.org_name
                            }
                          </Event_detail_content>
                        </Event_detail_container>
                      </Event_info_content>
                      <Event_info_last_content>
                        <Event_Button href={postState.post.org_link}>공식홈페이지</Event_Button>
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
                        {
                          postState.posts
                            ?
                            <>
                              <RcImage src={postState.posts[randoms].main_img} />
                              <RcH2>{postState.posts[randoms].title}</RcH2>
                              <RcP>{postState.posts[randoms].place}</RcP>
                            </>
                            : null
                        }
                      </RecommendList>
                      <RecommendList>
                        {
                          postState.posts
                            ?
                            <>
                              <RcImage src={postState.posts[randoms2].main_img} />
                              <RcH2>{postState.posts[randoms2].title}</RcH2>
                              <RcP>{postState.posts[randoms2].place}</RcP>
                            </>
                            : null
                        }
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
    </>
=======
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
        {postState.post ? (
          <>
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
              </Event_info>
            </Event_info_container>
            <Likebtn onClick={onLikebtnClicked}>
              {' '}
              ❤️ {postState.post.likes.length}
            </Likebtn>
          </>
        ) : (
          <Loading />
        )}
      </div>

      <Comment props={params.postId} />

      <TabBar itemType='button'>
        <TabBtn name='맛집' onClick={() => settingTab(0)}>
          맛집
        </TabBtn>
        <TabBtn name='주변 카페' onClick={() => settingTab(1)}>
          주변 카페
        </TabBtn>
      </TabBar>
      <Map
        tab={tab}
        //place 로 하면 이상한 극장 이름 같은건 인식 못해서 일단 guname 으로 넣음
        //넣을 때 좀 여러 field 넣을 수 있는 거 찾아봐야함
        place={postState.post?.guname}
      />
    </div>
>>>>>>> c8615a91d5559a5e270bda720f301baaf00a4828
  );
}

export default Auth(PostPage, null);
