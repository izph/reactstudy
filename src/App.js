import './App.css';
import UseState from './components/ReactHook/useState/index';
import UseEffect from './components/ReactHook/useEffect/index';
import UseRef from './components/ReactHook/useRef/index';
import UseContext from './components/ReactHook/useContext/index';
import UseMemo from './components/ReactHook/useMemo/index';
import useCallback from './components/ReactHook/useCallback/index';
import UseImperativeHandle from './components/ReactHook/useImperativeHandle/index';
import UseLayoutEffect from './components/ReactHook/useLayoutEffect/index';
import UseCustomHook from './components/ReactHook/useCustomHook/index'
import UseReducer from './components/ReactHook/useReducer/index'
import { Reducer } from './components/ReactHook/combineCase/Reducer'

import { BrowserRouter, Route, Link, Switch, Redirect } from 'react-router-dom'

import { Layout, Menu, Breadcrumb } from 'antd';

import { SkinOutlined } from '@ant-design/icons';
const { SubMenu } = Menu;
const { Content, Sider } = Layout;
function App() {
  return (
    <Layout>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
          >
            <SubMenu key="sub1" icon={<SkinOutlined />} title="React Hooks Ⅰ">
              <Menu.Item key="1">
                <Link to='/usestate'>useState</Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to='/useeffect'>useEffec</Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Link to='/useref'>useRef</Link>
              </Menu.Item>
              <Menu.Item key="4">
                <Link to='/usecontext'>UseContext</Link>
              </Menu.Item>
              <Menu.Item key="5">
                <Link to='/usememo'>UseMemo</Link>
              </Menu.Item>
              <Menu.Item key="6">
                <Link to='/usecallback'>useCallback</Link>
              </Menu.Item>
              <Menu.Item key="7">
                <Link to='/useimperativehandle'>UseImperativeHandle</Link>
              </Menu.Item>

              <Menu.Item key="8">
                <Link to='/uselayouteffect'>UseLayoutEffect</Link>
              </Menu.Item>
              <Menu.Item key="9">
                <Link to='/usecustomhook'>UseCustomHook</Link>
              </Menu.Item>
              <Menu.Item key="10">
                <Link to='/usereducer'>UseReducer</Link>
              </Menu.Item>

              <Menu.Item key="11">
                <Link to='/reducer'>Reducer</Link>
              </Menu.Item>
            </SubMenu>

            <SubMenu key="sub2" icon={<SkinOutlined />} title="React Study Ⅱ">
              <Menu.Item key="8">
                <Link to='/useimperativehandle'>UseImperativeHandle</Link>
              </Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout style={{ padding: '24px' }}>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            <Switch>
              <Route path='/usestate' component={UseState} />
              <Route path='/useeffect' component={UseEffect} />
              <Route path='/useref' component={UseRef} />
              <Route path='/usecontext' component={UseContext} />
              <Route path='/usememo' component={UseMemo} />
              <Route path='/usecallback' component={useCallback} />
              <Route path='/useimperativehandle' component={UseImperativeHandle} />
              <Route path='/uselayouteffect' component={UseLayoutEffect} />
              <Route path='/usecustomhook' component={UseCustomHook} />
              <Route path='/usereducer' component={UseReducer} />
              <Route path='/reducer' component={Reducer} />
              {/* <Route path='/useimperativehandle' component={UseImperativeHandle} /> */}
              {/* <Redirect to='/usestate' /> */}
            </Switch>

          </Content>
        </Layout>
      </Layout>
    </Layout>

  );
}

export default App;
