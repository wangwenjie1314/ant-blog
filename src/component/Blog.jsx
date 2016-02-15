import React from 'react';
import BlogList from './blog/list';

const Blog = React.createClass({
  render() {
    return (
    	<div>
	  	    {this.props.children || <BlogList/>}
	    </div>
    );
  },
});

export default Blog;
