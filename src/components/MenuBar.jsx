import React from "react";
import { Menu, Image, Typography } from "antd";
import { Link } from "react-router-dom";
import Logo from "../assets/Message assets/logo.svg";
const loginUrl = import.meta.env.VITE_LOGIN_URL;
const { Text } = Typography;

console.log(loginUrl);
const MenuBar = () => {
  return (
    <Menu
      mode="horizontal"
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        justifyContent: "center",
      }}
    >
      <Menu.Item>
        <Link to={"home"}>
          <Image src={Logo} width={40} preview={false} />
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link to={"messages"}>
          <Text strong>Messages </Text>
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link to={"contacts"}>
          <Text strong>Contacts</Text>
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link to={"categories"}>
          <Text strong>Categories</Text>
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link to={"settings"}>
          <Text strong>Settings</Text>
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link to={"schedules"}>
          <Text strong>Schedules</Text>
        </Link>
      </Menu.Item>
      <Menu.Item>
        <a href={loginUrl}>
          <Text strong>Log In</Text>
        </a>
      </Menu.Item>
    </Menu>
  );
};

export default MenuBar;
