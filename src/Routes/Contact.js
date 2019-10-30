import React from 'react';
import Helmet from 'react-helmet';
import Contacts from '../Components/Contact';

const Contact = () => {
	return (
		<>
			<Helmet>
				<title>Contacts | Wooseok</title>
			</Helmet>
			<Contacts />
		</>
	);
};

export default Contact;
