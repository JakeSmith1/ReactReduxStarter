import * as type from '../constants/ActionTypes';

export const addToList = (data) => {
  return {
    type: type.ADD_TO_LIST,
    data
  }
}

export const getList = (text) => {
  return {
    type: "GET_LIST"
  }
}
