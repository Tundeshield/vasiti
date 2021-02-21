import React from "react";
import "./Footer.css";
import Button from "@material-ui/core/Button";
import Subscribe from "./subscribe.png";

const Footer = () => {
	return (
		<div className="footer">
			<div className="footer__top">
				<div className="footer__top__left">
					<img src={Subscribe} alt="" />
				</div>
				<div className="footer__top__right">
					<h1>
						Be a member <br /> of our community 🎉
					</h1>
					<p>
						We’d make sure you’re always first to know what’s <br />
						happening on Vasiti—thus, the world.
					</p>
					<div className="footer__top__right__search">
						<input type="text" placeholder="enter your email address"/>
						<Button variant="outlined">SUBSCRIBE</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
