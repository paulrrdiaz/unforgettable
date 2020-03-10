import { Types } from "store/actions/counter";

const INITIAL_STATE = {
  currentNumber: 0,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.ON_INCREMENT:
      return {
        ...state,
        currentNumber: state.currentNumber + action.payload.amount,
      };
    case Types.ON_DECREMENT:
      return {
        ...state,
        currentNumber: state.currentNumber - action.payload.amount,
      };
    default:
      return state;
  }
};
