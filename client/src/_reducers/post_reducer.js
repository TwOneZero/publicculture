import {
  GET_POST,
  SEARCH_POST,
  DETAIL_POST,
  LIKE_POST,
  MY_LIKED,
  GET_COUNT,
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
    case MY_LIKED:
      return { ...state, myLikedPost: action.payload };
    case GET_COUNT:
      return { ...state, getCount: action.payload };
    default:
      return state;
  }
}
