import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Loading from '../Loading/Loading';
import {
  Comments_container,
  Comment_date,
} from '../Comment/TestCommentElements.js';
import { CommentWrapper } from './MypageElements';
import { useDispatch, useSelector } from 'react-redux';
import { getMyComments } from '../../../_actions/comment_action';

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
  );
}

export default MyComment;
