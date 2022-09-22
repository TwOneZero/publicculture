import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"; //내 액션을 한 번에 모아서 처리. 이 기능이
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Auth from "../../../hoc/auth";
import { mypageLiked, likePost } from "../../../_actions/post_action";
import axios from "axios";

import {
  MyLikedPostContainer,
  MyLikedPostTitle,
  PostingContainer,
  PostingInfo,
  IMG,
  Title,
} from "./MypageElements";
import Loading from "../Loading/Loading";

function MyLikedPost() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [postings, setPostings] = useState([]);
  const onPostingClicked = () => {};

  useEffect(() => {
    dispatch(mypageLiked()).then((res) => {
      setLoading(true);
      setPostings(res.payload.myFavPost.map((post) => post));
      console.log(res.payload);
    });
    setLoading(false);
  }, [dispatch]);

  const likeButton = (id) => {
    let postId = id;
    console.log(postId);

    dispatch(likePost(postId))
      .then((res) => {
        if (res.payload.isAuth === false) {
          alert(res.payload.message);
        }
        if (res.payload) {
          console.log(res.data.payload);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <MyLikedPostContainer>
      <MyLikedPostTitle> 나의 관심 행사 </MyLikedPostTitle>
      <PostingContainer>
        {loading ? (
          postings.map((src, idx) => (
            <div key={idx}>
              <PostingInfo>
                <a href={`/post/${src._id}`}>
                  <IMG key={idx} src={src.main_img} />
                </a>
                <Title>{src.title}</Title>
                <div style={{ fontWeight: "500", marginBottom: "3px" }}>
                  {src.codename}
                </div>
                <div style={{ fontSize: "14px" }}>{src.date}</div>
                <div>{src.place}</div>
                <div style={{ marginTop: "10px" }}>❤️ {src.likes.length}</div>
              </PostingInfo>
            </div>
          ))
        ) : (
          <Loading />
        )}

        {/* {resData.map((posting, index) => (
          <div key={index}>
            <PostingInfo>
              <a href={`/post/${posting._id}`}>
                <ImgContainer
                  src={posting.main_img}
                  alt="images"
                  onClick={onPostingClicked}
                />
              </a>
              <p>{posting._id}</p>
              <div
                style={{
                  fontWeight: "700",
                  fontSize: "19px",
                  marginBottom: "5px",
                }}
              >
                {posting.title}
              </div>
              <div style={{ fontWeight: "500", marginBottom: "3px" }}>
                {posting.codename}
              </div>
              <div style={{ fontSize: "14px" }}>{posting.date}</div>
              <div>{posting.place}</div>
              <button
                onClick={() => {
                  likeButton(posting._id);
                }}
              >
                좋아요{posting.likes.length}
              </button>
            </PostingInfo>
          </div>
        ))} */}
      </PostingContainer>
    </MyLikedPostContainer>
  );
}
export default MyLikedPost;
