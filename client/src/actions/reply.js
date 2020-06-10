import axios from 'axios';
import { setAlert } from './alert';
import { GET_REPLIES, ADD_REPLY, REPLY_ERROR } from './types';

// Get replies
export const getReplies = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/replies');

    dispatch({
      type: GET_REPLIES,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: REPLY_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Add reply
export const addReply = (formData) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'Application/json'
    }
  };
  try {
    const res = await axios.post('/api/replies/', formData, config);

    dispatch({
      type: ADD_REPLY,
      payload: res.data
    });

    dispatch(setAlert('Reply Created', 'success'));
  } catch (err) {
    dispatch({
      type: REPLY_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
