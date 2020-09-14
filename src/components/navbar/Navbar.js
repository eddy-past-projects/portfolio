import React from 'react';
import { Link } from 'react-router-dom';
import '../cssFiles/Navbar.css';

class Navbar extends React.Component {
	render() {
		return (
			<div>
				<nav id="navbar">
					<h2>
						<li>
							<Link to="/" className="home">
								Home
							</Link>
						</li>
						<li>
							<Link to="/projects" className="projects">
								Projects
							</Link>
						</li>
						<li>
							<Link to="/about-me" className="about-me">
								About Me
							</Link>
						</li>
					</h2>
				</nav>
			</div>
		);
	}
}

export default Navbar;
