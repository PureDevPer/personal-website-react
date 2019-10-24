import React from 'react';
import { Email, Github, LinkedIn } from './Icons';
import styled from 'styled-components';

const Footer = styled.footer`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	background-color: #e9ebee;
	padding: 70px;
	width: 100%;
`;

const Icons = styled.ul`
	display: flex;
`;

const Icon = styled.li`
	font-size: 18px;
	margin-bottom: 30px;
	transition: all 0.4s ease-in-out;

	&:not(:last-child) {
		margin-right: 20px;
	}
	&:hover {
		transform: scale(1.2) translateY(-5px);
	}
`;

const Link = styled.a`
	color: ${props => props.theme.darkGreyColor};
	transition: all 0.4s ease-in-out;

	&:hover {
		color: ${props => props.theme.lightRedColor};
		transform: scale(1.2) translateY(-5px);
	}
`;

const Copyright = styled.span`
	color: ${props => props.theme.lightGreyColor};
	font-weight: 600;
	font-size: 12px;
`;

export default () => (
	<Footer>
		<Icons>
			<Icon>
				<Link href="https://github.com/PureDevPer" target="_blank">
					<Github />
				</Link>
			</Icon>
			<Icon>
				<Link href="https://www.linkedin.com/in/wooseok-kim/" target="_blank">
					<LinkedIn />
				</Link>
			</Icon>
			<Icon>
				<Link href="mailto:kim.wooseok1207@gmail.com">
					<Email />
				</Link>
			</Icon>
		</Icons>
		<Copyright>&copy; {new Date().getFullYear()} Wooseok Kim</Copyright>
	</Footer>
);
