import React from "react";
import { Layout, Typography, Card, Button, Row, Col } from "antd";
import { Link } from "react-router-dom";

const Princing = () => {
  const { Header, Content } = Layout;
  const { Title, Text } = Typography;
  return (
    <Layout>
      <Layout
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "40px",
          flexGrow: 1, // Permite que el contenido ocupe el espacio disponible
        }}
      >
        <Header
          style={{
            backgroundColor: "transparent",
            width: "100%",
            textAlign: "center",
            marginTop: 0,
          }}
        >
          <Title>Pricing</Title>
        </Header>
        <Row
          justify="center"
          align="middle"
          gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
          style={{ width: "100%", marginBottom: "20px", textAlign: "center" }}
        >
          <Card
            bordered={true}
            title={
              <Text strong style={{ fontSize: "20px" }}>
                Basic Plan
              </Text>
            }
            style={{
              padding: "20px 0",
              boxShadow: "-2px -1px 20px 0px #0000001f",
            }}
          >
            <Row
              gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
              justify="center"
              style={{ margin: "5px 0" }}
            >
              <Text style={{ fontSize: "25px" }}>
                <Title strong>
                  $0/<Text>Month</Text>
                </Title>
              </Text>
            </Row>
            <Row
              gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
              justify="center"
              style={{ margin: "5px 0" }}
            >
              <Text style={{ fontSize: "20px" }} type="secondary">
                Best For Small Beginners
              </Text>
            </Row>

            <Row
              gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
              justify="center"
              style={{ margin: "5px 0" }}
            >
              <Text style={{ fontSize: "18px" }} type="secondary">
                Unlimited messages schedule
              </Text>
            </Row>

            <Row
              gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
              justify="center"
              style={{ margin: "5px 0" }}
            >
              <Button
                type="primary"
                htmlType="submit"
                size="large"
                style={{ borderRadius: "10px" }}
              >
                <Link to={"/signup"}>Register for FREE</Link>
              </Button>
            </Row>
          </Card>
        </Row>

        <Row
          justify="center"
          gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
          style={{ width: "100%" }}
        >
          <Card
            bordered={true}
            style={{
              margin: "auto",
              boxShadow: "-2px -1px 20px 0px #0000001f",
              textAlign: "center",
            }}
          >
            <Row
              gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
              align="middle"
              justify="center"
            >
              <Col>
                <Text style={{ fontSize: "30px", color: "black" }}>
                  "Get more done in less time: Get started for free and discover
                  how our platform can transform your business."
                </Text>
              </Col>
            </Row>
          </Card>
        </Row>
      </Layout>
    </Layout>
  );
};

export default Princing;
