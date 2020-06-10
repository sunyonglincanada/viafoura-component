import {
  GET_COMMENTS,
  LIKE_COMMENT,
  UNLIKE_COMMENT,
  COMMENT_ERROR
} from '../actions/types';

const initialState = {
  comments: [],
  loading: true,
  error: {}
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_COMMENTS:
      return {
        ...state,
        comments: payload,
        loading: false
      };
    case LIKE_COMMENT:
      return {
        ...state,
        comments: state.comments.map((comment) =>
          comment._id === payload.id
            ? { ...comment, likes: (Number(comment.likes) + 1).toString() }
            : comment
        ),
        loading: false
      };
    case UNLIKE_COMMENT:
      return {
        ...state,
        comments: state.comments.map((comment) =>
          comment._id === payload.id
            ? { ...comment, unlike: (Number(comment.unlike) + 1).toString() }
            : comment
        ),
        loading: false
      };
    case COMMENT_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    default:
      return state;
  }
}
