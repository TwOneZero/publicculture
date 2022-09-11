import React from 'react';

export const TestComment = ({
  name,
  body,
  createdAt,
  clickFunc,
  commentId,
}) => {
  return (
    <li id={commentId}>
      <p>{name}</p>
      <p>{body}</p>
      <p>{createdAt}</p>
      <button onClick={clickFunc}>DEL</button>
    </li>
  );
};
