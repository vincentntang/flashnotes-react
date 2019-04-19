import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

const middleware = [thunk];

const initialState = {};

function authReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_CURRENT_USER":
      console.log("I ran");
      return {};
    default:
      return state;
  }
}

const store = createStore(
  authReducer,
  {},
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
export default store;
