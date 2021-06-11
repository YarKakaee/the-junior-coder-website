import React from "react";
import { Button } from "../Button";
import "./MultipleCourseAD.css";

function MultipleCourseAD() {
	return (
		<div className="multiple-ad-container">
			<div className="multiple-ad-top">
				<div className="multiple-course-container-1">
					<p className="multiple-course-heading">RASPBERRY PI 4</p>
					<p className="multiple-course-desc">
						A small electronic board, with an Operating System
					</p>
					<Button
						buttonStyle="btn-multiple"
						onClick={(e) => {
							e.preventDefault();
							window.location.href = "./courses/rpi4";
						}}
					>
						Learn Raspberry Pi 4
					</Button>
				</div>
				<div className="multiple-course-container-2">
					<p className="multiple-course-heading">SCRATCH</p>
					<p className="multiple-course-desc">
						A drag-and-drop programming language for beginners
					</p>
					<Button
						buttonStyle="btn-multiple"
						onClick={(e) => {
							e.preventDefault();
							window.location.href = "./courses/scratch";
						}}
					>
						Learn Scratch
					</Button>
				</div>
			</div>
			<div className="multiple-ad-bottom">
				<div className="multiple-course-container-3">
					<p className="multiple-course-heading">TKINTER</p>
					<p className="multiple-course-desc">
						A Python library for creating Graphical User Interfaces
					</p>
					<Button
						buttonStyle="btn-multiple"
						onClick={(e) => {
							e.preventDefault();
							window.location.href = "./courses/tkinter";
						}}
					>
						Learn TKinter
					</Button>
				</div>
				<div className="multiple-course-container-4">
					<p className="multiple-course-heading">NUMPY</p>
					<p className="multiple-course-desc">
						A Python library for creating multiple dimension arrays
					</p>
					<Button
						buttonStyle="btn-multiple"
						onClick={(e) => {
							e.preventDefault();
							window.location.href = "./courses/numpy";
						}}
					>
						Learn NumPy
					</Button>
				</div>
			</div>
		</div>
	);
}

export default MultipleCourseAD;
