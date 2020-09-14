import React from 'react';
import pets from '../../assets/pets.jpg';
import { Link } from 'react-router-dom';
import simon2 from '../../assets/simon2.jpg';
import wint3 from '../../assets/wint3.png';
import kayaksWh2 from '../../assets/kayaksWh2.png';
import match_gamealt3 from '../../assets/match_gamealt3.jpg';
import abode1 from '../../assets/abode1.png';

import '../cssFiles/Projects.css';

class Projects extends React.Component {
	render() {
		return (
			<div className="cards">
				<Link to="/pets">
					<img src={pets} className="project-card pets" alt="pet card" />
				</Link>
				<Link to="/simon">
					<img src={simon2} className="project-card simon" alt="simon card" />
				</Link>
				<Link to="/match-game">
					<img src={match_gamealt3} className="project-card match" alt="match card" />
				</Link>
				<Link to="/earth-paints">
					<img src={wint3} className="project-card match" alt="match card" />
				</Link>

				<Link to="/kayak">
					<img src={kayaksWh2} className="project-card kayak" alt="kayak card" />
				</Link>
				<Link to="/abode">
					<img src={abode1} className="project-card abode" alt="abode haven cards" />
				</Link>
			</div>
		);
	}
}

export default Projects;
