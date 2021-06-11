import React from "react";
import JSAD from "../../course-ads/JSAD";
import PythonAD from "../../course-ads/PythonAD";
import ReactAD from "../../course-ads/ReactAD";
import Features from "../../Features";
import Footer from "../../Footer";
import Home from "../../Home";
import YellowBanner from "./../../YellowBanner";
import DocAD from "./../../course-ads/DocAD";

function GeneralHomePage() {
	return (
		<div>
			<Home />
			<ReactAD />
			<PythonAD />
			<JSAD />
			<DocAD />
			<Features />
			<YellowBanner />
			<Footer />
		</div>
	);
}

export default GeneralHomePage;
