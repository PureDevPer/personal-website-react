import React from 'react';
import styled from 'styled-components';
import Design from './Design';
import MyProjects from './MyProjects';
import {
	FULLSTACK_PROJECT_MYTUBE,
	FULLSTACK_PROJECT_MYSTAGRAM,
	WEB_BASED_PROJECTS,
	OTHERS
} from './ProjectList';

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
				isSection="true"
				projectInfo={FULLSTACK_PROJECT_MYSTAGRAM}
			/>
			<MyProjects
				section="Full Stack Projects"
				isSection="false"
				projectInfo={FULLSTACK_PROJECT_MYTUBE}
			/>
			<MyProjects
				section="Web Projects"
				isSection="true"
				projectInfo={WEB_BASED_PROJECTS}
			/>
			<Design />
			<MyProjects section="Others" isSection="true" projectInfo={OTHERS} />
		</Container>
	);
};

export default Projects;
