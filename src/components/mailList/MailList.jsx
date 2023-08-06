import React from "react";
import "./mailList.css";

const MailList = () => {
  return (
    <div className="mailList">
      <h1 className="mailTitle">Save time, save money!</h1>
      <span className="mailDesc">
        Sign up and we'll send the best deals to you
      </span>
      <div className="mailInputContainer">
        <input type="text" placeholder="Your email address" className="mailInput"></input>
        <button type="submit" className="mailInputBtn">Subscribe</button>
      </div>
    </div>
  );
};

export default MailList;
