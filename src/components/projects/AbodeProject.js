import React from 'react';
import abode1 from '../../assets/abode1.png';

const AbodeProject = () => {
	return (
		<div className="solo-card">
			<div className="inner-card">
				<a href="https://abodehaven.herokuapp.com/">
					<img src={abode1} className="project-solo" alt="city at night" />
				</a>

				<h3>
					<strong>Abode Haven</strong> is an app for Abode Haven's building management admin and their
					apartments.
					<ul>
						<li>Admin can add, update, delete buildings and apartments based on availability.</li>
						<li>Apartment seekers can view all available apartments.</li>
						<li>Admin sign in: lola@gmail.com, pw: password</li>
						<li>Built with Ruby on Rails, Postgres, Bootstrap and CSS.</li>
					</ul>
				</h3>
				<div className="icons">
					<a href="https://abodehaven.herokuapp.com">
						<i className="fas fa-play-circle fa-2x" />
					</a>

					<a href="https://youtu.be/tDIepDugwbc">
						<i className="fas fa-video fa-2x" />
					</a>

					<a href="https://github.com/cynthiaeddy/abode-haven/tree/heroku_work">
						<i className="fab fa-github fa-2x" />
					</a>
				</div>
			</div>
		</div>
	);
};

export default AbodeProject;
