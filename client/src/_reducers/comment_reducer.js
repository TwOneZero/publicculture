import { ADD_COMMENT, GET_COMMENTS, DELETE_COMMENT } from '../_actions/types';

const initialState = [];

export default function getcompleteState(state = initialState, action) {
  switch (action.type) {
    case ADD_COMMENT:
      const newComment = {
        commentId: action.payload.info._id,
        name: action.payload.name,
        body: action.payload.info.body,
        createdAt: action.payload.info.createdAt,
      };
      return [...state, newComment];
    case GET_COMMENTS:
      return action.payload.allComments;
    case DELETE_COMMENT:
      const commentId = action.payload.updatedComment._id;
      return state.filter(
        (comment) => String(comment.commentId) !== String(commentId)
      );
    default:
      return state;
  }
}
