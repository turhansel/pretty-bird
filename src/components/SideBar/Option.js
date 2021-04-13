import React from "react";
import "./SideBar.scss";
function Option({ text, Icon, active }) {
  return (
    <div className={`option ${active ? "option-active" : ""}`}>
      <Icon />
      <h2>{text}</h2>
    </div>
  );
}

export default Option;
