import { ADECREMENT, AINCREMENT } from "./actionTypes";

const initialState = {
  quantity: 0,
  price: 0,
};

const counterAsusReducer = (state = initialState, action) => {
  switch (action.type) {
    case AINCREMENT:
      return {
        ...state,
        quantity: state.quantity + 1,
        price: state.price + action.payload,
      };
    case ADECREMENT:
      return {
        ...state,
        quantity: state.quantity - 1,
        price: state.price - action.payload,
      };

    default:
      return state;
  }
};

export default counterAsusReducer;
