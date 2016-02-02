import React from 'react';
import { DatePicker,Button } from 'antd';

const Home = React.createClass({
  render() {
    return (
    	<div>
    		<DatePicker />
    		<p>
    			<Button type="primary">主按钮</Button>
				<Button>次按钮</Button>
				<Button type="ghost">幽灵按钮</Button>
				<Button type="dashed">虚线按钮</Button>
    		</p>
    	</div>
    );
  }
});

export default Home;
