import React, { useEffect, useState } from "react";
import axios from "axios";

import Loading from "../Loading/Loading";
import {
  CommentArea,
  CommentBox,
  Comments_container,
  Comment_date,
  CommentHeader,
  Comments_content,
} from "../Comment/TestCommentElements.js";
import { CommentWrapper } from "./MypageElements";
import { useDispatch, useSelector } from "react-redux";
import { getMyComments } from "../../../_actions/comment_action";

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
    <div>
      <CommentArea>
        <CommentHeader>내가 쓴 댓글</CommentHeader>
        {commentState ? (
          commentState.map((comment, idx) => {
            return (
              <CommentBox>
                <Comments_container key={idx}>
                  <Comments_content
                    href={`/post/${comment.post}`}>
                      {comment.body}
                  </Comments_content>
                  {/* <a href={`/post/${comment.post}`}>{comment.body}</a> */}
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
  );
}

export default MyComment;
