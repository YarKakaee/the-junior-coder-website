import React from "react";
import "./Link.css";

function Link({ text, to }) {
	return (
		<a href={to} target="_blank" className="link">
			{text}
		</a>
	);
}

export default Link;
