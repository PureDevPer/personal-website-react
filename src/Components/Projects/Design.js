import React from 'react';
import styled from 'styled-components';
import { DESIGN_UI } from './ProjectList';

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
	flex-wrap: wrap;
	justify-content: space-around;
	align-items: center;
	margin-bottom: 40px;
	width: 100%;
	max-width: ${props => props.theme.maxWidth};
	padding: 0px 10px;
`;

const Item = styled.div`
	justify-content: center;
	align-items: center;
	margin-bottom: 30px;
`;

const Image = styled.img`
	width: 200px;
	height: 200px;
	border-radius: 10px;
	box-shadow: 5px 10px 18px #888888;
	transition: all 0.3s ease-in-out;

	&:hover {
		transform: scale(1.2) translateY(-5px);
	}
`;

const Design = () => {
	return (
		<>
			<SubIntro>Design (UI)</SubIntro>
			<Items>
				{DESIGN_UI.map((project, index) => (
					<Item key={index}>
						<a href={project.demo} target="_blank" rel="noopener noreferrer">
							<Image src={project.imageLink} />
						</a>
					</Item>
				))}
			</Items>
		</>
	);
};

export default Design;
