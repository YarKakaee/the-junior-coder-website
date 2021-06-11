import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";
import "./App.css";
import GeneralHomePage from "./components/pages/HomePage/GeneralHomePage";
import NotFoundPage from "./components/pages/NotFound/NotFoundPage";
import ReactDocPage from "./components/pages/DocsPages/ReactDocPage";
import GeneralNavBar from "./components/NavigationBars/GeneralNavBar";

function App() {
	return (
		<>
			<Router>
				<GeneralNavBar />
				<Switch>
					<Route path="/" exact component={GeneralHomePage} />
					<Route path="/not-found" component={NotFoundPage} />

					<Route path="/docs/react" exact component={ReactDocPage} />

					<Redirect to="/not-found" />
				</Switch>
			</Router>
		</>
	);
}

export default App;
