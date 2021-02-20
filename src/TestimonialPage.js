import React from "react";
import HeaderBanner from "./HeaderBanner";
import Subheader from "./Subheader";
import "./TestimonialPage.css";
import Topbar from "./Topbar";

const TestimonialPage = () => {
	return (
		<div className="testimonial">
			<div className="testimonial__header">
				<Topbar />
				<Subheader />
                <HeaderBanner/>
			</div>

			
			{/*Customer-Exp*/}
			{/*Customer Reviews*/}
			{/*Vendor Exp*/}
			{/*Multiple Vendors*/}
			{/*Footer*/}
		</div>
	);
};

export default TestimonialPage;
