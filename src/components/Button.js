import React from "react";
import "./Button.css";

const STYLES = [
	"btn-primary",
	"btn-home",
	"btn-outline",
	"btn-normal",
	"btn-nav",
	"btn-404",
	"btn-ad",
	"btn-multiple",
	"btn-docad",
	"btn-docad-bottom",
];

const SIZES = ["btn-medium"];

const COLOR = ["primary", "blue", "black"];

export const Button = ({
	children,
	type,
	onClick,
	buttonStyle,
	buttonSize,
	buttonColor,
}) => {
	const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : null;

	const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : null;

	const checkButtonColor = COLOR.includes(buttonColor) ? buttonColor : null;

	return (
		<button
			className={`btn ${checkButtonStyle} ${checkButtonSize} ${checkButtonColor}`}
			onClick={onClick}
			type={type}
		>
			{children}
		</button>
	);
};
