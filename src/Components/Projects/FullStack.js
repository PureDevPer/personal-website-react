import React, { Component } from 'react';
import styled from 'styled-components';
import { FULLSTACKPROJECTS } from './ProjectList';
import Modal from '../Modal';

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

class FullStack extends Component {
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
			<>
				<SubIntro>Full Stack Projects</SubIntro>
				{FULLSTACKPROJECTS.map((project, index) => (
					<Items key={index}>
						<ImageContainer>
							<Image src={project.imageLink} />
						</ImageContainer>
						<ProjectContainer>
							<ProjectHeader>
								<Title>{project.title}</Title>
								<ProjectButtons>
									<ProjectButton onClick={this.openModal}>Demo</ProjectButton>
									<Modal
										youtubeID={project.youtube}
										isOpen={this.state.isModalOpen}
										close={this.closeModal}
									/>
									<ProjectLink
										href={project.githubLink}
										target="_blank"
										rel="noopener noreferrer"
									>
										Code
									</ProjectLink>
								</ProjectButtons>
							</ProjectHeader>

							<Descriptions>
								<Description>{project.description1}</Description>
								<Description>{project.description2}</Description>
								<Technologies>
									{project.frontend.map((language, index) => (
										<TechnologyFrontEnd key={index}>
											{language}
										</TechnologyFrontEnd>
									))}
								</Technologies>
								<Technologies>
									{project.backend.map((language, index) => (
										<TechnologyBackEnd key={index}>
											{language}
										</TechnologyBackEnd>
									))}
								</Technologies>
							</Descriptions>
						</ProjectContainer>
					</Items>
				))}
			</>
		);
	}
}

export default FullStack;
