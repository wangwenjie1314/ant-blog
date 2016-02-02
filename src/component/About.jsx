import React from 'react';
import Sider from './common/sider';
import Crumb from './common/crumb';

const About = React.createClass({
  render() {
    return (
    	<div>
	        <Sider />
	        <Crumb />
	  	    {this.props.children}
	    </div>
    );
  },
});

export default About;
