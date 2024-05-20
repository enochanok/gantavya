import React from "react";
import { Menu } from "antd";
import { NavLink } from "react-router-dom";
import {
  HomeOutlined,
  UserOutlined,
  CarOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const { SubMenu } = Menu;

function CustomMenu() {
  return (
    <Menu
      theme="dark"
      mode="inline"
      defaultSelectedKeys={["home"]}
      className="menu_bar"
    >
      <Menu.Item key="home" icon={<HomeOutlined />}>
        <NavLink to="/">Home</NavLink>
      </Menu.Item>
      <Menu.Item key="customers" icon={<UserOutlined />}>
        <NavLink to="/Users">Customers</NavLink>
      </Menu.Item>
      <Menu.Item key="vehicles" icon={<CarOutlined />}>
        <NavLink to="/Users">Vehicles</NavLink>
      </Menu.Item>
      <SubMenu key="settings" icon={<SettingOutlined />} title="Settings">
        <Menu.Item key="setting:1">
          <NavLink to="/settings/option1">Option 1</NavLink>
        </Menu.Item>
        <Menu.Item key="setting:2">
          <NavLink to="/settings/option2">Option 2</NavLink>
        </Menu.Item>
      </SubMenu>
    </Menu>
  );
}

export default CustomMenu;
