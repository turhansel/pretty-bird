import React, { useState } from "react";
import "./Main.scss";
import { Avatar, Button } from "@material-ui/core";
import database from "../../Firebase";

function TweetsContainer() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();

    database.collection("posts").add({
      displayName: "Turhan Sel",
      username: "ulanturbo",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar: "./profile.jpg",
    });

    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <div className="tweet-box">
      <form>
        <div className="input-box">
          <Avatar src="./profile.jpg" />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's happening??"
            type="text"
          />
        </div>
        <input
          onChange={(e) => setTweetImage(e.target.value)}
          value={tweetImage}
          className="input-image"
          placeholder="Optional: Enter image URL?"
          type="text"
        />

        <Button type="submit" className="btn" onClick={sendTweet}>
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetsContainer;
