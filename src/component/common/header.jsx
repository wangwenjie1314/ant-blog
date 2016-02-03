import React from 'react';
import { Link } from 'react-router';
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const Header = React.createClass({
  getInitialState() {
    return {
      current: 'home'
    };
  },
  handleClick(e) {
    //console.log('click ', e);
    this.setState({
      current: e.key
    });
  },
  render() {
    return (
      <Menu onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        theme={this.state.theme}
        mode="horizontal">
        <Menu.Item key="home">
          <Link to="/"><Icon type="home" />首页</Link>
        </Menu.Item>
        <Menu.Item key="mail">
          <Link to="/about"><Icon type="mail" />关于我们</Link>
        </Menu.Item>
      </Menu>
    );
  }
});

export default Header;