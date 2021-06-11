import {
  ADD_USER,
  EDIT_USER,
  SEARCH_KEYWORD,
  UPDATE_USER,
  USER_DELETE,
} from "../reducers/constants/userConstant";
export const addUserAction = (user) => {
  return {
    type: ADD_USER,
    payload: user,
  };
};
export const editUserAction = (user) => {
  return {
    type: EDIT_USER,
    payload: user,
  };
};
export const updateUserAction = (user) => {
  return {
    type: UPDATE_USER,
    payload: user,
  };
};
export const searchAction = (keyword) => {
  return {
    type: SEARCH_KEYWORD,
    payload: keyword,
  };
};
export const deleteAction = (idUser) => {
  return {
    type: USER_DELETE,
    payload: idUser,
  };
};
