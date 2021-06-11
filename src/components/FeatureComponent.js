import React from "react";
import "./FeatureComponent.css";
import { IconContext } from "react-icons/lib";

const FeatureComponent = ({ icon, heading, body }) => {
	return (
		<>
			<IconContext.Provider value={{ color: "#1D252A" }}>
				<div className="feature-component-container">
					<div className="feature-component-icon-container">
						{icon}
					</div>
					<div className="feature-component-text-container">
						<h1 className="feature-component-heading">{heading}</h1>
						<p className="feature-component-body">{body}</p>
					</div>
				</div>
			</IconContext.Provider>
		</>
	);
};

export default FeatureComponent;
