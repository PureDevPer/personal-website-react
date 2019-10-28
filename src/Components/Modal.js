import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import YouTube from 'react-youtube';

const ModalOverLay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	background-color: rgba(0, 0, 0, 0.7);
`;

const Container = styled.div`
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 50%;
	border-radius: 10px;
	background-color: white;
	box-shadow: 0px 4px 9px rgba(255, 255, 255, 0.7);
`;

const Items = styled.div`
	justify-content: center;
	align-items: center;
	width: 100%;
	padding: 20px;
`;

const Item = styled(YouTube)`
	width: 100%;
`;

const ButtonWrap = styled.div`
	width: 100%;
	padding: 0px 50px 20px 50px;
`;

const Button = styled.button`
	width: 100%;
	max-width: ${props => props.theme.maxWidth};
	padding: 10px;
	border-radius: 20px;
	outline: none;
	font-weight: 600;
	font-size: 16px;
	color: ${props => props.theme.darkGreyColor};
	border: 1px solid rgb(204, 204, 204);
	text-transform: uppercase;
	transition: all 0.4s ease-in-out;
	cursor: pointer;

	&:hover {
		background-color: ${props => props.theme.lightRedColor};
		color: white;
		border-color: ${props => props.theme.lightRedColor};
	}
	&:focus {
		outline: none;
	}
`;

class Modal extends Component {
	render() {
		const { isOpen, close } = this.props;
		const opts = {
			height: '315',
			width: '560',
			playerVars: {
				autoplay: 1
			}
		};

		return (
			<>
				{isOpen ? (
					<>
						<ModalOverLay />
						<Container>
							<Items>
								<Item videoId="QcQEY0r8pIQ" opts={opts} />
							</Items>
							<ButtonWrap>
								<Button onClick={close}> Close </Button>
							</ButtonWrap>
						</Container>
					</>
				) : null}
			</>
		);
	}
}

Modal.propTypes = {
	isOpen: PropTypes.bool,
	close: PropTypes.func
};

export default Modal;
