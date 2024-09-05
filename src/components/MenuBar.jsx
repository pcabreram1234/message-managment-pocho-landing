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
        <Link to={"/"}>
          <Image src={Logo} width={40} preview={false} />
          <Text strong style={{ fontSize: 20 }}>
            Home
          </Text>
        </Link>
      </Menu.Item>

      <Menu.Item>
        <Link to={"/pricing"}>
          <Text style={{ fontSize: 20 }} strong>
            Pricing
          </Text>
        </Link>
      </Menu.Item>

      <Menu.Item>
        <Link to={"/contact"}>
          <Text style={{ fontSize: 20 }} strong>
            Conctact
          </Text>
        </Link>
      </Menu.Item>

      <Menu.Item>
        <Link to={"/faq"}>
          <Text style={{ fontSize: 20 }} strong>
            FAQ
          </Text>
        </Link>
      </Menu.Item>

      <Menu.Item>
        <GetStartedButton />
      </Menu.Item>
    </Menu>
  );
};

export default MenuBar;
