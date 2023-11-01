import { BASE_URL } from './axios';
import {
  GET_POST,
  SEARCH_POST,
  DETAIL_POST,
  LIKE_POST,
  MY_LIKED,
  GET_COUNT,
  GET_POSTS_BYDAY,
  SORTED_POST,
} from './types';

//getAllpost
export function getRandompost() {
  const request = BASE_URL.get('/api/posts', { withCredentials: true }).then(
    (res) => res.data
  );

  return {
    type: GET_POST,
    payload: request,
  };
}

//search
export function searchPost(search) {
  const request = BASE_URL.get(`/api/posts/search?search=${search}`, {
    withCredentials: true,
  }).then((res) => res.data);
  return {
    type: SEARCH_POST,
    payload: request,
  };
}

//정렬 기능
export function sortedPost(search, mode) {
  const request = BASE_URL.get(
    `/api/posts/sorting?search=${search}&mode=${mode}`,
    {
      withCredentials: true,
    }
  ).then((res) => res.data);
  return {
    type: SORTED_POST,
    payload: request,
  };
}

//details
export function getPostDetails(id) {
  const request = BASE_URL.get(`/api/posts/${id}`, {
    withCredentials: true,
  }).then((res) => res.data);

  return {
    type: DETAIL_POST,
    payload: request,
  };
}

// mypageLiked
export function mypageLiked() {
  const request = BASE_URL.get('/api/posts/liked', {
    withCredentials: true,
  }).then((res) => res.data);

  return {
    type: MY_LIKED,
    payload: request,
  };
}
//likepost
export function likePost(id) {
  const request = BASE_URL.patch(`/api/posts/like/${id}`, null, {
    withCredentials: true,
  }).then((res) => res.data);

  return {
    type: LIKE_POST,
    payload: request,
  };
}

export function getPostDateCount(month) {
  const request = BASE_URL.post('/api/getCount', { month }).then(
    (res) => res.data
  );

  return {
    type: GET_COUNT,
    payload: request,
  };
}

export function getPostbyDay(month, day) {
  const request = BASE_URL.post('/api/posts/byday', { month, day }).then(
    (res) => res.data
  );

  return {
    type: GET_POSTS_BYDAY,
    payload: request,
  };
}
