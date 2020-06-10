import axios from 'axios';
import {
  GET_COMMENTS,
  LIKE_COMMENT,
  UNLIKE_COMMENT,
  COMMENT_ERROR
} from './types';
import { setAlert } from './alert';

// Get comments
export const getComments = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/comments');

    dispatch({
      type: GET_COMMENTS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: COMMENT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Like comment
export const addLike = (id) => async (dispatch) => {
  try {
    const res = await axios.put(`/api/comments/like/${id}`);

    dispatch({
      type: LIKE_COMMENT,
      payload: { id }
    });

    dispatch(setAlert('You like the comment', 'success'));
  } catch (err) {
    dispatch({
      type: COMMENT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Unlike comment
export const addUnlike = (id) => async (dispatch) => {
  try {
    const res = await axios.put(`/api/comments/unlike/${id}`);

    dispatch({
      type: UNLIKE_COMMENT,
      payload: { id }
    });

    dispatch(setAlert('You dislike the comment', 'success'));
  } catch (err) {
    dispatch({
      type: COMMENT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
