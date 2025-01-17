import React, { useState, useEffect } from "react";
import { Menu, Image, Typography, Button, Drawer } from "antd";
import { Link } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";
import GetStartedButton from "./GetStartedButton";
import Logo from "../assets/Message assets/logo.svg";

const { Text } = Typography;

const MenuBar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [drawerVisible, setDrawerVisible] = useState(false);

  // Detectar cambios en el tamaño de la pantalla
  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768); // Cambia a hamburguesa si la pantalla es menor o igual a 768px
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize(); // Verificar el tamaño inicial
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const showDrawer = () => {
    setDrawerVisible(true);
  };

  const closeDrawer = () => {
    setDrawerVisible(false);
  };

  // Maneja el clic en los elementos del menú para cerrar el Drawer
  const handleMenuClick = () => {
    if (isMobile) {
      closeDrawer();
    }
  };

  const menuItems = (
    <>
      <Menu.Item onClick={handleMenuClick}>
        <Link to={"/"}>
          <Image src={Logo} width={40} preview={false} />
          <Text strong style={{ fontSize: 20 }}>
            Home
          </Text>
        </Link>
      </Menu.Item>

      <Menu.Item onClick={handleMenuClick}>
        <Link to={"/pricing"}>
          <Text style={{ fontSize: 20 }} strong>
            Pricing
          </Text>
        </Link>
      </Menu.Item>

      <Menu.Item onClick={handleMenuClick}>
        <Link to={"/contact"}>
          <Text style={{ fontSize: 20 }} strong>
            Contact
          </Text>
        </Link>
      </Menu.Item>

      <Menu.Item onClick={handleMenuClick}>
        <Link to={"/faq"}>
          <Text style={{ fontSize: 20 }} strong>
            FAQ
          </Text>
        </Link>
      </Menu.Item>

      <Menu.Item onClick={handleMenuClick}>
        <GetStartedButton />
      </Menu.Item>

      <Menu.Item
        onClick={handleMenuClick}
        style={{ height: "auto", backgroundColor: "transparent" }}
      >
        <a
          href="https://www.producthunt.com/products/pmms/reviews?utm_source=badge-product_review&utm_medium=badge&utm_souce=badge-pmms"
          target="_blank"
          style={{ display: "flex", alignItems: "center" }}
        >
          <Image
            src="https://api.producthunt.com/widgets/embed-image/v1/product_review.svg?product_id=856248&theme=light"
            alt="PMMS - Pocho&#0096;s&#0032;messages&#0032;managment&#0032;system | Product Hunt"
            style={{ width: "210px", height: "50px" }}
            width="200"
            height="50"
            preview={false}
          />
        </a>
      </Menu.Item>
    </>
  );

  return (
    <>
      {isMobile ? (
        <>
          {/* Botón para mostrar el menú hamburguesa */}
          <Button
            type="primary"
            icon={<MenuOutlined />}
            onClick={showDrawer}
            style={{ position: "fixed", top: 16, left: 16, zIndex: 1000 }}
          />

          {/* Drawer que contiene el menú en vista mobile */}
          <Drawer
            title="Menu"
            placement="left"
            onClose={closeDrawer}
            visible={drawerVisible}
          >
            <Menu mode="vertical">{menuItems}</Menu>
          </Drawer>
        </>
      ) : (
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
          {menuItems}
        </Menu>
      )}
    </>
  );
};

export default MenuBar;
