import React from "react";
import "./DocFooter.css";

function DocFooter() {
	return (
		<div className="docfooter-container">
			<div className="docfooter-border"></div>
			<div className="docfooter-right">
				<ul className="docfooter-list">
					<ul className="home-list">
						<li className="footer-home">
							<a href="/" className="footer-home-link">
								Home
							</a>
						</li>

						<li className="footer-login">
							<a href="/login" className="footer-login-link">
								Login
							</a>
						</li>

						<li className="footer-signup">
							<a href="/signup" className="footer-signup-link">
								Sign up
							</a>
						</li>
					</ul>
					<ul className="course-list">
						<li className="footer-courses">
							<a href="/courses" className="footer-courses-link">
								Courses
							</a>
						</li>

						<li className="footer-python">
							<a
								href="/courses/python"
								className="footer-python-link"
							>
								Python
							</a>
						</li>

						<li className="footer-react">
							<a
								href="/courses/react"
								className="footer-react-link"
							>
								React
							</a>
						</li>

						<li className="footer-rpi4">
							<a
								href="/courses/rpi4"
								className="footer-rpi4-link"
							>
								Raspberry Pi 4
							</a>
						</li>

						<li className="footer-javascript">
							<a
								href="/courses/javascript"
								className="footer-javascript-link"
							>
								JavaScript
							</a>
						</li>

						<li className="footer-scratch">
							<a
								href="/courses/scratch"
								className="footer-scratch-link"
							>
								Scratch
							</a>
						</li>
					</ul>
					<ul className="tutorial-list">
						<li className="footer-tutorial">
							<a
								href="/tutorials"
								className="footer-tutorial-link"
							>
								Tutorials
							</a>
						</li>

						<li className="footer-react">
							<a
								href="/tutorials/react"
								className="footer-react-link"
							>
								React
							</a>
						</li>
					</ul>
					<ul className="docs-list">
						<li className="footer-docs">
							<a href="/docs" className="footer-docs-link">
								Docs
							</a>
						</li>

						<li className="footer-react">
							<a href="/docs/react" className="footer-react-link">
								React
							</a>
						</li>
					</ul>

					<ul className="follow-list">
						<li className="footer-follow">
							<a href="/" className="footer-follow-link">
								Follow us
							</a>
						</li>

						<li className="footer-youtube">
							<a
								href="//www.youtube.com/channel/UC9NTt1nhWyumXegO9xulZMQ"
								target="_blank"
								className="footer-youtube-link"
							>
								YouTube
							</a>
						</li>

						<li className="footer-facebook">
							<a
								href="//www.facebook.com/The-Junior-Coder-110940537311511"
								target="_blank"
								className="footer-facebook-link"
							>
								Facebook
							</a>
						</li>

						<li className="footer-instagram">
							<a
								href="//www.instagram.com/thejuniorcoder"
								target="_blank"
								className="footer-instagram-link"
							>
								Instagram
							</a>
						</li>

						<li className="footer-twitter">
							<a
								href="//twitter.com/TheJuniorCoder"
								target="_blank"
								className="footer-twitter-link"
							>
								Twitter
							</a>
						</li>
					</ul>
				</ul>
			</div>
		</div>
	);
}

export default DocFooter;
