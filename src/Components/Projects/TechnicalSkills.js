import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Skills = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-bottom: 40px;
`;

const Intro = styled.span`
	margin-bottom: 20px;
	text-transform: uppercase;
	font-size: 12px;
	font-weight: 600;
	color: ${props => props.theme.darkGreyColor};
	border: 2px solid ${props => props.theme.darkGreyColor};
	border-radius: 5px;
	padding: 10px 15px;
`;

const Icons = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	width: 80%;
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
	margin-bottom: 10px;
`;

const TechnicalSkills = ({ stack, skillInfo }) => {
	return (
		<Skills>
			<Intro>{stack}</Intro>
			<Icons>
				{skillInfo.map((info, index) => (
					<Icon key={index}>
						<Picture src={info.url} />
						<Caption>{info.language}</Caption>
					</Icon>
				))}
			</Icons>
		</Skills>
	);
};

TechnicalSkills.propTypes = {
	stack: PropTypes.string.isRequired,
	skillInfo: PropTypes.arrayOf(
		PropTypes.shape({
			language: PropTypes.string.isRequired,
			url: PropTypes.string.isRequired
		})
	).isRequired
};

export default TechnicalSkills;
