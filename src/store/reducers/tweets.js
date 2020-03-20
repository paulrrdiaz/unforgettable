import produce from "immer";
import { Types } from "store/actions/tweets";

const INITIAL_STATE = {
  tweetsPerCountry: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.GET_TWEETS_SUCCESS: {
      const { tweets } = action.payload;
      return produce(state, draftState => {
        draftState.tweetsPerCountry = tweets;
      });
    }
    default:
      return state;
  }
};
