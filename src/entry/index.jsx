import '../common/lib';

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, Link ,IndexRoute } from 'react-router';

import App from '../component/App';
import Home from '../component/Home';
import About from '../component/About';


render((
	<Router history={browserHistory}>
    	<Route path="/" component={App}>
        <IndexRoute component={Home}/>
	      <Route path="about" component={About}/>
	      <Route path="*" component={App}/>
	    </Route>
  	</Router>
), document.getElementById('react-content'));