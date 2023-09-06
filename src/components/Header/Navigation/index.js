import React from "react";
import { Link } from "react-router-dom";
import img from '../../../assets/cover/pink-blue.jpg'

function Navigation() {
	return (
		<header className="mb-4 py-2 flex-row">
			<div className="container flex-row justify-space-between-lg justify-center align-center">
				<nav className="flex-row ">
				<h2>
					<Link to="/">Elena Rogers</Link>
				</h2>
					<Link to="/about">About</Link>
					<Link to="/blog">Blog</Link>
					<Link to="/portfolio">Portfolio</Link>
					<Link to="/contact">Contact</Link>
					<Link to="/resume">Resume</Link>
				</nav>
			</div>
			<div className="picBox">
			<img src={ img } className="my-2 headPic" style={{ width: "100%"}} alt="cover" />
			</div>
		</header>
	);
}

export default Navigation;
