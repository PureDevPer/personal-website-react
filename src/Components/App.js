import React, { Component } from 'react';
import GlobalStyles from '../Styles/GlobalStyles';
import Theme from '../Styles/Theme';
import { ThemeProvider } from 'styled-components';

class App extends Component {
	render() {
		return (
			<ThemeProvider theme={Theme}>
				<>
					<GlobalStyles />
					<h1>Hello</h1>
				</>
			</ThemeProvider>
		);
	}
}

export default App;
