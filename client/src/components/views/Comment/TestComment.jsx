import React from 'react';

import {
  Comments_container,
  Comment_username,
  Comment_date,
  Delete,
} from './TestCommentElements';

export const TestComment = ({
  name,
  body,
  createdAt,
  clickFunc,
  commentId,
  user,
}) => {
  if (user.name === name) {
    return (
      <Comments_container id={commentId}>
        <Comment_username>{name}</Comment_username>
        <p>{body}</p>
        <Comment_date>{createdAt}</Comment_date>
        <Delete onClick={clickFunc}>삭제</Delete>
      </Comments_container>
    );
  } else {
    return (
      <Comments_container id={commentId}>
        <Comment_username>{name}</Comment_username>
        <p>{body}</p>
        <Comment_date>{createdAt}</Comment_date>
      </Comments_container>
    );
  }
};
