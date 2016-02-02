import React from 'react';
import Header from './common/header';
import Footer from './common/footer';

const App = React.createClass({
  render() {
    return (
    	<div>
	        <Header />
	  	    <div className="clearfix" style={{ minHeight:500 }}>{this.props.children}</div>
	      	<Footer />
	    </div>
    );
  }
});

export default App;