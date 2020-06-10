import { GET_REPLIES, ADD_REPLY, REPLY_ERROR } from '../actions/types';

const initialState = {
  replies: [],
  loading: true,
  error: {}
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_REPLIES:
      return {
        ...state,
        replies: payload,
        loading: false
      };
    case ADD_REPLY:
      return {
        ...state,
        replies: [payload, ...state.replies],
        loading: false
      };
    case REPLY_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    default:
      return state;
  }
}
