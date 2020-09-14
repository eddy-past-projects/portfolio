import React from 'react';
import pets from '../../assets/pets.jpg';

const PetsProject = () => {
	return (
		<div className="solo-card">
			<div className="inner-card">
				<a href="https://adopt-a-pet.netlify.app">
					<img src={pets} className="project-solo" alt="pets" />
				</a>

				<h3>
					<strong>Adopt A Pet</strong> is an app for adopting/maintaining a virtual pet without the upkeep of
					a live one.
					<ul>
						<li>Persists each user to a Postgres database.</li>
						<li>
							Rebuilt from a Single Page Application with Javascript to React frontend and a Rails API
							with JWT authorization.
						</li>
						<li>Employs flexbox with a hamburger menu.</li>
					</ul>
				</h3>

				<div className="icons">
					<a href="https://adopt-a-pet.netlify.app">
						<i className="fas fa-play-circle fa-2x" />
					</a>

					<a href="https://github.com/cynthiaeddy/petstoo_frontend">
						<i className="fab fa-github fa-2x" />
					</a>

					<a href="https://github.com/cynthiaeddy/petstoo_backend">
						<i className="fab fa-github fa-2x" />
					</a>
				</div>
			</div>
		</div>
	);
};

export default PetsProject;
