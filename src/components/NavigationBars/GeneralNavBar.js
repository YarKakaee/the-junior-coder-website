import React from "react";
import "./NavBar.css";
import { Button } from "./../Button";

function GeneralNavBar() {
	return (
		<div className="navbar">
			<ul className="menu">
				<div className="menu-left">
					<li className="menu-item">
						<a className="menu-link" href="/">
							Home
						</a>
					</li>
					<li className="menu-item">
						<a className="menu-link" href="/courses">
							Courses
						</a>
					</li>
					<li className="menu-item">
						<a className="menu-link" href="/docs">
							Documentations
						</a>
					</li>
					<li className="menu-item">
						<a className="menu-link" href="/tutorials">
							Tutorials
						</a>
					</li>
					<div className="login-container">
						<Button
							buttonStyle="btn-nav"
							onClick={(e) => {
								e.preventDefault();
								window.location.href = "./login";
							}}
						>
							Login
						</Button>
					</div>
					<div className="signup-container">
						<Button
							buttonStyle="btn-nav"
							onClick={(e) => {
								e.preventDefault();
								window.location.href = "./signup";
							}}
						>
							Sign up
						</Button>
					</div>
				</div>
			</ul>
		</div>
	);
}

export default GeneralNavBar;
