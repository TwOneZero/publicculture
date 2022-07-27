import axios from 'axios';
import { GET_POST, SEARCH_POST, DETAIL_POST, LIKE_POST } from './types';

//getAllpost
export function getAllpost() {
  const request = axios.get('/api/posts').then((res) => res.data);

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
