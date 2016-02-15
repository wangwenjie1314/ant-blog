import React from 'react';
import { Link } from 'react-router';
import { Button } from 'antd';

import './blog';//引入less

const BlogList = React.createClass({
  render() {
    return (
    	<div>
    		<Link to="/blog/add"><Button type="primary">新增博客</Button></Link>
    		<div>这里是list</div>
    		
    	</div>
    );
  },
});

export default BlogList;