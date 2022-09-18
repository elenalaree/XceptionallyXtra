import React from "react";
import github from "../../assets/icons/gh-md.png";
import LinkedIn from "../../assets/icons/LI-In-Bug.png";
const Footer = () => {
	return (
		<footer>
			<div className="w-100">
				<div>
					<a href="https://github.com/elenalaree"><img src={github} alt="GitHub Profile"></img></a>
				</div>
				<div>
					<a href="https://www.linkedin.com/in/elena-carey"><img className="linkin" src={LinkedIn} alt="LinkedIn Profile"></img></a>
				</div>
                <div>
				<a href="https://stackoverflow.com/users/18807935/elena-carey"><i class="fa-brands fa-stack-overflow"></i></a>
                </div>
                <div className="copywrite">
				&copy;2022 by Elenalaree
                </div>
			</div>
		</footer>
	);
};
export default Footer;
