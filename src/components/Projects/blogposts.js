import React, { useState } from "react";

function Posts() {
	const [posties] = useState([
		{
			name: "Orangesoft Women in Technology Scholarship",
			website: "https://orangesoft.co/",
			topic: "Women in tech",
            date: "6 Sept 2023",
			posts: [
				"My name is Elena Rogers. I grew up on the border of Mexico in a little town called Del Rio. My family was never well off but my father ran (and still runs) a computer repair business. He rarely made more than probably 30k a year but, being the youngest and the last at home, we made it work. I grew up riding horses and fiddling with computers. I never thought about getting into computers as a career because I really only wanted to be a mom and didn't think it was a viable career path. I went to school and got a degree that mixed many things I love like sewing, cooking, and teaching piano. I didn't think I'd ever need to use a degree because I wanted to be a stay-at-home mother. That is what I did for ten years. Over time, I started realizing my marriage was a shambles and my husband couldn't see beyond himself to see how he was hurting myself and our children. I filed for a divorce nearly two years ago and began learning to code.",
				"I thought I could make that journey on my own and get a job without a degree. I struggled to manage my time with my kids and with coding and realized I needed something more. So I enrolled in a full stack coding boot camp in 2022. It was one of the hardest things I did. But I graduated with the certificate. After applying for 6 months and only getting a job as a TA (hours are limited at 29 even if one manages to get two cohorts), I decided that I might as well get a degree if I was just going to be sitting around waiting for a job. With an override, I took the entire first certificate of my degree, 12 hours of software development classes in one trimester. I earned all A's.",
				"I homeschool my 4 children while I attend Brigham Young University - Idaho online pursuing my bachelor's in Software Development. I am taking 13 credits this semester while I work 13 hours a week as a TA and twenty hours a week as a junior developer (intern). I am hoping to find scholarships to help with the financial burden as I am the sole provider for my children.",
				"The difference I will make in the world is more on the level of raising children who respect those around them. I want to show my children that they can do anything they set their minds to. I am raising children who will go out and create waves of their own. I am showing them every day that they can work through emotional abuse to become successful, thoughtful, and kind human beings.",
				"So much is set upon women to show how they can change the world through their careers, and that can be true. But the difference one person makes in the world is often small and unnoticed. I will likely not go on to change the world, but I could change someone's world. By furthering my education, I can provide my children with a better quality of life. What more could a parent ask for? My priorities changed after"
			]
		}
	]);

	return (
		<div>
			<div className="flex-row">
				<div className="postBox">
					{posties.map((post) => (
						<div key={post.name}>
							<div className="postInfo">
								<h3>{post.name}</h3>
								<div className="postText">
									<a href={post.website}>
										<h5>{post.website}</h5>
									</a>
									<div className="topicDate">
										<p>Topic: {post.topic}</p>
                                        <p>Date: {post.date}</p>
									</div>
									{post.posts.map((paragraph) => (
										<div key={paragraph}><p>{paragraph}</p></div>
									))}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default Posts;
