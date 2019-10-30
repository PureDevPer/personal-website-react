import React from 'react';
import styled from 'styled-components';
import Design from './Projects/Design';
import MyProjects from './Projects/MyProjects';
import {
	FULLSTACK_PROJECTS,
	WEB_BASED_PROJECTS,
	OTHERS
} from './Projects/ProjectList';

const Container = styled.div`
	display: flex;
	flex-wrap: wrap;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	color: ${props => props.theme.blackColor};
`;

const Intro = styled.span`
	font-size: 24px;
	font-weight: 700;
	margin: 40px 0px;
	text-transform: uppercase;
`;

const Projects = () => {
	return (
		<Container>
			<Intro>Projects</Intro>
			<MyProjects
				section="Full Stack Projects"
				projectInfo={FULLSTACK_PROJECTS}
			/>
			<MyProjects section="Web Projects" projectInfo={WEB_BASED_PROJECTS} />
			<Design />
			<MyProjects section="Others" projectInfo={OTHERS} />
		</Container>
	);
};

export default Projects;
