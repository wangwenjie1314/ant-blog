import React from 'react';
import { Link } from 'react-router';
import { Breadcrumb } from 'antd';


const Crumb = React.createClass({
	render() {
    	return (
    		<div style={{ padding:'20px 0'}}>
    			<Breadcrumb>
				    <Breadcrumb.Item>首页</Breadcrumb.Item>
				    <Breadcrumb.Item>xxx</Breadcrumb.Item>
				</Breadcrumb>
    		</div>
    	)
   	}
});

export default Crumb;

