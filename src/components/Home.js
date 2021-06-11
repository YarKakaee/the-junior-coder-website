import React from "react";
import "./Home.css";
import { Button } from "./Button";

function Home() {
	return (
		<div className="home-container">
			<p className="home-heading">
				It's Not A Bug, It's An Undocumented Feature!
			</p>
			<Button
				buttonStyle="btn-home"
				onClick={(e) => {
					e.preventDefault();
					window.location.href = "./courses";
				}}
			>
				Get Started
			</Button>
		</div>
	);
}

export default Home;
