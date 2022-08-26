import { DECREMENT, INCREMENT } from "./actionTypes";

const initialState = {
  quantity: 0,
  price: 0,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        quantity: state.quantity + 1,
        price: state.price + action.payload,
      };
    case DECREMENT:
      return {
        ...state,
        quantity: state.quantity - 1,
        price: state.price - action.payload,
      };

    default:
      return state;
  }
};

export default counterReducer;
