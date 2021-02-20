import React from "react";
import "./HeaderBanner.css";
import BannerImg from "./Testimonial.png";
import Elipse from "./Ellipse.png";

const HeaderBanner = () => {
	return (
		<div className="headerBanner">
			<div className="headerBanner__left">
				<h1>
					Amazing <br />
					Experiences from Our <br />
					Wonderful Customers
				</h1>
				<p>
					Here is what customers and vendors are saying about
					<br /> us, you can share your stories with us too.
				</p>
			</div>
			<div className="headerBanner__right">
				<img src={Elipse} alt="" className="headerBanner__elipse eclipse__bg" />
				<img src={BannerImg} alt="" className="headerBanner__image" />
			</div>
		</div>
	);
};

export default HeaderBanner;
