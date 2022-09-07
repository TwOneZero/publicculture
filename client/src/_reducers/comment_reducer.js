import { ADD_COMMENT, GET_COMMENTS } from '../_actions/types';

const initialState = [];

export default function getcompleteState(state = initialState, action) {
  switch (action.type) {
    case ADD_COMMENT:
      return { ...state, addComment: action.payload };
    case GET_COMMENTS:
      return { ...state, getComments: action.payload };
    default:
      return state;
  }
}
