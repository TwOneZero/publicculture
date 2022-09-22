import {
  GET_POST,
  SEARCH_POST,
  DETAIL_POST,
  LIKE_POST,
  MY_LIKED,
  GET_COUNT,
} from '../_actions/types';

const initialState = {
  posts: [],
  post: {},
};

export default function postState(state = initialState, action) {
  switch (action.type) {
    case GET_POST:
      return { posts: action.payload.posts };
    case SEARCH_POST:
      return { posts: action.payload.posts };
    case DETAIL_POST:
      return { ...state, post: action.payload.post };
    case LIKE_POST:
      if (action.payload.isAuth === false) {
        return { ...state };
      } else {
        return { ...state, post: action.payload.updatedPost };
      }
    case MY_LIKED:
      return { posts: action.payload.myFavPost };
    case GET_COUNT:
      return { ...state, getCount: action.payload };
    default:
      return state;
  }
}
