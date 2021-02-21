import React from "react";
import "./Testimonial.css";

const Testimonial = ({
	customerName,
	customerLocation,
	customerGroup,
	customerArticle,
	customerImage,
}) => {
	return (
		<div className="testimonials">
			<div className="testimonial__image">
				<img src={customerImage} alt="" />
			</div>
			<div className="testimonial__name">
				<h3>{customerName}</h3>
			</div>
			<div className="testimonial__details">
				<div className="testimonial__location">
					<p>{customerLocation}</p>
				</div>
				<div
					className={`${
						customerGroup === "Customer" && "testimonial__customer"
					} ${customerGroup === "Vendor" && "testimonial__vendor"}`}
				>
					<p>{customerGroup}</p>
				</div>
			</div>
			<div className="testimonial__article">
				<p>{customerArticle}</p>
			</div>
		</div>
	);
};
export default Testimonial;
