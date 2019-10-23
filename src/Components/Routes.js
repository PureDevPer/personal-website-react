import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../Routes/Home';
import Projects from '../Routes/Projects';
import Contact from '../Routes/Contact';

const Routes = () => {
	return (
		<Switch>
			<Route exact path="/" component={Home} />
			<Route path="/projects" component={Projects} />
			<Route path="/contact" component={Contact} />
		</Switch>
	);
};

export default Routes;
