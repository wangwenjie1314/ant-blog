import React from 'react';
import Header from './common/header';
import Footer from './common/footer';
import Home from './Home';

const App = React.createClass({
  render() {
    return (
    	<div>
	        <Header />
	  	    <div className="clearfix" style={{ minHeight:500,paddingTop:20 }}>
	  	    	{this.props.children || <Home/>}
	  	    </div>
	      	<Footer />
	    </div>
    );
  }
});

export default App;