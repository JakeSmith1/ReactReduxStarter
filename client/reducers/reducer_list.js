import { ADD_TO_LIST } from '../constants/ActionTypes';

export function list_reducer(state = { list: [] }, action) {
  switch (action.type) {
    case ADD_TO_LIST:
      return Object.assign({}, state, {list: [...state.list, action.data]});
    default:
      return state;
  }
}
