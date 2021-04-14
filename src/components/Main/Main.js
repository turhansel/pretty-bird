import React, { useState, useEffect } from "react";
import "./Main.scss";
import TweetsContainer from "./TweetsContainer";
import Posts from "./Posts";
import database from "../../Firebase";
import FlipMove from "react-flip-move";

function Main() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    database
      .collection("posts")
      .onSnapshot((snapshot) =>
        setPosts(snapshot.docs.map((doc) => doc.data()))
      );
  }, []);

  return (
    <div className="main">
      <div className="main-header">
        <h2>Home</h2>
      </div>

      <TweetsContainer />

      <FlipMove>
        {posts.map((post) => (
          <Posts
            key={post.text}
            displayName={post.displayName}
            username={post.username}
            verified={post.verified}
            text={post.text}
            avatar={post.avatar}
            image={post.image}
          />
        ))}
      </FlipMove>
    </div>
  );
}

export default Main;
