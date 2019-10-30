import React from 'react';
import Helmet from 'react-helmet';
import Landing from '../Components/Landing';
import Introduction from '../Components/Introduction';

const Home = () => {
	return (
		<>
			<Helmet>
				<title>Home | Wooseok</title>
			</Helmet>
			<Landing />
			<Introduction />
		</>
	);
};

export default Home;
