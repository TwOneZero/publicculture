import { BASE_URL } from './axios';
import {
  ADD_COMMENT,
  DELETE_COMMENT,
  GET_COMMENTS,
  GET_MY_COMMENTS,
} from './types';

//addcomment
export function addComment(postId, body) {
  const request = BASE_URL.post(`/api/comment/${postId}`, body, {
    withCredentials: true,
  }).then((res) => res.data);
  return {
    type: ADD_COMMENT,
    payload: request,
  };
}

export function getMyComments() {
  const request = BASE_URL.get('api/comments', { withCredentials: true }).then(
    (res) => res.data
  );
  return {
    type: GET_MY_COMMENTS,
    payload: request,
  };
}

// getcomment
export function getComments(postId) {
  const request = BASE_URL.get(`/api/comments/${postId}`, {
    withCredentials: true,
  }).then((res) => res.data);

  return {
    type: GET_COMMENTS,
    payload: request,
  };
}

export function deleteComment(commentId, postId) {
  const request = BASE_URL.post(
    `/api/comment/delete/${commentId}/${postId}`,
    null,
    {
      withCredentials: true,
    }
  ).then((res) => res.data);
  return {
    type: DELETE_COMMENT,
    payload: request,
  };
}
