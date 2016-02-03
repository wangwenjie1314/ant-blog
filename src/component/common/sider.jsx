import React from 'react';
import { Link } from 'react-router';
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const Sider = React.createClass({
  getInitialState() {
    return {
      current: '1'
    };
  },
  handleClick(e) {
    console.log('click ', e);
    this.setState({
      current: e.key
    });
  },
  render() {
    return (
      <Menu onClick={this.handleClick}
        style={{ width: 240 , float :'left', marginRight:20}}
        defaultOpenKeys={['sub1']}
        selectedKeys={[this.state.current]}
        mode="inline">
        <SubMenu key="sub1" title={<span><Icon type="mail" /><span>About</span></span>}>
          <Menu.Item key="5"><Link to='/about'>Home</Link></Menu.Item>
          <Menu.Item key="6"><Link to='/about/me'>Me</Link></Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>导航二</span></span>}>
          <SubMenu key="sub3" title="三级导航">
            <Menu.Item key="7">选项7</Menu.Item>
            <Menu.Item key="8">选项8</Menu.Item>
          </SubMenu>
        </SubMenu>
        <SubMenu key="sub4" title={<span><Icon type="setting" /><span>导航三</span></span>}>
          <Menu.Item key="9">选项9</Menu.Item>
          <Menu.Item key="10">选项10</Menu.Item>
          <Menu.Item key="11">选项11</Menu.Item>
          <Menu.Item key="12">选项12</Menu.Item>
        </SubMenu>
      </Menu>
    );
  }
});

export default Sider;