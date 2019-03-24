import { combineReducers } from "redux";
import authReducer from "./authReducer";

export default function(state = {}, action) {
  switch (action.type) {
    default:
      return state;
  }
}

/*
export default combineReducers({
  auth: authReducer
});*/
