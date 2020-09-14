import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import './components/cssFiles/logo.css';
import Navbar from './components/navbar/Navbar';
import swirl_sm from './assets/swirl_sm.jpg';
import KayakProject from './components/projects/KayakProject';
import AbodeProject from './components/projects/AbodeProject';
import PetsProject from './components/projects/PetsProject';
import SimonProject from './components/projects/SimonProject';
import MatchGame from './components/projects/MatchGame';
import EarthProject from './components/projects/EarthProject';

import About from './components/aboutMe/About';
import Home from './components/home/Home';
import SplashScreen from './components/splash/SplashScreen';

function App() {
	return (
		<div className="container">
			<Navbar />

			<div className="wrapper">
				<aside className="aside logo">
					<img src={swirl_sm} className="swirl" alt="logo" />
				</aside>
				<div className="main">
					<Route exact path="/" component={SplashScreen} />
					<Route path="/projects" component={Home} />
					<Route path="/about-me" component={About} />
					<Route path="/kayak" component={KayakProject} />
					<Route path="/abode" component={AbodeProject} />
					<Route path="/pets" component={PetsProject} />
					<Route path="/simon" component={SimonProject} />
					<Route path="/match-game" component={MatchGame} />
					<Route path="/earth-paints" component={EarthProject} />
				</div>
			</div>
		</div>
	);
}

export default App;
