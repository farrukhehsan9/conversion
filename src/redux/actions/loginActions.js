import { LOGIN } from "./constants";

export const login = (email, password, history) => dispatch => {
  if (!email) {
    return;
  }
  if (email.toString().toLowerCase() !== "admin") {
    return;
  }

  if (!password) {
    return;
  }

  if (password.toString().toLowerCase() !== "pass") {
    return;
  }

  dispatch({
    type: LOGIN
  });

  history.push("/test");

  return;
};
