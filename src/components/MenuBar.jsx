import React from "react";
import { Menu, Image, Typography } from "antd";
import { Link } from "react-router-dom";
import GetStartedButton from "./GetStartedButton";
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
        backgroundColor: "#f1edff",
      }}
    >
      <Menu.Item>
        <Link to={"home"}>
          <Image src={Logo} width={40} preview={false} />
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link to={"messages"}>
          <Text style={{ fontSize: 20 }} strong>
            Messages
          </Text>
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link to={"contacts"}>
          <Text strong style={{ fontSize: 20 }}>
            Contacts
          </Text>
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link to={"categories"}>
          <Text strong style={{ fontSize: 20 }}>
            Categories
          </Text>
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link to={"settings"}>
          <Text strong style={{ fontSize: 20 }}>
            Settings
          </Text>
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link to={"schedules"}>
          <Text strong style={{ fontSize: 20 }}>
            Schedules
          </Text>
        </Link>
      </Menu.Item>
      <Menu.Item>
        <GetStartedButton />
        {/* <a href={loginUrl}>
          <Text strong style={{ fontSize: 20, color: "white" }}>
            Get Started
          </Text>
        </a> */}
      </Menu.Item>
    </Menu>
  );
};

export default MenuBar;
