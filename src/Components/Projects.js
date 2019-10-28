import React, { Component } from 'react';
import styled from 'styled-components';
import Modal from './Modal';

const Container = styled.div`
	display: flex;
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

const SubIntro = styled.span`
	margin-bottom: 20px;
	text-transform: uppercase;
	font-size: 12px;
	font-weight: 600;
	color: ${props => props.theme.darkGreyColor};
	border: 2px solid ${props => props.theme.darkGreyColor};
	border-radius: 5px;
	padding: 10px 15px;
`;

const Items = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-bottom: 40px;
`;

const Image = styled.img`
	width: 100%;
	max-width: ${props => props.theme.maxWidth};
	height: 10%;
	padding: 0px 10px;
	margin-bottom: 20px;
`;

const ProjectContainer = styled.div`
	width: 80%;
	max-width: ${props => props.theme.maxWidth};
	text-align: justify;
`;

const ProjectHeader = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const ProjectButtons = styled.div`
	display: flex;
`;

class Projects extends Component {
	state = {
		isModalOpen: false
	};

	openModal = () => {
		this.setState({ isModalOpen: true });
	};

	closeModal = () => {
		this.setState({ isModalOpen: false });
	};

	render() {
		return (
			<Container>
				<Intro>Projects</Intro>

				<SubIntro>Full Stack Projects</SubIntro>
				<Items>
					<Image src={require('../assets/MyTube.png')} />
					<ProjectContainer>
						<ProjectHeader>
							<>MystaGram</>
							<ProjectButtons>
								<button onClick={this.openModal}>Demo</button>
								<Modal
									isOpen={this.state.isModalOpen}
									close={this.closeModal}
								/>
								<a
									href="https://github.com/PureDevPer/MystaGram"
									target="_blank"
									rel="noopener noreferrer"
								>
									Code
								</a>
							</ProjectButtons>
						</ProjectHeader>
						<>
							<>
								I Developed a full stack, scalable, and improved Instagram
								replica that uploads and shares photos between users. Both web
								application and mobile app (iOS/Android) are developed by React
								and React Native. When user uploads data on mobile app, both web
								application and mobile app synchronize all data simutaneoulsy.
							</>
							<>
								Login system using one-time password (OTP) are improved. In
								other words, new password is sent to user email for each login.
								I developed sign-up using Google and Facebook account (Oauth2),
								photo upload from phone storage, Post Like and Comment.
							</>
							<>
								Front-End: JavaScript(ES6), React, React Native, React Hooks,
								Apollo
							</>
							<>
								Back-End: JavaScript(ES6), Express, Node.js, Prisma, GraphQL,
								Passport, Babel, AWS S3, Heroku, Netlify
							</>
						</>
					</ProjectContainer>
				</Items>

				<Items>
					<Image src={require('../assets/MyTube.png')} />
					<ProjectContainer>
						<ProjectHeader>
							<>MyTube</>
							<ProjectButtons>
								<button onClick={this.openModal}>Demo</button>
								<Modal
									isOpen={this.state.isModalOpen}
									close={this.closeModal}
								/>
								<a
									href="https://github.com/PureDevPer/MyTube"
									target="_blank"
									rel="noopener noreferrer"
								>
									Code
								</a>
							</ProjectButtons>
						</ProjectHeader>
						<>
							<>
								I created a full stack and scalable YouTube replica, which
								allows people to enjoy wathching and uploading videos. The
								project followed the MVC pattern. All pages are divided into
								different routers which render templates and have controllers.
								User information controllers and video information controllers
								render a page from Database, MongoDB.
							</>
							<>
								I implemented video upload to AWS S3 server, video record in
								real time, coments, video search, and custom video player. A
								full authentication system is built for users in order to
								provide more accountability.
							</>
							<>Front-End: JavaScript (ES6), Pug, SaSS, Webpack</>
							<>
								Back-End: JavaScript (ES6), Express, Node.js, MongoDB, Mongo
								Atlas, Mongoose, Passport, Babel, AWS S3, Heroku
							</>
						</>
					</ProjectContainer>
				</Items>
			</Container>
		);
	}
}

export default Projects;
