import React from 'react';
import Header from './common/header';
import Footer from './common/footer';
import Home from './Home';
import { QueueAnim } from 'antd';

const App = React.createClass({
  render() {
    return (
    	<QueueAnim delay={500}>
	        <Header key="a"/>
	  	    <div key="b" className="clearfix" style={{ minHeight:500,paddingTop:20 }}>
	  	    	{this.props.children || <Home/>}
	  	    </div>
	      	<Footer key="c"/>
	    </QueueAnim>
    );
  }
});

export default App;