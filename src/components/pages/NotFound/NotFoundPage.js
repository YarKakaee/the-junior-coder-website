import React from "react";
import { Button } from "../../Button";
import "./NotFoundPage.css";

function NotFoundPage() {
	return (
		<div className="not-found">
			<div className="not-found-container">
				<img
					src="404-image.png"
					alt="404-image"
					className="not-found-image"
				/>
				<h2 className="not-found-heading">
					The page you're looking for was not found
				</h2>
				<div className="not-found-button-container">
					<Button
						buttonStyle="btn-404"
						onClick={(e) => {
							e.preventDefault();
							window.location.href = "./";
						}}
					>
						Back to Home
					</Button>
				</div>
			</div>
		</div>
	);
}

export default NotFoundPage;
