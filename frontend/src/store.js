import { createStore } from "redux";

const initialState = {};

function authReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_CURRENT_USER":
      return {};
    default:
      return state;
  }
}

const store = createStore(authReducer);
export default store;
