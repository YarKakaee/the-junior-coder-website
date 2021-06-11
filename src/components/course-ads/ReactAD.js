import React from "react";
import { Button } from "../Button";
import "./ReactAD.css";
import CodeBlock from "@tenon-io/tenon-codeblock";
import { CodeString1 } from "./CodeStrings";

function ReactAD() {
	return (
		<div className="reactad">
			<div className="reactad-container">
				<div className="reactad-left">
					<p className="reactad-heading">REACT</p>
					<p className="reactad-desc">
						A library for building User Interfaces
					</p>
					<Button
						buttonStyle="btn-ad"
						onClick={(e) => {
							e.preventDefault();
							window.location.href = "./courses/react";
						}}
					>
						Learn React
					</Button>
				</div>
				<div className="reactad-right">
					<div className="reactad-right-container">
						<p className="reactad-code-heading">React Example:</p>
						<div className="reactad-code-container">
							<CodeBlock
								className="reactad-code"
								codeString={CodeString1()}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ReactAD;
