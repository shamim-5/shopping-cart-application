import { CINCREMENT, CDECREMENT } from "./actionTypes";

export const canonIncrement = (value) => {
  return {
    type: CINCREMENT,
    payload: value,
  };
};
export const canonDecrement = (value) => {
  return {
    type: CDECREMENT,
    payload: value,
  };
};
