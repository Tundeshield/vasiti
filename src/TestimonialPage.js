import React from "react";
import CustomerBanner from "./CustomerBanner";
import CustomerTestimonials from "./CustomerTestimonials";
import HeaderBanner from "./HeaderBanner";
import Subheader from "./Subheader";
import "./TestimonialPage.css"
import Topbar from "./Topbar";


const TestimonialPage = () => {
	return (
		<div className="testimonial">
			<Topbar />
			<Subheader />
			<HeaderBanner />
			<CustomerBanner />
			<CustomerTestimonials/>
			{/*Customer-Exp*/}
			{/*Customer Reviews*/}
			{/*Vendor Exp*/}
			{/*Multiple Vendors*/}
			{/*Footer*/}
		</div>
	);
};

export default TestimonialPage;
