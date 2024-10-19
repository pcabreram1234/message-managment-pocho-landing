import React, { useState } from "react";
import { Layout, Form, Row, Col, Typography, Input, Space, Button } from "antd";
import { SendOutlined } from "@ant-design/icons";
import "../styles/Contact.css";

const Contact = () => {
  const { Content, Header } = Layout;
  const { Title, Text } = Typography;
  const { TextArea } = Input;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleInput = (e, cb) => {
    cb(e.target.value);
  };
  return (
    <Layout style={{ height: "100%" }}>
      <Header style={{ backgroundColor: "transparent", textAlign: "center" }}>
        <Title>Contact Us</Title>
      </Header>

      <Content style={{ alignContent: "center" }}>
        <Row
          gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
          justify="center"
          align="middle"
          style={{ height: "100%" }}
          className="ContactContainer"
        >
          <Col span={12} className="Form_Col" >
            <Form style={{ marginTop: "10%" }} size="large">
              <Form.Item
                name={"name"}
                rules={[
                  {
                    type: "string",
                    min: 3,
                    message: "The input is not valid",
                  },
                ]}
                initialValue={name}
                required
              >
                <Input
                  type={"text"}
                  value={name}
                  placeholder="Your name"
                  onChange={(e) => {
                    handleInput(e, setName);
                  }}
                />
              </Form.Item>

              <Form.Item
                required
                name={"email"}
                rules={[
                  {
                    type: "email",
                    message: "Please insert a valid email",
                  },
                ]}
                initialValue={email}
              >
                <Input
                  placeholder="Your email"
                  type={"text"}
                  value={email}
                  onChange={(e) => {
                    handleInput(e, setEmail);
                  }}
                />
              </Form.Item>

              <Form.Item
                name={"message"}
                rules={[
                  {
                    type: "string",
                    min: 10,
                  },
                ]}
                initialValue={message}
                required
              >
                <TextArea
                  placeholder="Your message"
                  value={message}
                  onChange={(e) => {
                    handleInput(e, setMessage);
                  }}
                  style={{ height: "150px" }}
                />
              </Form.Item>

              <Form.Item style={{ alignItems: "center", textAlign: "center" }}>
                <Button
                  type="primary"
                  icon={<SendOutlined />}
                  htmlType="submit"
                  size="large"
                  style={{ borderRadius: "10px" }}
                >
                  Send Message
                </Button>
              </Form.Item>
            </Form>
          </Col>

          <Col span={10} className="Text_Col" >
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} justify="center">
              <Title style={{ textAlign: "center", fontSize: "25px" }}>
                Don't be afraid to contact us
              </Title>
            </Row>
            <Row
              style={{ textAlign: "justify" }}
              gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
            >
              <Space direction="vertical" align="baseline" size={"middle"}>
                <Text style={{ fontSize: "20px" }}>
                  We are here to help. If you have any questions, concerns, or
                  need assistance with our service, please feel free to contact
                  us. Our team is committed to providing you with the best
                  possible experience and resolving any issues you may have. You
                  can also contact us directly using the following methods.
                </Text>

                <ul className="contact_list">
                  {/* <li>Phone: +1 (829) 324-2728</li> */}
                  <li>Mail: contact@phillipcabrera.com</li>
                </ul>
              </Space>
            </Row>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default Contact;
