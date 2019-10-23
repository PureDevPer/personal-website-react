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
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

const Intro = styled.span`
	font-size: 24px;
	font-weight: 400;
	margin: 40px 0px;
`;

const Paragraph = styled.span`
	&:not(:last-child) {
		margin-bottom: 20px;
	}

	&:last-child {
		margin-bottom: 70px;
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
					I'm interested in all aspects of the software development. My passion
					lies recently in the web application development including both the
					front end and the back end. I fell in love with the modern JavaScript.
				</Paragraph>

				<Paragraph>
					Since I was a senior in college, I like mobile wireless networks. So,
					I read new telecommunication technologies such as next generation
					wireless networks.
				</Paragraph>

				<Paragraph>
					Outside of computer world, I like car detailing as a car enthusiast. I
					research how to make the car cleaner. I also like traveling all over
					the world. One of my dreams is to visit all national parks in the
					United States.
				</Paragraph>

				<Paragraph>
					Previously, I taught code to undergraduate students in college, worked
					as a software test engineer and developed web applications as a
					software engineer intern. I also hold degrees in computer science.
				</Paragraph>
			</ContainerWrapper>
		</Container>
	);
};
