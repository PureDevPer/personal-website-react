import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Header = styled.header`
	width: 100%;
	border: 0;
	position: fixed;
	top: 0;
	left: 0;
	background-color: ${props => props.theme.blackColor};
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 25px 0px;
	z-index: 9;
`;

const HeaderWrapper = styled.div`
	width: 100%;
	max-width: ${props => props.theme.maxWidth};
	display: flex;
	justify-content: space-evenly;
`;

const HeaderLink = styled(Link)`
	color: white;
	font-weight: 600;
	text-transform: uppercase;
	font-size: 20px;
`;

export default () => {
	return (
		<Header>
			<HeaderWrapper>
				<HeaderLink to="/">Home</HeaderLink>
				<HeaderLink to="/projects">Projects</HeaderLink>
				<HeaderLink to="/contact">Contact</HeaderLink>
			</HeaderWrapper>
		</Header>
	);
};
