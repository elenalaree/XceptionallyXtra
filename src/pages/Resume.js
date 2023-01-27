import React from "react";
import resume from "../assets/ElenaLaReeResume.pdf";

function Resume() {
	return (
		<section className="center">
			<h1 id="resume " >Resume</h1>
			<div className="resumeLoad"><a href={resume}  download>
				Elena's Resume
			</a></div>
			<div className="contactBox list">
				<div>
					<h4>Front End Skills</h4>
					<ul>
						<li>CSS</li>
						<li>HTML</li>
						<li>JavaScript</li>
						<li>React</li>
						<li>JSON</li>
						<li>MySQL</li>
						<li>Node.js</li>
						<li>DOM Manipulation</li>
						<li>JSON</li>
					</ul>
				</div>
				<div>
					<h4>Back End Skills</h4>
					<ul>
						<li>SQL</li>
						<li>Git</li>
						<li>JavaScript</li>
						<li>APIs</li>
						<li>Express.js</li>
						<li>MongoDB</li>
						<li>Mongoose</li>
						<li>DOM Manipulation</li>
						<li>Node.js</li>
					</ul>
				</div>
			</div>
		</section>
	);
}

export default Resume;
