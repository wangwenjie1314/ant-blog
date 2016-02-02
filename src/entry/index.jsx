import '../common/lib';

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory, browserHistory, Link ,IndexRoute } from 'react-router';

import App from '../component/App';
import Home from '../component/Home';
import About from '../component/About';
import AboutHome from '../component/About/index';
import AboutMe from '../component/About/me';

render((
	<Router history={hashHistory}>
    	<Route path="/" component={App}>
        <IndexRoute component={Home} />
	      <Route path="about" component={About}>
	      	<IndexRoute component={AboutHome} />
	      	<Route path="me" component={AboutMe} />
	      </Route>
	      <Route path="*" component={App} />
	    </Route>
  	</Router>
), document.getElementById('react-content'));