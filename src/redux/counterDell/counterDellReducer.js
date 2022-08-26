import { DDECREMENT, DINCREMENT } from "./actionTypes";

const initialState = {
  quantity: 0,
  price: 0,
};

const counterDellReducer = (state = initialState, action) => {
  switch (action.type) {
    case DINCREMENT:
      return {
        ...state,
        quantity: state.quantity + 1,
        price: state.price + action.payload,
      };
    case DDECREMENT:
      return {
        ...state,
        quantity: state.quantity - 1,
        price: state.price - action.payload,
      };

    default:
      return state;
  }
};

export default counterDellReducer;
