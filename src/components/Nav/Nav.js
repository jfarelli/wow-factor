import "./Nav.css";
import wilson from "/Users/jordanfarelli/turing/mod3/projects/wow-factor/src/assets/wilson.jpeg";
import React from "react";
import Form from "../Form/Form";

const Nav = ( ) => {
  return (
    <div className="nav-container">
			<div className="wilson-face-and-bubble-container">
      	<img src={ wilson } className="wilson-face" />
				<div className="wow-bubble">Woooooow!</div>
			</div>
			<Form />
    </div>
  );
};

export default Nav;
