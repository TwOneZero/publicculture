import axios from "axios";
import {
  GET_POST,
  SEARCH_POST,
  DETAIL_POST,
  LIKE_POST,
  MY_LIKED,
  ADD_COMMENT,
  GET_COMMENTS,
} from "./types";

//getAllpost
export function getRandompost() {
  const request = axios.get("/api/posts").then((res) => res.data);

  return {
    type: GET_POST,
    payload: request,
  };
}

//search
export function searchPost(search) {
  const request = axios
    .post(`/api/searchPost?search=${search}`)
    .then((res) => res.data);
  return {
    type: SEARCH_POST,
    payload: request,
  };
}

//details
export function getPostDetails(id) {
  const request = axios.get(`/api/posts/${id}`).then((res) => res.data);

  return {
    type: DETAIL_POST,
    payload: request,
  };
}

//likepost
export function likePost(id) {
  const request = axios.patch(`/api/likePost/${id}`).then((res) => res.data);

  return {
    type: LIKE_POST,
    payload: request,
  };
}

// mypageLiked
export function mypageLiked() {
  const request = axios.get("/api/likedPost").then((res) => res.data);

  return {
    type: MY_LIKED,
    payload: request,
  };
}

//addcomment
  export function addComment(postId ,body) {
    const request = axios
    .post(`/api/comment/${postId}`, body)
    .then((res) => res.data);
  return {
    type: ADD_COMMENT,
    payload: request,
  };
}

// getcomment
export function getComments(postId){
  const request = axios.get(`/api/getComment/${postId}`).then((res) => res.data);

  return {
    type: GET_COMMENTS,
    payload: request,
  };
}