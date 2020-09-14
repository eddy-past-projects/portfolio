import React from 'react';
import simon2 from '../../assets/simon2.jpg';

const SimonProject = () => {
	return (
		<div className="solo-card">
			<div className="inner-card">
				<a href="https://colorpicksimon.netlify.app">
					<img src={simon2} className="project-solo" alt="simon game" />
				</a>

				<h3>
					<strong>Color Pick Simon</strong> is variation of my childhood game.
					<ul>
						<li>
							Player vs Simon(computer). Simon picks one color, Player matches. Simon adds one color to
							each successful sequence.
						</li>
						<li>Player wins when color sequences match 10 times.</li>
						<li>Player has the option to restart the game at any time.</li>
						<li>Built with CSS, HTML, Javascript, CSS Grid and Flexbox.</li>
					</ul>
				</h3>
				<div className="icons">
					<a href="https://colorpicksimon.netlify.app">
						<i className="fas fa-play-circle fa-2x" />
					</a>

					<a href="https://github.com/zoey7117/color-pick2">
						<i className="fab fa-github fa-2x" />
					</a>
				</div>
			</div>
		</div>
	);
};

export default SimonProject;
