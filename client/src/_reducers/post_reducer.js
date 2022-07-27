import {
  GET_POST,
  SEARCH_POST,
  DETAIL_POST,
  LIKE_POST,
} from '../_actions/types';

const initialState = null;

export default function getcompleteState(state = initialState, action) {
  switch (action.type) {
    case GET_POST:
      return { ...state, getallSuccess: action.payload };
    case SEARCH_POST:
      return { ...state, search: action.payload };
    case DETAIL_POST:
      return { ...state, getDetailSuccess: action.payload };
    case LIKE_POST:
      return { ...state, likePost: action.payload };
    default:
      return state;
  }
}
