import React from "react";
import "./Main.scss";
import TweetsContainer from "./TweetsContainer";

function Main() {
  return (
    <div className="main">
      <div className="main-header">
        <h2>Home</h2>
      </div>
      <TweetsContainer />
    </div>
  );
}

export default Main;
