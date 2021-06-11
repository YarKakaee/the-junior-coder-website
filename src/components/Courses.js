import React from "react";
import CourseContainer from "./CourseContainer";
import "./Courses.css";

function Courses() {
	return (
		<div className="courses-section">
			<h1 className="courses-heading">BEST-SELLING COURSES</h1>
			<div className="all-courses-container">
				<CourseContainer
					containerClass="python-container"
					image="PythonBanner.jpg"
					heading="Python for Beginners"
					body="This course is designed to teach you
                    EVERYTHING you need to know, in order
                    to MASTER the Python Programming
                    Language."
				/>
				<CourseContainer
					containerClass="react-container"
					image="ReactBanner.png"
					heading="Mastering React"
					body='This course is designed to help you
                    completely master React, from building a
                    small "Hello World" application, going into
                    creating a full website.'
				/>
				<CourseContainer
					containerClass="raspberry-container"
					image="RaspberryBanner.jpg"
					heading="Intro to Raspberry Pi 4"
					body="In this course, you will learn everything you
                    need to know about the Rasbperry Pi 4, which
                    is a mini computer that can be programmed
                    to do cool things with a breadboard."
				/>
			</div>
		</div>
	);
}

export default Courses;
