import React, { Component } from 'react';
import styled from 'styled-components';
import Modal from './Modal';
import Design from './Projects/Design';
import FullStack from './Projects/FullStack';

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

const ImageContainer = styled.div`
	padding: 0px 10px;
`;

const Image = styled.img`
	width: 100%;
	max-width: ${props => props.theme.maxWidth};
	height: 10%;

	margin-bottom: 20px;
	border-radius: 40px;
	box-shadow: 5px 10px 18px #888888;
`;

const ProjectContainer = styled.div`
	width: 80%;
	max-width: ${props => props.theme.maxWidth};
	text-align: justify;
	letter-spacing: 2px;
	line-height: 1.5rem;
`;

const ProjectHeader = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 20px 0px;
`;

const Title = styled.div`
	font-size: 24px;
	font-weight: 600;
`;

const ProjectButtons = styled.div`
	display: flex;
`;

const ProjectButton = styled.button`
	outline: none;
	font-size: 16px;
	font-weight: 600;
	padding: 5px;
	color: ${props => props.theme.darkGreyColor};
	border: 2px solid ${props => props.theme.darkGreyColor};
	border-radius: 5px;
	text-transform: uppercase;
	margin-right: 5px;
	cursor: pointer;
	transition: all 0.4s ease-in-out;

	&:hover {
		color: white;
		background-color: ${props => props.theme.lightRedColor};
		border-color: ${props => props.theme.lightRedColor};
	}
`;

const ProjectLink = styled.a`
	outline: none;
	font-size: 16px;
	font-weight: 600;
	padding: 5px;
	color: ${props => props.theme.darkGreyColor};
	border: 2px solid ${props => props.theme.darkGreyColor};
	border-radius: 5px;
	text-transform: uppercase;
	transition: all 0.4s ease-in;

	&:hover {
		color: white;
		background-color: ${props => props.theme.lightRedColor};
		border-color: ${props => props.theme.lightRedColor};
	}
`;

const Descriptions = styled.div`
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
`;

const Description = styled.span`
	font-size: 18px;

	&:not(:last-child) {
		margin-bottom: 15px;
	}
`;

const Technologies = styled.div`
	display: flex;
	flex-wrap: wrap;
`;

const TechnologyFrontEnd = styled.span`
	background-color: ${props => props.theme.darkGreyColor};
	color: white;
	font-size: 12px;
	padding: 5px;
	border-radius: 5px;
	margin: 10px 0px;

	&:not(:last-child) {
		margin-right: 10px;
	}
`;

const TechnologyBackEnd = styled.span`
	background-color: #718093;
	color: white;
	font-size: 12px;
	padding: 5px;
	border-radius: 5px;
	margin-bottom: 10px;

	&:not(:last-child) {
		margin-right: 10px;
	}
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
				<FullStack />

				<SubIntro>Web Projects</SubIntro>
				<Items>
					<Image src="https://puredevper.s3.amazonaws.com/MovieWorld.png" />
					<ProjectContainer>
						<ProjectHeader>
							<>Movie World</>
							<ProjectButtons>
								<button onClick={this.openModal}>Demo</button>
								<Modal
									isOpen={this.state.isModalOpen}
									close={this.closeModal}
								/>
								<a
									href="https://github.com/PureDevPer/MovieWorld"
									target="_blank"
									rel="noopener noreferrer"
								>
									Code
								</a>
							</ProjectButtons>
						</ProjectHeader>
						<>
							<>
								I developed an web application which offers movie information
								and TV show information using
								<a
									href="https://www.themoviedb.org/"
									target="_blank"
									rel="noopener noreferrer"
								>
									{' '}
									The MOVIE DB
								</a>
								. Movie page shows Now Playing, Upcoming Movies, and Popular
								movies. TV shows offers Airing Today, Top Rated Shows, and
								Popular shows. Each movie or each TV show has their own detail
								page, which offers program information.
							</>
							<>react, react-router-dom, styled-component, axios</>
						</>
					</ProjectContainer>
				</Items>
				<Items>
					<Image src="https://puredevper.s3.amazonaws.com/Momentum.png" />
					<ProjectContainer>
						<ProjectHeader>
							<>Momentum</>
							<ProjectButtons>
								<button onClick={this.openModal}>Demo</button>
								<Modal
									isOpen={this.state.isModalOpen}
									close={this.closeModal}
								/>
								<a
									href="https://github.com/PureDevPer/LearningJavaScript"
									target="_blank"
									rel="noopener noreferrer"
								>
									Code
								</a>
							</ProjectButtons>
						</ProjectHeader>
						<>
							<>
								I developed Momentum replica, Google Chrome app, which allows
								users to input to-do list with locaiton. A basic gelocation
								setting with weather information is built by allowing users to
								convert temperature. All data written by users are saved on
								local storage.
							</>
							<>HTML, CSS, JavaScript</>
						</>
					</ProjectContainer>
				</Items>
				<Items>
					<Image src="https://puredevper.s3.amazonaws.com/KaTalk.png" />
					<ProjectContainer>
						<ProjectHeader>
							<>Kakao</>
							<ProjectButtons>
								<button onClick={this.openModal}>Demo</button>
								<Modal
									isOpen={this.state.isModalOpen}
									close={this.closeModal}
								/>
								<a
									href="https://github.com/PureDevPer/kakao"
									target="_blank"
									rel="noopener noreferrer"
								>
									Code
								</a>
							</ProjectButtons>
						</ProjectHeader>
						<>
							<>
								I created UI parts of an instant messaing application. A
								responsive web application is implemented to fit mobile screen.
								Landing pages, built by animation, are created to change 2
								different versions of Kakao and to make user's screen smaller.
							</>
							<>HTML5, CSS3</>
						</>
					</ProjectContainer>
				</Items>

				<Design />

				<SubIntro>Others</SubIntro>
				<Items>
					<Image src="https://puredevper.s3.amazonaws.com/MachineLearning.png" />
					<ProjectContainer>
						<ProjectHeader>
							<>Recognizing Hand-Written Characters</>
							<ProjectButtons>
								<button onClick={this.openModal}>Demo</button>
								<Modal
									isOpen={this.state.isModalOpen}
									close={this.closeModal}
								/>
								<a
									href="https://github.com/PureDevPer/MachineLearning"
									target="_blank"
									rel="noopener noreferrer"
								>
									Code
								</a>
							</ProjectButtons>
						</ProjectHeader>
						<>
							<>
								I developed machine learning programs that detect hand-written
								digits and characters using 6 different algorithms, SoftMax
								Logistic Regression, Neural Networks, Neural Networks with
								Xavier Initialization, Neural Networks with Dropout,
								Convolutional Neural Networks, and Ensemble Convolutional Neural
								Networks. I attained 99.7% accuracy for digits and 89.5%
								accuracy for characters.
							</>
							<>Python, Tensorflow</>
						</>
					</ProjectContainer>
				</Items>
				<Items>
					<Image src="https://puredevper.s3.amazonaws.com/GithubJenkins.png" />
					<ProjectContainer>
						<ProjectHeader>
							<>Integrating Github with Jenkins </>
							<ProjectButtons>
								<button onClick={this.openModal}>Demo</button>
								<Modal
									isOpen={this.state.isModalOpen}
									close={this.closeModal}
								/>
							</ProjectButtons>
						</ProjectHeader>
						<>
							<>
								This project was for my master's project. I improved on Github
								integration with Jenkins by making a continuous integration and
								depoyment (CI / CD) pipeline. I developed an automation script
								in order to test all the code before and after pull request.
								Jenkins icon is displayed on Github during an automation test.
							</>
							<>Jenkins, Docker</>
						</>
					</ProjectContainer>
				</Items>
			</Container>
		);
	}
}

export default Projects;
