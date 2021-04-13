import React from "react";
import "./Main.scss";
import { Avatar, Button } from "@material-ui/core";

function TweetsContainer() {
  return (
    <div className="tweet-box">
      <form>
        <div className="input-box">
          <Avatar src="./profile.jpg" />
          <input placeholder="What's going on here?" type="text" />
        </div>
        <input
          className="input-image"
          placeholder="Optional: Enter image URL?"
          type="text"
        />

        <Button className="btn">Tweet</Button>
      </form>
    </div>
  );
}

export default TweetsContainer;
