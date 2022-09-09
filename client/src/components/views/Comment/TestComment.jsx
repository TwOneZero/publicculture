import React from 'react';

export const TestComment = ({ name, body, createdAt }) => {
  return (
    <li>
      <p>{name}</p>
      <p>{body}</p>
      <p>{createdAt}</p>
      <button>DEL</button>
    </li>
  );
};
