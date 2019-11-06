import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import Aheader from '../../component/Aheader/Aheader'
import Atabel from '../../component/Atabel/Atabel'
import Acomplaint from '../Acomplaint/Acomplaint'
import Weekly from '../Weekly/Weekly'
import Vip from '../Vip/Vip'
const { SubMenu } = Menu;
const { Sider } = Layout;



export default class Alayout extends React.Component{
  render() {
    return (  
      <Router>
        <Layout>
          <Aheader />
          <Layout>
            <Sider width={200} style={{ background: '#fff' }}>
              <Menu
                mode="inline"
                // defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%', borderRight: 0 }}>
                <SubMenu
                  key="sub1"
                  title={
                    <span>
                      <Icon type="user" />
                      后台系统
                    </span>
                  }>
                  <Menu.Item key="1">
                    <Link to="/Acomplaint">技术问题</Link>
                  </Menu.Item>
                  <Menu.Item key="2">
                    <Link to="/Atabel">表格</Link>
                  </Menu.Item>
                  <Menu.Item key="3">
                    <Link to="/Weekly">学员周报</Link>
                  </Menu.Item>
                  <Menu.Item key="4">
                    <Link to="/Vip">VIP</Link>
                  </Menu.Item>
                </SubMenu>
                <SubMenu
                  key="sub2"
                  title={
                    <span>
                      <Icon type="laptop" />
                      subnav 2
                    </span>
                  }>
                  <Menu.Item key="5">option5</Menu.Item>
                  <Menu.Item key="6">option6</Menu.Item>
                  <Menu.Item key="7">option7</Menu.Item>
                  <Menu.Item key="8">option8</Menu.Item>
                </SubMenu>
                <SubMenu
                  key="sub3"
                  title={
                    <span>
                      <Icon type="notification" />
                      subnav 3
                    </span>
                  }>
                  <Menu.Item key="9">option9</Menu.Item>
                  <Menu.Item key="10">option10</Menu.Item>
                  <Menu.Item key="11">option11</Menu.Item>
                  <Menu.Item key="12">option12</Menu.Item>
                </SubMenu>
              </Menu>
            </Sider>

            <Layout style={{ padding: '0 24px 24px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
              </Breadcrumb>
              <Switch>
                <Route path='/Acomplaint'>
                  <Acomplaint />
                </Route>
                <Route path='/Atabel'>
                  <Atabel />
                </Route>
                <Route path='/Weekly'>
                  <Weekly />
                </Route>
                <Route path='/Vip'>
                  <Vip />
                </Route>
              </Switch>
              {/* 重定向，默认显示哪一个页面 */}
              <Redirect to="/Acomplaint" />
            </Layout>
          </Layout>
        </Layout>,
      </Router>
    )
  }
}