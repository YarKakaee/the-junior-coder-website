import React from "react";
import { Button } from "../Button";
import "./PythonAD.css";
import CodeBlock from "@tenon-io/tenon-codeblock";
import { CodeString2 } from "./CodeStrings";

function PythonAD() {
	return (
		<div className="pythonad">
			<div className="pythonad-container">
				<div className="pythonad-left">
					<p className="pythonad-heading">PYTHON</p>
					<p className="pythonad-desc">
						A General-purpose Programming Language
					</p>
					<Button
						buttonStyle="btn-ad"
						onClick={(e) => {
							e.preventDefault();
							window.location.href = "./courses/python";
						}}
					>
						Learn Python
					</Button>
				</div>
				<div className="pythonad-right">
					<div className="pythonad-right-container">
						<p className="pythonad-code-heading">Python Example:</p>
						<div className="pythonad-code-container">
							<CodeBlock
								className="pythonad-code"
								codeString={CodeString2()}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default PythonAD;
