import React from "react";
import { Menu, Image, Typography } from "antd";
import { Link } from "react-router-dom";
import GetStartedButton from "./GetStartedButton";
import Logo from "../assets/Message assets/logo.svg";
const loginUrl = import.meta.env.VITE_LOGIN_URL;
const { Text } = Typography;

console.log(loginUrl);
const MenuBar = () => {
  const handleScroll = (event) => {
    event.preventDefault(); // Previene el comportamiento predeterminado del enlace

    // Usa el atributo href para determinar la sección a la que se debe desplazar
    const targetId = event.currentTarget.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      // Desplazamiento suave al elemento con el ID correspondiente
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
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
        <a href="#home" onClick={handleScroll} style={{ margin: "0 10px" }}>
          <Image src={Logo} width={40} preview={false} />
          <Text strong style={{ fontSize: 20 }}>
            Home
          </Text>
        </a>
      </Menu.Item>

      <Menu.Item>
        <a href="#Features">
          <Text strong style={{ fontSize: 20 }}>
            Features
          </Text>
        </a>
      </Menu.Item>

      <Menu.Item>
        <a href={"#pricing"} onClick={handleScroll}>
          <Text style={{ fontSize: 20 }} strong>
            Pricing
          </Text>
        </a>
      </Menu.Item>

      <Menu.Item>
        <a href={"#contact"} onClick={handleScroll}>
          <Text style={{ fontSize: 20 }} strong>
            Conctact
          </Text>
        </a>
      </Menu.Item>

      <Menu.Item>
        <a href={"#faq"} onClick={handleScroll}>
          <Text style={{ fontSize: 20 }} strong>
            FAQ
          </Text>
        </a>
      </Menu.Item>
      {/* <Menu.Item>
        <a href={"#messages"} onClick={handleScroll}>
          <Text style={{ fontSize: 20 }} strong>
            Messages
          </Text>
        </a>
      </Menu.Item>
      <Menu.Item>
        <a href={"#contacts"} onClick={handleScroll}>
          <Text strong style={{ fontSize: 20 }}>
            Contacts
          </Text>
        </a>
      </Menu.Item>
      <Menu.Item>
        <a href={"#categories"} onClick={handleScroll}>
          <Text strong style={{ fontSize: 20 }}>
            Categories
          </Text>
        </a>
      </Menu.Item>
      <Menu.Item>
        <a href={"#settings"} onClick={handleScroll}>
          <Text strong style={{ fontSize: 20 }}>
            Settings
          </Text>
        </a>
      </Menu.Item>
      <Menu.Item>
        <a href={"#schedules"} onClick={handleScroll}>
          <Text strong style={{ fontSize: 20 }}>
            Schedules
          </Text>
        </a>
      </Menu.Item> */}
      <Menu.Item>
        <GetStartedButton />
      </Menu.Item>
    </Menu>
  );
};

export default MenuBar;
