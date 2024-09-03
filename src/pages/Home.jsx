import React from "react";
import { Layout, Typography, Row, Col, Image } from "antd";
import HomeImage from "../assets/Message assets/home.svg";
import FooterPage from "../containers/Footer";
import Features from "../containers/Features";

const Home = () => {
  const { Content, Header } = Layout;
  const { Title, Text, Paragraph } = Typography;

  return (
    <Layout className="home" id="home">
      <Header
        style={{
          background: "transparent",
          padding: "10px 0 0 0 ",
          textAlign: "center",
          height: "100%",
        }}
      >
        <Title
          style={{
            color: "black",
          }}
        >
          Automate your messages and connect with your contacts
        </Title>
      </Header>

      <Content style={{ padding: "10px 0", textAlign: "center" }}>
        <Row justify="center" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col span={20}>
            <Paragraph strong style={{ fontSize: "20px" }}>
              Sign up and start scheduling your messages to be sent
              automatically, PMMS - Pocho`s Messages Management System is the
              ideal tool, <a>Register free.</a>
            </Paragraph>
          </Col>
        </Row>
      </Content>

      <Content>
        <Row align="middle" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col>
            <Image
              src={HomeImage}
              preview={false}
              style={{ marginTop: "30px" }}
            />
          </Col>
        </Row>
        <Features />
        <FooterPage />
      </Content>
    </Layout>
  );
};
export default Home;
