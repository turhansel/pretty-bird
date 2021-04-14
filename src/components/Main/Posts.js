import React, { forwardRef } from "react";
import "./Main.scss";
import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubble from "@material-ui/icons/ChatBubbleOutlineOutlined";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";

const Posts = forwardRef(
  ({ displayName, username, verified, text, image, avatar }, ref) => {
    return (
      <div className="posts" ref={ref}>
        <div className="avatar">
          <Avatar src={avatar} />
        </div>
        <div className="body">
          <div className="post-header">
            <div className="text">
              <h3>
                {displayName}
                <span className="post-span">
                  {verified && <VerifiedUserIcon className="verified" />} @
                  {username}
                </span>
              </h3>
            </div>
            <div className="description">
              <p>{text}</p>
            </div>
          </div>
          <img src={image} alt="" />
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
);

export default Posts;
