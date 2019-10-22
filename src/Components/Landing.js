import React from 'react';
import styled, { keyframes, css } from 'styled-components';

const LandingAnimation = keyframes`
    50% {
		transform: scale(2);
	}
	100% {
		transform: scale(1);
	}
`;

const LandingPage = styled.div`
	width: 100%;
	height: 100vh;
	background: #000;
	position: relative;
	overflow: hidden;

	&::after {
		content: '';
		position: absolute;
		width: 100%;
		height: 100%;
		background: url(https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)
			no-repeat;
		background-size: cover;
		opacity: 0.3;
		${props => {
			return css`
				animation: ${LandingAnimation} 25s linear infinite;
			`;
		}};
	}
`;

const PageContent = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 1;
	width: 100%;
	max-width: 800px;
	text-align: center;
	padding: 0 40px;
`;

const PageHeader = styled.p`
	color: ${props => props.theme.lightRedColor};
	text-transform: uppercase;
	font-size: 50px;
	font-weight: 700;
	margin-bottom: 20px;
`;

const PageText = styled.p`
	font-weight: 600;
	font-size: 25px;
	color: white;
`;

export default () => (
	<LandingPage>
		<PageContent>
			<PageHeader>Wooseok Kim</PageHeader>
			<PageText>Software Engineer</PageText>
		</PageContent>
	</LandingPage>
);
