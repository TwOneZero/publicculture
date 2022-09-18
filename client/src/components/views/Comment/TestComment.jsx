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
}) => {
  return (
    <Comments_container id={commentId}>
      <Comment_username>{name}</Comment_username>
      <p>{body}</p>
      <Comment_date>{createdAt}</Comment_date>
      <Delete onClick={clickFunc}>삭제</Delete>
    </Comments_container>
  );
};
