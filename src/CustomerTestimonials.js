import React from "react";
import Testimonial from "./Testimonial";
import "./CustomerTestimonials.css";
import img1 from "./Ellipse1.png";
import img2 from "./Ellipse2.png";
import img3 from "./Ellipse3.png";
import img4 from "./Ellipse4.png";
import img5 from "./Ellipse5.png";
import img6 from "./Ellipse6.png";

const CustomerTestimonials = () => {
	return (
		<div className="customerTestimonials">
			<div className="customerTestimonial__row1">
				<Testimonial
					customerImage={img3}
					customerName="Joseph Ike"
					customerLocation="In Ikeja"
					customerGroup="Customer"
					customerArticle="Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deser
unt ut voluptate aute id deserunt nisi.
Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.

"
				/>
				<Testimonial
					customerImage={img4}
					customerName="Adetola Fashina"
					customerLocation="Ibadan"
					customerGroup="Customer"
					customerArticle="Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deser
unt ut voluptate aute id deserunt nisi.
Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.

"
				/>
				<Testimonial
					customerImage={img5}
					customerName="Emmanuel Fayemi"
					customerLocation="In Akoka"
					customerGroup="Customer"
					customerArticle="Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deser
unt ut voluptate aute id deserunt nisi.
Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.

"
				/>
			</div>
			<div className="customerTestimonial__row2">
				<Testimonial
					customerImage={img1}
					customerName="Chisom Obilor"
					customerLocation="In Magodo"
					customerGroup="Vendor"
					customerArticle="Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deser
unt ut voluptate aute id deserunt nisi.
Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.

"
				/>
				<Testimonial
					customerImage={img2}
					customerName="Adunoluwa Adeyemi"
					customerLocation="Iwo Road"
					customerGroup="Vendor"
					customerArticle="Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deser
unt ut voluptate aute id deserunt nisi.
Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.

"
				/>
				<Testimonial
					customerImage={img6}
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

export default CustomerTestimonials;
