import React from 'react';
import { Link } from 'react-router';
import { Row, Col,Button,Table } from 'antd';

import './blog';//引入less

const columns = [{
  title: '姓名',
  dataIndex: 'name',
  render: function (text) {
    return <a href="#">{text}</a>;
  }
}, {
  title: '年龄',
  dataIndex: 'age'
}, {
  title: '住址',
  dataIndex: 'address'
}];

const data = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    name: '李大嘴' + i,
    age: 32,
    address: '西湖区湖底公园' + i + '号'
  });
}

const pagination = {
  total: data.length,
  current: 1,
  showSizeChanger: true,
  onShowSizeChange: function (current, pageSize) {
    console.log('Current: ', current, '; PageSize: ', pageSize);
  },
  onChange: function (current) {
    console.log('Current: ', current);
  }
};

const BlogList = React.createClass({
  render() {
    return (
    	<div>
    		<Row type="flex" justify="center">
				<Col span="4">
					<Link to="/blog/add"><Button type="primary">新增博客form1</Button></Link>
				</Col>
				<Col span="4">
					<Link to="/blog/add2"><Button type="primary">新增博客form2</Button></Link>
				</Col>
		    </Row>
    		<Table columns={columns} dataSource={data} pagination={pagination} />
    	</div>
    );
  },
});

export default BlogList;