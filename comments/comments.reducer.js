import {
  ADD_COMMENT,
  REMOVE_COMMENT,
  EDIT_COMMENT,
  THUMB_UP_COMMENT,
  THUMB_DOWN_COMMENT
} from './comments.types';

const initialState = {
  comments: [],
  users: []
};

function comments(state = initialState, action) {
  switch(action.type) {
    case ADD_COMMENT:
      return Object.assign({}, state, {
        comments: [
          {
            id: action.id,
            text: action.text,
            votes: 0
          },
          ...state.comments,
        ]
        });
    case REMOVE_COMMENT:
      return Object.assign({}, state, {
        comments: state.comments.filter(comment => comment.id !== action.id)
      });
    case EDIT_COMMENT:
      return Object.assign({}, state, {
        comments: [
          ...state.comments.filter(comment => comment.id !== action.id),
          {
            id: action.id,
            text: action.text,
            votes: state.comments.find(comment => comment.id === action.id).votes
          }
        ]
      });
    case THUMB_UP_COMMENT:
      return Object.assign({}, state, {
        comments: [
          ...state.comments.filter(comment => comment.id !== action.id),
          {
            id: action.id,
            votes: state.comments.find(comment => comment.id === action.id).votes + 1
          }
        ]
      });
    case THUMB_DOWN_COMMENT:
      return Object.assign({}, state, {
        comments: [
          ...state.comments.filter(comment => comment.id !== action.id),
          {
            id: action.id,
            votes: state.comments.find(comment => comment.id === action.id).votes - 1
          }
        ]
      });
    default:
      return state;
  }
}
