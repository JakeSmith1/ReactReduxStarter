import * as type from '../constants/ActionTypes';

export const addToList = (text) => {
  return {
    type: type.ADD_TO_LIST,
    data: text
  }
}

export const getList = (text) => {
  return {
    type: "GET_LIST"
  }
}
