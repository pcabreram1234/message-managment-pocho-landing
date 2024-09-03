import React from "react";
import { Layout, Typography, Image, Row, Col } from "antd";
import landingImage from "../assets/undraw_email_campaign_re_m6k5.svg";
import { MessageTwoTone, EditTwoTone, SaveTwoTone } from "@ant-design/icons";
import LogInForm from "../components/forms/LogInForm";

const LogIn = () => {
  const { Header, Footer, Content } = Layout;
  const { Text, Paragraph, Title } = Typography;

  return (
    <Layout>
      <Header>
        <Title style={{ textAlign: "center", color: "white" }}>
          Pocho's Message Managment System
        </Title>
      </Header>
      <Content>
        <Row justify="space-evenly" align="middle" style={{ height: "90vh" }}>
          <Col span={10} style={{ textAlign: "center" }}>
            <Text strong code>
              Message Managment Tool
            </Text>
            <Paragraph style={{ textAlign: "justify" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem, at! Recusandae molestiae ipsum fugiat quibusdam
              accusamus deleniti culpa, iusto commodi illo nemo omnis tempora ex
              incidunt veritatis nesciunt dolor eligendi.
            </Paragraph>
          </Col>
          <Col span={10}>
            <Image src={landingImage} preview={false} width={400} />
          </Col>
        </Row>

        <Row justify="space-evenly" align="middle" style={{ height: "90vh" }}>
          <Col
            span={10}
            style={{ display: "flex", justifyContent: "space-evenly" }}
          >
            <MessageTwoTone style={{ fontSize: "40px" }} />
            <EditTwoTone style={{ fontSize: "40px" }} />{" "}
            <SaveTwoTone style={{ fontSize: "40px" }} />
          </Col>
          <Col span={10} style={{ textAlign: "center" }}>
            <Paragraph style={{ textAlign: "justify" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem, at! Recusandae molestiae ipsum fugiat quibusdam
              accusamus deleniti culpa, iusto commodi illo nemo omnis tempora ex
              incidunt veritatis nesciunt dolor eligendi.
            </Paragraph>
            <Text strong>Add and Edit your messages</Text>
          </Col>
        </Row>
      </Content>

      <Footer></Footer>
    </Layout>
  );
};

export default LogIn;
