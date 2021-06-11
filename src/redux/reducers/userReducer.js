import {
  ADD_USER,
  EDIT_USER,
  SEARCH_KEYWORD,
  UPDATE_USER,
  USER_DELETE,
} from "./constants/userConstant";

const initialState = {
  userList: [],
  userEdit: {},
  keyword: "",
};

const userReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_USER: {
      let { userList } = state;
      const user = { ...payload, id: Math.random().toString() };
      userList = [...userList, user]; // tạo mảng mới để tránh tham chiếu
      //   userList.push(payload);
      state.userList = userList;
      return { ...state };
    }
    case EDIT_USER: {
      //c1
      return { ...state, userEdit: payload }; // ...state là copy state đó ra
      //c2
      state.userEdit = payload;
      return { ...state };
    }
    case UPDATE_USER: {
      const { userList } = state;
      const newUserList = [...userList];
      const index = newUserList.findIndex((user) => user.id === payload.id);
      if (index !== -1) {
        newUserList[index] = payload;
        return { ...state, userList: newUserList };
      }
    }
    case SEARCH_KEYWORD: {
      return { ...state, keyword: payload }; //payload: giá trị gửi lên
    }
    case USER_DELETE: {
      const { userList } = state;
      const newUserList = [...userList];
      const index = newUserList.findIndex((user) => user.id === payload.id);
      if (index !== -1) {
        newUserList.splice(index, 1);
        return { ...state, userList: newUserList };
      }
    }
    default:
      return state;
  }
};
export default userReducer;
