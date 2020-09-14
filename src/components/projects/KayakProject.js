import React from 'react';
import kayaksWh2 from '../../assets/kayaksWh2.png';

const KayakProject = () => {
	return (
		<div className="solo-card">
			<div className="inner-card">
				<a href="https://come-on-kayak.netlify.app">
					<img src={kayaksWh2} className="project-solo" alt="kayak" />{' '}
				</a>

				<h3>
					<strong>Come On Kayak</strong> is an app for kayakers to make comments on trips and create upcoming
					trips.
					<ul>
						<li>Persists data to a Rails database and provides a Rails API.</li>
						<li>Displays a React, Redux frontend with Semantic-ui-React.</li>
						<li>Fetches data from the Rails API using Javascript.</li>
					</ul>
				</h3>
				<div className="icons">
					<a href="https://come-on-kayak.netlify.app">
						<i className="fas fa-play-circle fa-2x" />
					</a>

					<a href="https://youtu.be/9nf-APieUaM">
						<i className="fas fa-video fa-2x" />
					</a>
					<a href="https://github.com/cynthiaeddy/kayaking_frontend">
						<i className="fab fa-github fa-2x" />
					</a>

					<a href="https://github.com/cynthiaeddy/kayaking-backend">
						<i className="fab fa-github fa-2x" />
					</a>
				</div>
			</div>
		</div>
	);
};

export default KayakProject;
