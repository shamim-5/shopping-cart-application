import { CDECREMENT, CINCREMENT } from "./actionTypes";

const initialState = {
  quantity: 0,
  price: 0,
};

const counterCanonReducer = (state = initialState, action) => {
  switch (action.type) {
    case CINCREMENT:
      return {
        ...state,
        quantity: state.quantity + 1,
        price: state.price + action.payload,
      };
    case CDECREMENT:
      return {
        ...state,
        quantity: state.quantity - 1,
        price: state.price - action.payload,
      };

    default:
      return state;
  }
};

export default counterCanonReducer;
