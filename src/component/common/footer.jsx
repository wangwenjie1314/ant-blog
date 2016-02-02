import React from 'react';
import { Link } from 'react-router';

//css
const dark = 'hsl(200, 20%, 20%)'
const light = '#fff'
const styles = {}
styles.footer = {
  padding: '15px 20px',
  background: dark,
  color: light,
  borderTop:'1px solid #ddd'
}
styles.footer.p = {
	textAlign:'center'
}

const Footer = React.createClass({
	render() {
    	return (
    		<div style={styles.footer}>
    			<p style={styles.footer.p}>这里是底部</p>
    		</div>
    	)
   	}
});

export default Footer;