import React from "react";
import "./VendorBanner.css";
import Button from "@material-ui/core/Button";
import Line from "./Underline.png";
import { Link } from "react-router-dom";
import Lady from "./woman-shoppingbag.png";
import Eclipse from "./Ellipse7.png";

const VendorBanner = () => {
	return (
		<div className="vendorBanner">
			<div className="vendorBanner__left">
				<h1>Josiah’s Experience</h1>
				<Button variant="outlined" color="default">
					Vendor
				</Button>
				<div className="vendorBanner__left__para">
					<p>
						I had the best experience shopping with vasiti. Usability of the
						website was great, very good customer service, an all round great
						experience. I would definately be coming back! I had the best
						experience shopping with vasiti. Usability of the website was great,
						very good customer service, an all round great experience. I would
						definately be coming back!
					</p>
					<div className="link">
						<Link to="/testimonial-form">Share your own story!</Link>
						<img src={Line} alt="" />
					</div>
				</div>
			</div>
			<div className="vendorBanner__right">
				<img src={Eclipse} alt="" className="eclipse" />
				<img src={Lady} alt="" className="lady" />
			</div>
		</div>
	);
};

export default VendorBanner;
