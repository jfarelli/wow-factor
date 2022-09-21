import "./Footer.css";
import React from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer">
      <div className="personContainer">
        <p className="name">Jordan Farelli</p>
        <a
          className="linkedinAnchor"
          href="https://www.linkedin.com/in/jordan-farelli/"
        >
          <AiFillLinkedin />
        </a>
        <a className="githubAnchor" href="https://github.com/jfarelli">
          <AiFillGithub />
        </a>
      </div>
    </div>
  );
};

export default Footer;
