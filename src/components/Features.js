import React from "react";
import "./Features.css";
import FeatureComponent from "./FeatureComponent";
import {
	FaTasks,
	FaPhoneAlt,
	FaUserLock,
	FaGraduationCap,
} from "react-icons/fa";

function Features() {
	const icon1 = <FaTasks size={30} className="icon1" />;
	const icon2 = <FaPhoneAlt size={27} className="icon1" />;
	const icon3 = <FaUserLock size={30} className="icon1" />;
	const icon4 = <FaGraduationCap size={30} className="icon1" />;

	return (
		<div className="features">
			<div className="features-container">
				<h1 className="features-heading">
					FEATURES DESIGNED TO HELP YOU LEARN ANYTHING!
				</h1>

				<div className="features-left">
					<FeatureComponent
						icon={icon1}
						heading="Easy to follow Structure"
						body="Our course system automatically saves every step of your journey, and provides no confusion to the user."
					/>

					<FeatureComponent
						icon={icon2}
						heading="Reliable user service"
						body="Contact us anytime you have any difficulties using our site and we will be very happy to help you."
					/>
				</div>

				<div className="features-shape">
					<div className="features-circle1"></div>
					<div className="features-line"></div>
					<div className="features-circle2"></div>
				</div>

				<div className="features-right">
					<FeatureComponent
						icon={icon3}
						heading="User Privacy"
						body="Any information you enter in our site will not be shared with anyone whatsoever and stays private to you, the user."
					/>

					<FeatureComponent
						icon={icon4}
						heading="Completion Award"
						body="Every course you complete will have it’s own unique Certificate to demonstrate your completion."
					/>
				</div>
			</div>
		</div>
	);
}

export default Features;
