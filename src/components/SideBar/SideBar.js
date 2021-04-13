import React from "react";
import "./SideBar.scss";
import Option from "./Option";
import TwitterIcon from "@material-ui/icons/Twitter";
import Home from "@material-ui/icons/Home";
import Notifications from "@material-ui/icons/NotificationsNone";
import Explore from "@material-ui/icons/ExploreOutlined";
import Mail from "@material-ui/icons/MailOutlineOutlined";
import Bookmark from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import Profile from "@material-ui/icons/PermIdentity";
import More from "@material-ui/icons/MoreHoriz";
import { Button } from "@material-ui/core";

function SideBar() {
  return (
    <div className="sidebar">
      <TwitterIcon className="twitter-logo" />
      <Option active Icon={Home} text="Home" />
      <Option Icon={Explore} text="Explore" />
      <Option Icon={Notifications} text="Notifications" />
      <Option Icon={Mail} text="Message" />
      <Option Icon={Bookmark} text="Bookmarks" />
      <Option Icon={ListAltIcon} text="Lists" />
      <Option Icon={Profile} text="Profile" />
      <Option Icon={More} text="More" />

      <Button variant="outlined" className="tweet-button" fullWidth>
        Tweet
      </Button>
    </div>
  );
}

export default SideBar;
