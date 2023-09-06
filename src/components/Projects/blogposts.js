import React, { useState } from "react";

function Posts() {
	const [posties] = useState([
		{
			name: "Orangesoft Women in Technology Scholarship",
			website: "https://orangesoft.co/",
			topic: "Women in tech",
			post: "",
		}
	]);

	return (
		<div>
			<div className="flex-row">
				<div className="postBox">
					{posties.map((post, i) => (
						<div key={post.name}>
							<div className="postInfo">
								<div className="postText">
									<a href={post.website}>
										<h5>{post.website}</h5>
									</a>
									<div>
										<p>{post.topic}</p>
									</div>
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
