import React from "react";
import "./Main.scss";
import TweetsContainer from "./TweetsContainer";
import Posts from "./Posts";
function Main() {
  return (
    <div className="main">
      <div className="main-header">
        <h2>Home</h2>
      </div>
      <TweetsContainer />
      <Posts />
      <Posts />
      <Posts />
      <Posts />
      <Posts />
      <Posts />
    </div>
  );
}

export default Main;
