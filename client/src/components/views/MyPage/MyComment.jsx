import React, { useEffect, useState } from "react";
import axios from "axios";

import Loading from "../Loading/Loading";
import {
  CommentArea,
  CommentBox,
  Comments_container,
  Comment_date,
<<<<<<< HEAD
  CommentHeader,
} from "../Comment/TestCommentElements.js";
import { useDispatch, useSelector } from "react-redux";
import { getMyComments } from "../../../_actions/comment_action";
=======
} from '../Comment/TestCommentElements.js';
import { CommentWrapper } from './MypageElements';
import { useDispatch, useSelector } from 'react-redux';
import { getMyComments } from '../../../_actions/comment_action';
>>>>>>> 5d9b6a34407a10123e63fb8c7f5a718c4e4dbf2a

function MyComment() {
  const dispatch = useDispatch();
  const commentState = useSelector((state) => state.comment);

  useEffect(() => {
    dispatch(getMyComments())
      .then((res) => {
        if (res.payload.success) {
          console.log(res.payload);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }, [dispatch]);

  return (
<<<<<<< HEAD
    <div>
      <CommentArea>
        <CommentHeader>내가 쓴 댓글</CommentHeader>
        {commentState ? (
          commentState.map((comment, idx) => {
            return (
              <CommentBox>
                <Comments_container key={idx}>
                  <a href={`/post/${comment.post}`}>{comment.body}</a>
                  <Comment_date>{comment.createdAt}</Comment_date>
                </Comments_container>
              </CommentBox>
            );
          })
        ) : (
          <Loading />
        )}
      </CommentArea>
    </div>
=======
    <CommentWrapper>
      {commentState ? (
        commentState.map((comment, idx) => {
          return (
            <Comments_container key={idx}>
              <a href={`/post/${comment.post}`}>{comment.body}</a>
              <Comment_date>{comment.createdAt}</Comment_date>
            </Comments_container>
          );
        })
      ) : (
        <Loading />
      )}
    </CommentWrapper>
>>>>>>> 5d9b6a34407a10123e63fb8c7f5a718c4e4dbf2a
  );
}

export default MyComment;
