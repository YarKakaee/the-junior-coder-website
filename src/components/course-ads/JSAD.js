import React from "react";
import { Button } from "../Button";
import "./JSAD.css";
import CodeBlock from "@tenon-io/tenon-codeblock";
import { CodeString3 } from "./CodeStrings";

function JSAD() {
	return (
		<div className="jsad">
			<div className="jsad-container">
				<div className="jsad-left">
					<p className="jsad-heading">JAVASCRIPT</p>
					<p className="jsad-desc">
						A language for programming web pages
					</p>
					<Button
						buttonStyle="btn-ad"
						onClick={(e) => {
							e.preventDefault();
							window.location.href = "./courses/js";
						}}
					>
						Learn JavaScript
					</Button>
				</div>
				<div className="jsad-right">
					<div className="jsad-right-container">
						<p className="jsad-code-heading">JavaScript Example:</p>
						<div className="jsad-code-container">
							<CodeBlock
								className="jsad-code"
								codeString={CodeString3()}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default JSAD;
