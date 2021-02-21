import React, { useState } from "react";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import "./TestimonialForm.css";

import Radio from "@material-ui/core/Radio";
import { Button } from "@material-ui/core";

const TestimonialForm = () => {
	const [customer, setCustomer] = useState("Customer");

	const handleClientType = (e) => {
		setCustomer(e.target.value);
	};
	return (
		<div className="testimonial__form__main">
			<div className="testimonialForm">
				<h1>Share your amazing story!</h1>
				<div className="testimonialForm__upload__section">
					<p>Upload your Picture</p>
					<div className="testimonialForm__upload">
						<input type="text" placeholder="Choose Image" />
						<AttachFileIcon />
					</div>
				</div>
				<div className="testimonialForm__names">
					<div className="testimonialForm__firstName">
						<p>First Name</p>
						<input type="text" />
					</div>
					<div className="testimonialForm__lastName">
						<p>Last Name</p>
						<input type="text" />
					</div>
				</div>
				<div className="testimonialForm__shareStory">
					<p>Share your story</p>
					<textarea name="" id="" cols="40" rows="5">
						Lorem Ipsum
					</textarea>
				</div>
				<div className="testimonialForm__selection">
					<div className="question">
						<span>What did you interact with Vasit as? </span>
					</div>
					<div className="options">
						<span>Customer</span>
						<Radio
							value="Customer"
							checked={customer === "Customer"}
							onChange={handleClientType}
						/>
						<span>Vendor</span>
						<Radio
							value="Vendor"
							onChange={handleClientType}
							checked={customer === "Vendor"}
						/>
					</div>
				</div>
				<div className="button">
					<Button>Share your story!</Button>
				</div>
			</div>
		</div>
	);
};

export default TestimonialForm;
