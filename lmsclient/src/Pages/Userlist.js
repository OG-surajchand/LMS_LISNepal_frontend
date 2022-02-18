import React, { useState } from "react";
import TopHeader from "../Components/TopHeader";
import SidebarComponent from "../Components/Sidebar";
import FooterComponent from "../Components/Footer";
import "antd/dist/antd.css";
import { Layout, Button, Table } from "antd";
import { Input, Space } from "antd";
import { Link } from "react-router-dom";


const { Search } = Input;
const { Content } = Layout;
function UserList() {
    const dataSource = [
        {
          key: '1',
          name: 'Mike',
          age: 32,
          address: '10 Downing Street',
        },
        {
          key: '2',
          name: 'John',
          age: 42,
          address: '10 Downing Street',
        },
        {
            key: '2',
            name: 'John',
            age: 42,
            address: '10 Downing Street',
          },
          {
            key: '2',
            name: 'John',
            age: 42,
            address: '10 Downing Street',
          },
          {
            key: '2',
            name: 'John',
            age: 42,
            address: '10 Downing Street',
          },
          {
            key: '2',
            name: 'John',
            age: 42,
            address: '10 Downing Street',
          },
          {
            key: '2',
            name: 'John',
            age: 42,
            address: '10 Downing Street',
          },
          {
            key: '2',
            name: 'John',
            age: 42,
            address: '10 Downing Street',
          },
          {
            key: '2',
            name: 'John',
            age: 42,
            address: '10 Downing Street',
          },
      ];
      
      const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Age',
          dataIndex: 'age',
          key: 'age',
        },
        {
          title: 'Address',
          dataIndex: 'address',
          key: 'address',
        },
      ];

  const handleSearch = () =>{
    console.log("Searching");
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
              <div
                className="userlist-top"
                style={{ display: "flex", "justify-content": "space-between" }}
              >
                <Search
                  placeholder="Search Employee by name"
                  onSearch={handleSearch}
                  enterButton
                  style={{ width: "30%" }}
                />
                <Link to="/register">
                  <p>
                    <Button style={{ color: "#219f94" }}>
                      Create an Employee
                    </Button>
                  </p>
                </Link>
              </div>
              <div className="userlist-bottom">
                <Table
                  columns={columns}
                  dataSource={dataSource}
                  pagination={{ pageSize: 50 }}
                  scroll={{ y: 350 }}
                />
              </div>
            </div>
          </Content>
          <FooterComponent />
        </Layout>
      </Layout>
    </>
  );
}

export default UserList;
