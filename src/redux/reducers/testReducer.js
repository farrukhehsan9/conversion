import { EVALUATE, ADD_TO_RECORDS, CURRENT_ANSWER } from "../actions/constants";

const initialState = {
  currentAnswer: "",
  currentAnswerObj: {},
  records: []
};

const testReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case EVALUATE:
      return {
        ...state,
        answer: payload
      };
    case CURRENT_ANSWER:
      return {
        ...state,
        currentAnswerObj: payload.currentAnswerObj,
        currentAnswer: payload.currentAnswer
      };
    case ADD_TO_RECORDS:
      return {
        ...state,
        records: state.records.concat(state.currentAnswerObj)
      };
    default:
      return state;
  }
};

export default testReducer;
