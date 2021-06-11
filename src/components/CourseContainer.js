import React from "react";
import "./CourseContainer.css";

const CourseContainer = ({ containerClass, image, heading, body }) => {
	return (
		<div className={containerClass}>
			<img className="course-image" src={image} />
			<h1 className="course-heading">{heading}</h1>
			<p className="course-body">{body}</p>
		</div>
	);
};

export default CourseContainer;
