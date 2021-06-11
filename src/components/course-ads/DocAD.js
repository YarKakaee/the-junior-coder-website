import React from "react";
import "./DocAD.css";
import { Button } from "./../Button";

function DocAD() {
	return (
		<div className="docad">
			<p className="docad-heading">DOCUMENTATIONS</p>
			<p className="docad-desc">
				Find explanations, tutorials, and examples in the Documentations
				below
			</p>
			<div className="docad-buttons-container">
				<div className="docad-top">
					<Button
						buttonStyle="btn-docad"
						onClick={(e) => {
							e.preventDefault();
							window.location.href = "./docs/react";
						}}
					>
						React Documentation
					</Button>
					<Button
						buttonStyle="btn-docad"
						onClick={(e) => {
							e.preventDefault();
							window.location.href = "./docs/python";
						}}
					>
						Python Documentation
					</Button>
					<Button
						buttonStyle="btn-docad"
						onClick={(e) => {
							e.preventDefault();
							window.location.href = "./docs/js";
						}}
					>
						JavaScript Documentation
					</Button>
				</div>
				<div className="docad-bottom">
					<Button
						buttonStyle="btn-docad-bottom"
						onClick={(e) => {
							e.preventDefault();
							window.location.href = "./docs/html";
						}}
					>
						HTML
					</Button>
					<Button
						buttonStyle="btn-docad-bottom"
						onClick={(e) => {
							e.preventDefault();
							window.location.href = "./docs/css";
						}}
					>
						CSS
					</Button>
					<Button
						buttonStyle="btn-docad-bottom"
						onClick={(e) => {
							e.preventDefault();
							window.location.href = "./docs/numpy";
						}}
					>
						NumPy
					</Button>
					<Button
						buttonStyle="btn-docad-bottom"
						onClick={(e) => {
							e.preventDefault();
							window.location.href = "./docs/numpy";
						}}
					>
						TKinter
					</Button>
					<Button
						buttonStyle="btn-docad-bottom"
						onClick={(e) => {
							e.preventDefault();
							window.location.href = "./docs/matplotlib";
						}}
					>
						Matplotlib
					</Button>
				</div>
			</div>
		</div>
	);
}

export default DocAD;
