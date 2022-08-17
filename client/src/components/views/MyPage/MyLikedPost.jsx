import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"; //내 액션을 한 번에 모아서 처리. 이 기능이
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Auth from "../../../hoc/auth";
import { mypageLiked, likePost } from "../../../_actions/post_action";
import axios from "axios";

const PostingContainer = styled.div`
  margin: 7%;
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const PostingInfo = styled.div`
  width: 500px;
  //height: 600px;
  display: flex;
  flex-direction: column;
  padding: 50px;
  //background-color: yellow;
  align-items: center;
  font-family: "Noto Sans KR", sans-serif;
  font-size: 16px;
`;

const IMG = styled.img`
  width: 300px;
  height: 400px;
  object-fit: fill;
  margin: 10px;
`;

const Temp01 = styled.div`
  color: black;
`;

function MyLikedPost() {
  const dispatch = useDispatch();
  const [postings, setPostings] = useState([]);
  const onPostingClicked = () => {};

  useEffect(() => {
    dispatch(mypageLiked()).then((res) => {
    setPostings(res.payload.myFavPost.map((post) => post));
      console.log(res.payload);
    });
  }, [dispatch]);

  // const likeButton = (id) => {
  //   let postId = id;
  //   console.log(postId);

  //   dispatch(likePost(postId))
  //     .then((res) => {
  //       if (res.payload.isAuth === false) {
  //         alert(res.payload.message);
  //       }
  //       if (res.payload) {
  //         console.log(res.data.payload);
  //       }
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  return (
    <div>
      <PostingContainer>
        {postings.map((src, idx) => (
          <a href={`/post/${src._id}`}>
            <IMG key={idx} src={src.main_img} />
          </a>
        ))}

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
    </div>
  );
}
export default MyLikedPost;