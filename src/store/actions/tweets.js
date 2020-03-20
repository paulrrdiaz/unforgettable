import * as API from "api/tweets";

export const Types = {
  GET_TWEETS: "twitter/get_tweets",
  GET_TWEETS_SUCCESS: "twitter/get_tweets_success",
  GET_TWEETS_FAILED: "twitter/get_tweets_failed",
};

export const getTweetsSuccess = tweets => ({
  type: Types.GET_TWEETS_SUCCESS,
  payload: {
    tweets,
  },
});

export const getTweetsFailed = () => ({
  type: Types.GET_TWEETS_FAILED,
});

export const getTweets = () => {
  return dispatch => {
    API.getTweets()
      .then(({ data }) => {
        dispatch(getTweetsSuccess(data));
      })
      .catch(error => {
        dispatch(getTweetsFailed());
        console.error(error);
      });
  };
};
