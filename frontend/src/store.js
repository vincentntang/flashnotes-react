import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import isEmpty from "./validation/is-empty";

const middleware = [thunk];

const initialState = {
  isAuthenticated: false,
  user: {}
};

function authReducer(state = initialState, action) {
  console.log(action, "action");
  console.log(state, "state");
  switch (action.type) {
    case "SET_CURRENT_USER":
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload), // b/c payload can't be empty, needs error checking
        user: action.payload
      };
    default:
      return state;
  }
}

const initialStoreState = {};

const store = createStore(
  authReducer,
  initialStoreState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
export default store;
