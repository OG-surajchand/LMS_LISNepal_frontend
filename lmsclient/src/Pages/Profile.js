import React, { useEffect, useState } from "react";
import TopHeader from "../Components/TopHeader";
import SidebarComponent from "../Components/Sidebar";
import FooterComponent from "../Components/Footer";
import Information from "../Components/Information";
import Training from "../Components/Training";
import Projects from "../Components/Projects";
import SkillMatrix from "../Components/SkillMatrix";
import "antd/dist/antd.css";
import { Layout, Menu } from "antd";
import {
  FileTextOutlined,
  SolutionOutlined,
  LaptopOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const { Content } = Layout;

const Profile = () => {
  const [current, setCurrent] = useState("information");

  const [data, setdata] = useState("");

  const handleClick = (e) => {
    setCurrent(e.key);
  };
  const render_component = () => {
    switch (current) {
      case "information":
        return <Information />;
      case "training":
        return <Training />;
      case "projects":
        return <Projects />;
      case "skillmatrix":
        return <SkillMatrix />;
    }
  };
  return (
    <>
      <Layout>
        <TopHeader title="Resource Profile" />
        <Layout>
          <SidebarComponent />
          <Content style={{ margin: "20px 16px 0px 220px" }}>
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 600 }}
            >
              <div className="profile-data" selectedKeys={current}>
                <Menu
                  onClick={handleClick}
                  selectedKeys={current}
                  mode="horizontal"
                >
                  <Menu.Item key="information" icon={<SolutionOutlined />}>
                    My Information
                  </Menu.Item>
                  <Menu.Item key="training" icon={<FileTextOutlined />}>
                    Training
                  </Menu.Item>
                  <Menu.Item key="projects" icon={<LaptopOutlined />}>
                    Projects
                  </Menu.Item>
                  <Menu.Item key="skillmatrix" icon={<SettingOutlined />}>
                    Skill Matrix
                  </Menu.Item>
                </Menu>
                <div className="body-content">{render_component()}</div>
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
