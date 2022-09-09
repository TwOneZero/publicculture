import { ADD_COMMENT, GET_COMMENTS } from '../_actions/types';

const initialState = [];

export default function getcompleteState(state = initialState, action) {
  switch (action.type) {
    case ADD_COMMENT:
      const newComment = {
        name: action.payload.name,
        body: action.payload.info.body,
        createdAt: action.payload.info.createdAt,
      };
      return [...state, newComment];
    case GET_COMMENTS:
      return action.payload.allComments;
    default:
      return state;
  }
}
