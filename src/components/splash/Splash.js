import React from 'react';
import '../cssFiles/myLogoRoll.css';
import swirl_sm from '../../assets/swirl_sm.jpg';
import '../cssFiles/Home.css';

const Splash = () => {
	return (
		<div>
			<div className="home-image">
				<aside className="aside logo">
					<div className="homeLogo swirl_sm">
						<img src={swirl_sm} className="swirl" alt="logo" />
					</div>
				</aside>
			</div>
		</div>
	);
};
export default Splash;
