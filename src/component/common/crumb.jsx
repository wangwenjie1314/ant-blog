import React from 'react';
import { Link } from 'react-router';
import { Breadcrumb } from 'antd';


const Crumb = React.createClass({
	render() {
    	return (
    		<div style={{ padding:'20px 0'}}>
    			<Breadcrumb>
				    <Breadcrumb.Item>首页</Breadcrumb.Item>
				    <Breadcrumb.Item href="">应用中心</Breadcrumb.Item>
				    <Breadcrumb.Item href="">应用列表</Breadcrumb.Item>
				    <Breadcrumb.Item>某应用</Breadcrumb.Item>
				</Breadcrumb>
    		</div>
    	)
   	}
});

export default Crumb;

