import React from 'react';
import linkedin2 from '../../assets/linkedin2.jpg';
import resume_final from '../../assets/resume_final.pdf';
import '../cssFiles/AboutMe.css';

const AboutMe = () => {
	return (
		<div>
			<div className="text">
				<div className="image">
					<img src={linkedin2} className="my-photo" alt="" />
				</div>

				<h3>
					I've always had a penchant for creativity. My life has been a continual exploration of mediums
					ranging from textiles and metalsmithing to designing for editorial publications, both print and
					digital. The common thread throughout these mediums is the fascination of making the abstract
					tangible. <br /> <br />
					As a Software Engineer, my focus is on exploring this medium of computer programming - applying my
					creative and technical problem-solving skills, as well as my tenacious spirit. Because of my
					previous work environment, I'm adept at prioritizing key deliverables under tight deadlines and
					collaborating effectively across departments.
				</h3>

				<br />
				<footer>
					<a href={resume_final}>
						<h5>click here to view my resume | </h5>
					</a>
					<a href={resume_final} download>
						<h5> download my resume | </h5>
					</a>
					<a href="https://www.linkedin.com/in/cynthiaeddy">
						<h5>linkedin profile | </h5>
					</a>
					<a href="https://github.com/cynthiaeddy">
						<h5>github | </h5>
					</a>
					<a href="http://www.cynthiaeddy.com">
						<h5>print and digital portfolio | </h5>
					</a>
					<a href="mailto:cynthiaeddynyc@gmail.com">
						<h5>email</h5>
					</a>
				</footer>
			</div>
		</div>
	);
};

export default AboutMe;
