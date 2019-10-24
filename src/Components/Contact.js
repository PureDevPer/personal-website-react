import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	color: ${props => props.theme.blackColor};
`;

const ContainerWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	max-width: ${props => props.theme.maxWidth};
	padding: 0px 20px;
	letter-spacing: 2px;
`;

const Intro = styled.span`
	font-size: 24px;
	font-weight: 600;
	margin: 40px 0px;
	text-transform: uppercase;
`;

const EmailForm = styled.form`
	margin-bottom: 80px;
	width: 100%;
`;

const Items = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;

	&:not(:last-child) {
		margin-bottom: 20px;
	}
`;

const ItemLabel = styled.label`
	width: 80%;
	max-width: ${props => props.theme.maxWidth};
	margin-bottom: 10px;
`;

const ItemInput = styled.input`
	margin-bottom: 35px;
	padding: 10px;
	width: 80%;
	max-width: ${props => props.theme.maxWidth};
	border-radius: 4px;
	border: 1px solid rgb(204, 204, 204);
	transition: border 0.3s ease-in-out;

	&:focus {
		outline: none;
		border: 1px solid rgb(85, 85, 85);
	}
`;

const ItemTextArea = styled.textarea`
	margin-bottom: 35px;
	padding: 10px;
	width: 80%;
	max-width: ${props => props.theme.maxWidth};
	height: 200px;
	border-radius: 4px;
	border: 1px solid rgb(204, 204, 204);
	transition: all 0.5s ease-in-out;

	&:focus {
		outline: none;
		border: 1px solid rgb(85, 85, 85);
		box-shadow: 5px 10px 15px #888888;
	}
`;

const ItemButton = styled.button`
	width: 40%;
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

	&:hover {
		background-color: ${props => props.theme.lightRedColor};
		color: white;
		border-color: ${props => props.theme.lightRedColor};
	}
`;

const Contact = () => {
	return (
		<Container>
			<ContainerWrapper>
				<Intro>Get In Touch</Intro>
				<EmailForm
					method="POST"
					action="https://formspree.io/kim.wooseok1207@gmail.com"
				>
					<Items>
						<ItemLabel>Name</ItemLabel>
						<ItemInput
							type="text"
							name="name"
							placeholder="Your Name..."
							required={true}
						/>

						<ItemLabel>Email</ItemLabel>
						<ItemInput
							type="email"
							name="email"
							placeholder="Your Email..."
							required={true}
						/>

						<ItemLabel>Subject</ItemLabel>
						<ItemInput
							type="text"
							name="subject"
							placeholder="Subject..."
							required={true}
						/>

						<ItemLabel>Message</ItemLabel>
						<ItemTextArea
							name="message"
							placeholder="Message..."
							required={true}
						></ItemTextArea>

						<ItemButton type="submit">Send</ItemButton>
					</Items>
				</EmailForm>
			</ContainerWrapper>
		</Container>
	);
};

export default Contact;
