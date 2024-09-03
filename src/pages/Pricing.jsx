import React from "react";
import { Layout, Typography, Card, Button, Row, Col } from "antd";

const Princing = () => {
  const { Header, Content } = Layout;
  const { Title, Text } = Typography;
  return (
    <Layout style={{ height: "100%", margin: "auto" }}>
      <Header style={{ backgroundColor: "transparent", textAlign: "center" }}>
        <Title>Pricing</Title>
      </Header>

      <Content>
        <Card
          bordered={true}
          title={
            <Text strong style={{ fontSize: "20px" }}>
              Basic Plan
            </Text>
          }
          style={{
            width: "270px",
            padding: "20px 0",
            boxShadow: "-2px -1px 20px 0px #0000001f",
            textAlign: "center",
          }}
        >
          <Col>
            <Row
              gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
              justify="center"
              style={{ margin: "5px 0" }}
            >
              <Text style={{ fontSize: "25px" }}>
                <Text strong>$0</Text>/ month
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
              <Button
                type="primary"
                htmlType="submit"
                size="large"
                style={{ borderRadius: "10px" }}
              >
                Register for FREE
              </Button>
            </Row>
          </Col>
        </Card>
      </Content>
    </Layout>
  );
};

export default Princing;
