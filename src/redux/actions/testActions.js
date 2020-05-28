import { ADD_TO_RECORDS, CURRENT_ANSWER } from "./constants";

const FAHRENHEIT_TO_KELVIN = "fahrenheit_kelvin";
const KELVIN_TO_FAHRENHEIT = "kelvin_fahrenheit";
const FAHRENHEIT_TO_RANKINE = "fahrenheit_rankine";
const RANKINE_TO_FAHRENHEIT = "rankine_fahrenheit";
const CUPS_TO_LITRES = "cups_to_litres";
const LITRES_TO_CUPS = "litres_to_cups";
const GALLONS_TO_KELVIN = "gallons_kelvin";

export const evaluate = (inputValue, measure, targetMeasure) => {
  const value = [measure, targetMeasure].join("_");
  let answer = null;
  switch (value) {
    case FAHRENHEIT_TO_KELVIN:
      answer = ((inputValue - 32) * 5) / 9 + 273.15;
      return parseFloat(answer).toFixed(10);
    case KELVIN_TO_FAHRENHEIT:
      answer = ((inputValue - 273.15) * 9) / 5 + 32;
      return parseFloat(answer).toFixed(10);
    case FAHRENHEIT_TO_RANKINE:
      answer = inputValue + 459.67;
      return parseFloat(answer).toFixed(10);
    case RANKINE_TO_FAHRENHEIT:
      answer = inputValue - 459.67;
      return parseFloat(answer).toFixed(10);
    case CUPS_TO_LITRES:
      answer = inputValue / 4.227;
      return parseFloat(answer).toFixed(10);
    case LITRES_TO_CUPS:
      answer = inputValue * 4.227;
      return parseFloat(answer).toFixed(10);
    default:
      answer = "invalid";
      return answer;
  }
};

export const validate = (answer, studentResponse) => {
  const responseInFloat = parseFloat(studentResponse).toFixed(10);
  if (answer !== responseInFloat) {
    return "incorrect";
  }

  return "correct";
};

export const inference = (
  inputValue,
  measure,
  targetMeasure,
  studentResponse
) => dispatch => {
  const answer = evaluate(inputValue, measure, targetMeasure);

  const result = validate(answer, studentResponse);

  const currentAnswerObj = {
    inputValue,
    measure,
    targetMeasure,
    studentResponse,
    result
  };

  dispatch({
    type: CURRENT_ANSWER,
    payload: {
      currentAnswerObj,
      currentAnswer: result
    }
  });

  return result;
};

export const addToRecord = () => dispatch => {
  dispatch({
    type: ADD_TO_RECORDS
  });
  return;
};
