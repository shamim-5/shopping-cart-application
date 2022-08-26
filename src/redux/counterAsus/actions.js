import { AINCREMENT, ADECREMENT } from "./actionTypes";

export const asusIncrement = (value) => {
  return {
    type: AINCREMENT,
    payload: value,
  };
};
export const asusDecrement = (value) => {
  return {
    type: ADECREMENT,
    payload: value,
  };
};
