import './Footer.css';
import React from 'react';
import { FaLinkedin, FaGithubSquare } from 'react-icons/fa';

const Footer = () => {
	return (
		<div className="footer">
			<div className="personContainer">
				<p className="name">Jordan Farelli</p>
				<a
					title="linkedin"
					name="linkedin"
					className="linkedin-anchor"
					href="https://www.linkedin.com/in/jordan-farelli/"
				>
					<FaLinkedin />
				</a>
				<a
					title="github"
					name="linkedin"
					className="github-anchor"
					href="https://github.com/jfarelli"
				>
					<FaGithubSquare />
				</a>
			</div>
		</div>
	);
};

export default Footer;
