import { EVALUATE, ADD_TO_RECORDS, CURRENT_ANSWER, LOGIN } from "../actions/constants";

const initialState = {
  isAuthenticated: false
};

const testReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOGIN:
      return {
        ...state,
        isAuthenticated: true
      };

    default:
      return state;
  }
};

export default testReducer;
