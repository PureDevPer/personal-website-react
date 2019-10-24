import React from 'react';
import styled from 'styled-components';

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

const SubIntro = styled.span`
	margin-bottom: 20px;
	text-transform: uppercase;
	font-size: 20px;
	font-weight: 600;
`;

const Icons = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	width: 100%;
	max-width: ${props => props.theme.maxWidth};
`;

const Icon = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	&:not(:last-child) {
		margin-right: 20px;
	}
`;

const Picture = styled.img`
	width: 100px;
	height: 100px;
	margin-bottom: 5px;
`;

const Caption = styled.span`
	font-size: 12px;
`;

export default () => {
	return (
		<Container>
			<ContainerWrapper>
				<Intro>Skills</Intro>
				<SubIntro>Front-end</SubIntro>
				<Icons>
					<Icon>
						<Picture src="https://puredevper.s3.amazonaws.com/HTML.png" />
						<Caption>HTML5</Caption>
					</Icon>
					<Icon>
						<Picture src="https://puredevper.s3.amazonaws.com/CSS.png" />
						<Caption>CSS3</Caption>
					</Icon>
					<Icon>
						<Picture src="https://puredevper.s3.amazonaws.com/JavaScript.png" />
						<Caption>JavaScript</Caption>
						<Caption>(ES6+)</Caption>
					</Icon>
					<Icon>
						<Picture src="https://puredevper.s3.amazonaws.com/React.png" />
						<Caption>React</Caption>
					</Icon>
					<Icon>
						<Picture src="https://puredevper.s3.amazonaws.com/React.png" />
						<Caption>React</Caption>
						<Caption>Native</Caption>
					</Icon>
				</Icons>
			</ContainerWrapper>
		</Container>
	);
};
