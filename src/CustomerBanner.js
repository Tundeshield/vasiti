import React from "react";
import "./CustomerBanner.css";
import Ladies from "./ladies.png";
import Eclipse from "./Ellipse 8.png";
import Button from "@material-ui/core/Button";
import Line from "./Underline.png";

const CustomerBanner = () => {
	return (
		<div className="customerBanner">
			<div className="customerBanner__left">
				<img src={Eclipse} alt="" className="eclipse" />
				<img src={Ladies} alt="" className="ladies" />
			</div>
			<div className="customerBanner__right">
				<h1>Tolu & Joy’s Experience</h1>
				<Button variant="outlined" color="default">
					Customer
				</Button>
				<div className="customerBanner__right__para">
					<p>
						I had the best experience shopping with vasiti. Usability of the
						website was great, very good customer service, an all round great
						experience. I would definately be coming back! I had the best
						experience shopping with vasiti. Usability of the website was great,
						very good customer service, an all round great experience. I would
						definately be coming back!
					</p>
					<div className="link">
						<a href="#">Share your own story!</a>
						<img src={Line} alt="" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default CustomerBanner;
