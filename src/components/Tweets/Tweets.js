import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getTweets } from "store/actions/tweets";
import { getTotalRequest } from "store/actions/covid19";

const TweetsComponent = ({ getTotalRequest, getTweets, tweets = [], total }) => {
  useEffect(() => {
    getTotalRequest();
    getTweets();
  }, []);

  return (
    <div>
      <div>
        <h2>TOTAL CASES {total.cases}</h2>
      </div>
      <ul>
        {tweets.map(tweet => (
          <li key={tweet.id}>{tweet.text}</li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = ({ tweets: { tweetsPerCountry }, covid19: { total } }) => ({
  tweets: tweetsPerCountry,
  total,
});

export default connect(mapStateToProps, { getTweets, getTotalRequest })(TweetsComponent);
