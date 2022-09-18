import React, { useState } from "react";
function Projects() {
	
	const [picInfo] = useState([
		{
			name: "The Forgotten Pages",
			website: "https://theforgottenpages.herokuapp.com",
			languages: "CSS/HTML/JS/Handlebars/Express/Heroku",
			github: "https://github.com/itsmarcotime/ForgottenPages",
		},
		{
			name: "Past Pic",
			website: "https://jamestchavez.github.io/Past-Pic/",
			languages: "HTML/CSS/JS/Jquery/Bulma",
			github: "https://github.com/jamestchavez/pastpic",
		},
		{
			name: "Day Flow",
			website: "https://elenalaree.github.io/dayflow",
			languages: "HTML/CSS/JS",
			github: "https://github.com/elenalaree/dayflow",
		},
		{
			name: "Techie Time",
			website: "https://techie-time.herokuapp.com/",
			languages: "HTML/CSS/Heroku/Handlebars/Express/JS",
			github: "https://github.com/elenalaree/TechieTime",
		},
		{
			name: "Trackr",
			website: "https://drive.google.com/file/d/1Fc_h2PwzYCLOjwsQf8RkibPNIvIlrPge/view",
			languages: "JS express and inquirer",
			github: "https://github.com/elenalaree/Trackr",
		},
		{
			name: "Weather in the World",
			website: "https://elenalaree.github.io/WeatherInTheWorld",
			languages: "HTML/JS/CSS",
			github: "https://github.com/elenalaree/WeatherInTheWorld",
		},
	]);
	
	
	return (
		<div>
			<div className="flex-row">
				<div className="projectBox">
					{picInfo.map((image, i) => (
						<div key={image.name}>
							<div className="projectInfo">
								<div className="projectText">
									<a href={image.website}>
									<h6>{image.name}</h6>
									</a>
									<p>{image.languages}</p>
								</div>
								<div className="githubKitty">
								<i className="fa-brands fa-github fa-2xl"></i>
								</div>
							</div>
							<img
								src={require(`../../assets/projects/${i}.jpg`)}
								alt={image.name}
								className="img-thumbnail"
								key={image.name}
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default Projects;
