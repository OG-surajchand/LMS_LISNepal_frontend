import React, { useState } from "react";
import TopHeader from "../Components/TopHeader";
import SidebarComponent from "../Components/Sidebar";
import FooterComponent from "../Components/Footer";
import "antd/dist/antd.css";
import { Layout } from "antd";
import { Menu } from "antd";
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const { SubMenu } = Menu;
const { Content } = Layout;

const Profile = () => {
  const [current, setcurrent] = useState("mail");

  const handleClick = (e) => {
    setcurrent({ current: e.key });
  };
  return (
    <>
      <Layout>
        <TopHeader />
        <Layout>
          <SidebarComponent />
          <Content style={{ margin: "20px 16px 0px 220px" }}>
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 600 }}
            >
              <div className="profile-data">
                <Menu
                  onClick={this.handleClick}
                  selectedKeys={[current]}
                  mode="horizontal"
                >
                  <Menu.Item key="mail" icon={<MailOutlined />}>
                    Navigation One
                  </Menu.Item>
                  <Menu.Item key="app" disabled icon={<AppstoreOutlined />}>
                    Navigation Two
                  </Menu.Item>
                  <SubMenu
                    key="SubMenu"
                    icon={<SettingOutlined />}
                    title="Navigation Three - Submenu"
                  >
                    <Menu.ItemGroup title="Item 1">
                      <Menu.Item key="setting:1">Option 1</Menu.Item>
                      <Menu.Item key="setting:2">Option 2</Menu.Item>
                    </Menu.ItemGroup>
                    <Menu.ItemGroup title="Item 2">
                      <Menu.Item key="setting:3">Option 3</Menu.Item>
                      <Menu.Item key="setting:4">Option 4</Menu.Item>
                    </Menu.ItemGroup>
                  </SubMenu>
                  <Menu.Item key="alipay">
                    <a
                      href="https://ant.design"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Navigation Four - Link
                    </a>
                  </Menu.Item>
                </Menu>
              </div>
            </div>
          </Content>
          <FooterComponent />
        </Layout>
      </Layout>
    </>
  );
};

export default Profile;
