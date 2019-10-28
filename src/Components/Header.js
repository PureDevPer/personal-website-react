import React from 'react';
import styled from 'styled-components';
import { Link, withRouter } from 'react-router-dom';

const Header = styled.header`
	width: 100%;
	border: 0;
	position: fixed;
	top: 0;
	left: 0;
	background-color: #1f2329;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 60px;
	z-index: 8;
`;

const HeaderWrapper = styled.ul`
	width: 100%;
	max-width: ${props => props.theme.maxWidth};
	height: 100%;
	display: flex;
	justify-content: space-evenly;
`;

const HeaderItem = styled.li`
	padding-top: 20px;
	border-bottom: 4px solid
		${props => (props.current ? props.theme.lightRedColor : 'transparent')};
	transition: border-bottom 0.4s ease-in-out;
`;

const HeaderLink = styled(Link)`
	color: white;
	font-weight: 600;
	text-transform: uppercase;
	font-size: 22px;

	&:hover {
		color: ${props => props.theme.lightRedColor};
	}
`;

export default withRouter(({ location: { pathname } }) => (
	<Header>
		<HeaderWrapper>
			<HeaderItem current={pathname === '/'}>
				<HeaderLink to="/">Home</HeaderLink>
			</HeaderItem>
			<HeaderItem current={pathname === '/projects'}>
				<HeaderLink to="/projects">Projects</HeaderLink>
			</HeaderItem>
			<HeaderItem current={pathname === '/contact'}>
				<HeaderLink to="/contact">Contact</HeaderLink>
			</HeaderItem>
		</HeaderWrapper>
	</Header>
));
