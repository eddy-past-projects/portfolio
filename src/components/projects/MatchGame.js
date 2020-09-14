import React from 'react';
import match_gamealt3 from '../../assets/match_gamealt3.jpg';

const MatchGame = () => {
	return (
		<div className="solo-card match">
			<div className="inner-card">
				<a href="https://match-car-game.netlify.app/">
					<img src={match_gamealt3} className="project-solo" alt="match game" />
				</a>

				<h3>
					<strong>Match Game</strong> is a memory game.
					<ul>
						<li>Click on one card, then another. If cars match, the cards stay revealed.</li>
						<li>
							You can reset game at anytime by clicking the little car at bottom. Cards will be shuffled.
						</li>
						<li>Built with CSS, HTML, Javascript and CSS Flexbox.</li>
					</ul>
				</h3>

				<div className="icons">
					<a href="https://match-car-game.netlify.app/">
						<i className="fas fa-play-circle fa-2x" />
					</a>

					<a href="https://github.com/cynthiaeddy/match-game">
						<i className="fab fa-github fa-2x" />
					</a>
				</div>
			</div>
		</div>
	);
};

export default MatchGame;
