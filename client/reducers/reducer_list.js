import { ADD_TO_LIST } from '../constants/ActionTypes';

export function list_reducer(state = { data: [] }, action) {
  switch (action.type) {
    case ADD_TO_LIST:
      return Object.assign({}, state, {data: [...state.data, action.data]});
    default:
      return state;
  }
}
