import React from 'react';
import wint3 from '../../assets/wint3.png';

const EarthProject = () => {
	return (
		<div className="solo-card earth">
			<div className="inner-card">
				<a href="https://earth-paints.netlify.app">
					<img src={wint3} className="project-solo" alt="painting" />
				</a>

				<h3>
					<strong>Earth Paints</strong> is an app to discover images that Google Earth takes from afar.
					<ul>
						<li>Implements Lazyload for faster rendering in mobile.</li>
						<li>Incorporates a searchbar where users can search by Country.</li>
						<li>React frontend styled with CSS and Semantic-ui-React. </li>
						<li>Fetches data from the Rails API using Javascript.</li>
					</ul>
				</h3>
				<div className="icons">
					<a href="https://earth-paints.netlify.app">
						<i className="fas fa-play-circle fa-2x" />
					</a>

					<a href="https://github.com/cynthiaeddy/google-earth-client">
						<i className="fab fa-github fa-2x" />
					</a>

					<a href="https://github.com/cynthiaeddy/google-earth-api">
						<i className="fab fa-github fa-2x" />
					</a>
				</div>
			</div>
		</div>
	);
};

export default EarthProject;
