import React from "react";
import "./CustomerTestimonials.css";
import Testimonial from "./Testimonial";
import img07 from "./Ellipse07.png";
import img08 from "./Ellipse08.png";
import img09 from "./Ellipse09.png";
import img10 from "./Ellipse10.png";
import img11 from "./Ellipse11.png";
import img12 from "./Ellipse12.png";

const VendorTestimonials = () => {
	return (
		<div className="customerTestimonials">
			<div className="customerTestimonial__row1">
				<Testimonial
					customerImage={img07}
					customerName="Joseph Ike"
					customerLocation="In Ikeja"
					customerGroup="Vendor"
					customerArticle="Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deser
unt ut voluptate aute id deserunt nisi.
Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.

"
				/>
				<Testimonial
					customerImage={img08}
					customerName="Adetola Fashina"
					customerLocation="Ibadan"
					customerGroup="Vendor"
					customerArticle="Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deser
unt ut voluptate aute id deserunt nisi.
Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.

"
				/>
				<Testimonial
					customerImage={img09}
					customerName="Emmanuel Fayemi"
					customerLocation="In Akoka"
					customerGroup="Vendor"
					customerArticle="Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deser
unt ut voluptate aute id deserunt nisi.
Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.

"
				/>
			</div>
			<div className="customerTestimonial__row2">
				<Testimonial
					customerImage={img10}
					customerName="Chisom Obilor"
					customerLocation="In Magodo"
					customerGroup="Vendor"
					customerArticle="Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deser
unt ut voluptate aute id deserunt nisi.
Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.

"
				/>
				<Testimonial
					customerImage={img11}
					customerName="Adunoluwa Adeyemi"
					customerLocation="Iwo Road"
					customerGroup="Vendor"
					customerArticle="Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deser
unt ut voluptate aute id deserunt nisi.
Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.

"
				/>
				<Testimonial
					customerImage={img12}
					customerName="Chidi Okeke"
					customerLocation="In Shomolu"
					customerGroup="Vendor"
					customerArticle="Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deser
unt ut voluptate aute id deserunt nisi.
Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.

"
				/>
			</div>
		</div>
	);
};

export default VendorTestimonials;
