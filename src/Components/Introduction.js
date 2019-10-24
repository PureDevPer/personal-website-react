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
	width: 100%;
	max-width: ${props => props.theme.maxWidth};
	padding: 0px 20px;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: justify;
	flex-direction: column;
	letter-spacing: 2px;
`;

const Intro = styled.span`
	font-size: 24px;
	font-weight: 400;
	margin: 40px 0px;
`;

const Paragraph = styled.span`
	line-height: 1.5em;
	&:not(:last-child) {
		margin-bottom: 20px;
	}

	&:last-child {
		margin-bottom: 80px;
	}
`;

export default () => {
	return (
		<Container>
			<ContainerWrapper>
				<Intro>
					Hi! I'm Wooseok. I'm a Software Engineer based in the United States.
				</Intro>

				<Paragraph>
					I'm interested in all aspects of software development. Recently, my
					passion lies in the web application development including both the
					front end and the back end. I fell in love with the modern JavaScript.
				</Paragraph>

				<Paragraph>
					Since I was a senior in college, I've liked mobile wireless networks
					as well. Therefore, I have read new telecommunication technologies
					such as next generation wireless networks.
				</Paragraph>

				<Paragraph>
					Outside the realm of computers, I enjoy car detailing as a car
					enthusiast. I research how to make the car cleaner. I also like
					traveling all over the world. One of my dreams is to visit all the
					national parks in the United States.
				</Paragraph>

				<Paragraph>
					Previously, I taught code to undergraduate students in college, worked
					as a software test engineer for LG and developed web applications as a
					software engineer intern. I also hold a Bachelor's and Master's Degree
					in computer science.
				</Paragraph>
			</ContainerWrapper>
		</Container>
	);
};
