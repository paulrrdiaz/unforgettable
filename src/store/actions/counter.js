export const Types = {
  ON_INCREMENT: "ON_INCREMENT",
  ON_DECREMENT: "ON_DECREMENT",
};

export const onIncrement = amount => {
  return {
    type: Types.ON_INCREMENT,
    payload: {
      amount,
    },
  };
};

export const onDecrement = amount => {
  return {
    type: Types.ON_DECREMENT,
    payload: {
      amount,
    },
  };
};
