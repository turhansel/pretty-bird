import React from "react";
import "./Main.scss";
import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubble from "@material-ui/icons/ChatBubbleOutlineOutlined";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";

function Posts(displayName, username, verified, text, image, avatar) {
  return (
    <div className="posts">
      <div className="avatar">
        <Avatar src="./profile.jpg" />
      </div>
      <div className="body">
        <div className="post-header">
          <div className="text">
            <h3>
              Turhan Sel
              <span className="post-span">
                <VerifiedUserIcon className="verified" /> @ulanturbo
              </span>
            </h3>
          </div>
          <div className="description">
            <p>Can you shut up? I'm trying to clone twitter</p>
          </div>
        </div>
        <img
          src="https://media.giphy.com/media/zNVab5D4EHUtO/giphy.gif"
          alt="gifmif"
        />
        <div className="footer">
          <ChatBubble fontSize="small" />
          <RepeatIcon fontSize="small" />
          <FavoriteBorderIcon fontSize="small" />
          <PublishIcon fontSize="small" />
        </div>
      </div>
    </div>
  );
}

export default Posts;
