import { combineReducers } from 'redux';
import comment from './comment';
import reply from './reply';
import alert from './alert';

export default combineReducers({
  comment,
  reply,
  alert
});
