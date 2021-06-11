import React from "react";
import Heading from "./../docComponents/Heading";
import "./ReactDocumentation.css";
import SubHeading from "./../docComponents/SubHeading";
import LightText from "./../docComponents/LightText";
import Paragraph from "./../docComponents/Paragraph";
import Title from "./../docComponents/Title";
import Link from "./../docComponents/Link";
import CodeBlock from "@tenon-io/tenon-codeblock";
import { Code1, Code2, Code3 } from "./codeBlocks/codes";

function ReactDocumentation() {
	return (
		<div className="react-doc">
			<div className="react-doc-container">
				<div className="react-doc-left">
					<Title text="React JS Documentation" />
					<LightText text="By reading this page, you will be able to download and start using React." />
					<Heading text="Getting Started" />
					<Paragraph>
						React is a JavaScript Library for building interactive
						user interfaces. It was developed in 2011 by Facebook®,
						and right now its one of the most popular Javascript
						libraries for building user interfaces.
					</Paragraph>
					<SubHeading text="Downloading React" />

					<Paragraph>
						To download react, you need to first install node on
						your computer. To do that, go to{" "}
						<Link to="//nodejs.org/en/" text="nodejs.org" /> and
						click on Downloads. Once you're there, choose your
						operating system and follow the installation wizard.
						Next, open up command prompt and type:
						<CodeBlock codeString="npm i create-react-app" />
						Once that is installed, you can create a project using:
						<CodeBlock codeString="create-react-app my-first-react-app" />
						And start your website on a local server using:
						<CodeBlock codeString={Code1()} />
					</Paragraph>

					<SubHeading text="Creating your first Website" />
					<Paragraph>
						First, open the project you just created in a code
						editor (
						<Link
							to="//code.visualstudio.com"
							text="Visual Studio"
						/>
						), and go to <strong>app.js</strong>. This is what you
						first see in this file:
						<CodeBlock codeString={Code2()} />
						Change that to this:
						<CodeBlock codeString={Code3()} />
						Go to{" "}
						<Link to="//localhost:3000" text="localhost:3000" /> in
						your browser and you should see "Hello World" on your
						website.
					</Paragraph>
				</div>
				<div className="react-doc-right">
					<div className="react-doc-nav">
						<p className="react-doc-nav-heading">CONTENTS</p>
						<div className="react-doc-nav-bottom">
							<p className="react-doc-nav-content">
								Getting Started
							</p>
							<p className="react-doc-nav-content-2">
								Downloading React
							</p>
							<p className="react-doc-nav-content-2">
								Creating your first Website
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ReactDocumentation;
