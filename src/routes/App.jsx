import React from "react";
import MenuBar from "../components/MenuBar";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Princing from "../pages/Pricing";
import FAQ from "../pages/FAQ";
import FooterPage from "../containers/Footer";
import SignUp from "../pages/SignUp";
import { Route, Routes } from "react-router-dom";
import { Layout } from "antd";
const App = () => {
  const { Content, Header, Footer } = Layout;
  return (
    <Layout
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      <Header
        style={{
          backgroundColor: "transparent",
          padding: 0,
          position: "sticky",
          top: 0,
          zIndex: 1000,
          width: "100%",
        }}
      >
        <MenuBar />
      </Header>
      <Content
        style={{
          flex: 1,
          overflow: "auto",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Contact />} path="/contact" />
          <Route element={<Princing />} path="/pricing" />
          <Route element={<FAQ />} path="/faq" />
          <Route element={<SignUp />} path="/signup" />
          <Route element={<VerificationPage />} path="/verification" />
        </Routes>
      </Content>
      <Footer
        style={{
          padding: "10px 20px",
          textAlign: "center",
          backgroundColor: "#f0f0f0",
        }}
      >
        <FooterPage />
      </Footer>
    </Layout>
  );
};

export default App;
