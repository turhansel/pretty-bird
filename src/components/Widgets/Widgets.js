import React from "react";
import "./Widgets.scss";
import SearchIcon from "@material-ui/icons/Search";

import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";

function Widgets() {
  return (
    <div className="widgets">
      <div className="input">
        <SearchIcon className="search-icon" />
        <input placeholder="Search Twitter" type="text" />
      </div>
      <div className="container">
        <h2>What's happening</h2>

        <TwitterTweetEmbed tweetId={"1367102755106660354"} />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="rickygervais"
          options={{ height: 400 }}
        />
        <TwitterShareButton
          url={"https://twitter.com/ulanturbo"}
          options={{ text: "#reactjs is awesome", via: "ulanturbo" }}
        />
      </div>
    </div>
  );
}

export default Widgets;
