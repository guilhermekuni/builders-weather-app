import { combineReducers } from 'redux';

import location from './location/reducer';
import loading from './loading/reducer';

export default combineReducers({
  location,
  loading,
});
