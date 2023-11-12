import React from "react";
import { Layout, Typography, Row, Col, Image } from "antd";
import HomeImage from "../assets/Message assets/home.svg";

const Home = () => {
  const { Content, Header } = Layout;
  const { Title } = Typography;

  return (
    <Layout
      style={{ height: "100%", padding: "0 0 10px 0" }}
      className="home"
      id="home"
    >
      <Content>
        <Header
          style={{ display: "flex", justifyContent: "center", height: "auto" }}
        >
          <Row>
            <Col>
              <Title
                style={{
                  color: "white",
                  textAlign: "center",
                  fontSize: "35px",
                }}
              >
                PMMS - Pocho`s Messages Managment System
              </Title>
            </Col>
          </Row>
        </Header>
        <Row align="middle" justify="center" wrap={true}>
          <Col>
            <Image
              src={HomeImage}
              preview={false}
              style={{ marginTop: "30px" }}
            />
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};
export default Home;
