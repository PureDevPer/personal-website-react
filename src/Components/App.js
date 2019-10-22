import React, { Component } from 'react';
import GlobalStyles from '../Styles/GlobalStyles';
import Theme from '../Styles/Theme';
import { ThemeProvider } from 'styled-components';
import Footer from './Footer';

class App extends Component {
	render() {
		return (
			<ThemeProvider theme={Theme}>
				<>
					<GlobalStyles />
					<h1>Hello</h1>
					<Footer />
				</>
			</ThemeProvider>
		);
	}
}

export default App;
