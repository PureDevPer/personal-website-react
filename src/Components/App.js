import React, { Component } from 'react';
import GlobalStyles from '../Styles/GlobalStyles';
import Theme from '../Styles/Theme';
import { ThemeProvider } from 'styled-components';
import Footer from './Footer';
import Landing from './Landing';

class App extends Component {
	render() {
		return (
			<ThemeProvider theme={Theme}>
				<>
					<GlobalStyles />
					<Landing />
					<Footer />
				</>
			</ThemeProvider>
		);
	}
}

export default App;
