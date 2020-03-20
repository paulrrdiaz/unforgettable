import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getTweets } from "store/actions/tweets";

const TweetsComponent = ({ getTweets, tweets = [] }) => {
  useEffect(() => {
    getTweets();
  }, []);

  return (
    <div>
      <ul>
        {tweets.map(tweet => (
          <li key={tweet.id}>{tweet.text}</li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = ({ tweets: { tweetsPerCountry } }) => ({ tweets: tweetsPerCountry });

export default connect(mapStateToProps, { getTweets })(TweetsComponent);
