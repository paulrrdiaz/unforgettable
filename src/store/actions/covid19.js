export const Types = {
  GET_TOTAL_REQUEST: "covid/get_total_request",
  GET_TOTAL_SUCCESS: "covid/get_total_success",
};

export const getTotalRequest = () => ({
  type: Types.GET_TOTAL_REQUEST,
});

export const getTotalSuccess = total => ({
  type: Types.GET_TOTAL_SUCCESS,
  payload: {
    total,
  },
});
