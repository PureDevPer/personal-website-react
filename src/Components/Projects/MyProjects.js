import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
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
	padding: 0px 20px;
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

const ProjectDeployLink = styled.a`
	outline: none;
	font-size: 16px;
	font-weight: 600;
	padding: 5px;
	color: ${props => props.theme.darkGreyColor};
	border: 2px solid ${props => props.theme.darkGreyColor};
	border-radius: 5px;
	margin-right: 5px;
	text-transform: uppercase;
	transition: all 0.4s ease-in;

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

class MyProjects extends Component {
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
		const { section, projectInfo } = this.props;
		return (
			<>
				<SubIntro>{section}</SubIntro>
				{projectInfo.map((project, index) => (
					<Items key={index}>
						<ImageContainer>
							<Image src={project.imageLink} />
						</ImageContainer>
						<ProjectContainer>
							<ProjectHeader>
								<Title>{project.title}</Title>
								<ProjectButtons>
									{project.isYoutube && (
										<>
											<ProjectButton onClick={this.openModal}>
												Demo
											</ProjectButton>
											<Modal
												youtubeID={project.youtube}
												isOpen={this.state.isModalOpen}
												close={this.closeModal}
											/>
										</>
									)}
									{project.isDeployed && (
										<ProjectDeployLink
											href={project.deployedLink}
											target="_blank"
											rel="noopener noreferrer"
										>
											Demo
										</ProjectDeployLink>
									)}
									{project.isGithubLink && (
										<ProjectLink
											href={project.githubLink}
											target="_blank"
											rel="noopener noreferrer"
										>
											Code
										</ProjectLink>
									)}
								</ProjectButtons>
							</ProjectHeader>

							<Descriptions>
								<Description>{project.description1}</Description>
								{project.isDescription2 && (
									<Description>{project.description2}</Description>
								)}
								<Technologies>
									{project.frontend.map((language, index) => (
										<TechnologyFrontEnd key={index}>
											{language}
										</TechnologyFrontEnd>
									))}
								</Technologies>
								<Technologies>
									{project.isBackend &&
										project.backend.map((language, index) => (
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

MyProjects.propTypes = {
	section: PropTypes.string.isRequired,
	projectInfo: PropTypes.arrayOf(
		PropTypes.shape({
			imageLink: PropTypes.string.isRequired,
			title: PropTypes.string.isRequired,
			isYoutube: PropTypes.bool.isRequired,
			youtube: PropTypes.string,
			isDeployed: PropTypes.bool.isRequired,
			deployedLink: PropTypes.string,
			isGithubLink: PropTypes.bool.isRequired,
			githubLink: PropTypes.string,
			description1: PropTypes.string.isRequired,
			isDescription2: PropTypes.bool.isRequired,
			description2: PropTypes.string,
			frontend: PropTypes.arrayOf(PropTypes.string).isRequired,
			isBackend: PropTypes.bool.isRequired,
			backend: PropTypes.arrayOf(PropTypes.string)
		})
	).isRequired
};

export default MyProjects;
