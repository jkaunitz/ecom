import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import headerNavbar from './headernavBarReducer';
import user from './userReducer';

const rootReducer = combineReducers({
  form,
  headerNavbar,
  user
});

export default rootReducer;