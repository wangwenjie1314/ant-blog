import '../common/lib';
import App from '../component/App';
import About from '../component/About';
import { render } from 'react-dom';
import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="about" component={About}/>
      <Route path="*" component={App}/>
    </Route>
  </Router>
), document.getElementById('react-content'));

//ReactDOM.render(<App />, document.getElementById('react-content'));
