import React from 'react';
import Sider from './common/sider';
import Crumb from './common/crumb';
import AboutHome from './About/index';

const About = React.createClass({
  render() {
    return (
    	<div>
	        <Sider />
	        <Crumb />
	  	    {this.props.children || <AboutHome/>}
	    </div>
    );
  },
});

export default About;
