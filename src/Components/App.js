import React, { Component } from 'react';
import GlobalStyles from '../Styles/GlobalStyles';
import Theme from '../Styles/Theme';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import Routes from './Routes';

class App extends Component {
	render() {
		return (
			<ThemeProvider theme={Theme}>
				<>
					<GlobalStyles />
					<Router>
						<Header />
						<Routes />
					</Router>
					<Footer />
				</>
			</ThemeProvider>
		);
	}
}

export default App;
