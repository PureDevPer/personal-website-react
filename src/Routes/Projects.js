import React from 'react';
import Helmet from 'react-helmet';
import Skills from '../Components/Projects/Skills';
import Project from '../Components/Projects/Projects';

const Projects = () => {
	return (
		<>
			<Helmet>
				<title>Projects | Wooseok</title>
			</Helmet>
			<Skills />
			<Project />
		</>
	);
};

export default Projects;
