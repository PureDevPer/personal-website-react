import React from 'react';
import styled from 'styled-components';
import TechnicalSkills from './TechnicalSkills';
import { STACKS, FRONT_END, BACK_END, OTHERS } from './SkillDetail';

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	color: ${props => props.theme.blackColor};
`;

const ContainerWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	max-width: ${props => props.theme.maxWidth};
	padding: 0px 20px;
	letter-spacing: 2px;
`;

const Intro = styled.span`
	font-size: 24px;
	font-weight: 700;
	margin: 40px 0px;
	text-transform: uppercase;
`;

export default () => {
	return (
		<Container>
			<ContainerWrapper>
				<Intro>Skills</Intro>
				<TechnicalSkills skillInfo={FRONT_END} stack={STACKS[0]} />
				<TechnicalSkills skillInfo={BACK_END} stack={STACKS[1]} />
				<TechnicalSkills skillInfo={OTHERS} stack={STACKS[2]} />
			</ContainerWrapper>
		</Container>
	);
};
