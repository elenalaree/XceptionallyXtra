import React, { useState } from "react";
import { validateEmail } from "../utils/helpers";

function ContactForm() {
	const [errorMessage, setErrorMessage] = useState("");
	const [formState, setFormState] = useState({
		name: "",
		email: "",
		message: "",
	});
	const { name, email, message } = formState;
	function handleChange(e) {
		if (e.target.name === "email") {
			const isValid = validateEmail(e.target.value);
			// isValid conditional statement
			if (!isValid) {
				setErrorMessage("Your email is invalid.");
			} else {
				// isValid conditional statement
				if (!e.target.value.length) {
					setErrorMessage(`${e.target.name} is required.`);
				} else {
					setErrorMessage("");
				}
			}
		}
		if (!errorMessage) {
			setFormState({ ...formState, [e.target.name]: e.target.value });
		}
	}

	function handleSubmit(e) {
		e.preventDefault();
		if (!errorMessage) {
			setFormState({ [e.target.name]: e.target.value });
			console.log("Form", formState);
		}
	}

	console.log(formState);

	return (
		<section className="contactBox">
			<div>
				<h1>Contact me</h1>
				<form id="contact-form" onSubmit={handleSubmit}>
					<div>
						<label htmlFor="name">Name:</label>
						<input
							type="text"
							defaultValue={name}
							onBlur={handleChange}
							name="name"
						/>
					</div>
					<div>
						<label htmlFor="email">Email address:</label>
						<input
							type="email"
							defaultValue={email}
							name="email"
							onBlur={handleChange}
						/>
					</div>
					<div>
						<label htmlFor="message">Message: </label>
						<textarea
							name="message"
							defaultValue={message}
							onBlur={handleChange}
							rows="5"
						/>
					</div>
					{errorMessage && (
						<div>
							<p className="error-text">{errorMessage}</p>
						</div>
					)}
					<button type="submit">Submit</button>
				</form>
			</div>
			<div className="numberBox">
				<p>Email: theelenacarey@gmail.com</p>
				<p>Call: 830-734-6643</p>
			</div>
		</section>
	);
}

export default ContactForm;
