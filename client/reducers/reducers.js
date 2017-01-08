import { combineReducers } from 'redux';
import { list_reducer } from './reducer_list';

const rootReducer = combineReducers({
  list: list_reducer
});

export default rootReducer;
