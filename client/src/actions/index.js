import axios from "axios";

/**
 * Redux action creators
 * https://redux.js.org/basics/actions
 */

export const fetchUser = () => async dispatch => {
  const res = await axios.get("/api/current_user");
  dispatch({ type: "fetch_user", payload: res.data });
};

export const handleToken = token => async dispatch => {
  const res = axios.post("/api/stripe", token);
  dispatch({ type: "fetch_user", payload: res.data });
};

export const submitSurvey = (values, history) => async dispatch => {
  const res = await axios.post("/api/surveys", values);

  history.push("/surveys");
  dispatch({ type: "fetch_user", payload: res.data });
};
