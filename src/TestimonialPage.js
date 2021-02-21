import React from "react";
import CustomerBanner from "./CustomerBanner";
import CustomerTestimonials from "./CustomerTestimonials";
import Footer from "./Footer";
import HeaderBanner from "./HeaderBanner";
import Subheader from "./Subheader";
import "./TestimonialPage.css";
import Topbar from "./Topbar";
import VendorBanner from "./VendorBanner";
import VendorTestimonials from "./VendorTestimonials";

const TestimonialPage = () => {
	return (
		<div className="testimonial">
			<Topbar />
			<Subheader />
			<HeaderBanner />
			<CustomerBanner />
			<CustomerTestimonials />
			<VendorBanner />
			<VendorTestimonials />
			<Footer/>
			{/*Customer-Exp*/}
			{/*Customer Reviews*/}
			{/*Vendor Exp*/}
			{/*Multiple Vendors*/}
			{/*Footer*/}
		</div>
	);
};

export default TestimonialPage;
