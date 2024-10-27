import React, { useEffect, useState } from "react";
import {
  Layout,
  Form,
  Row,
  Col,
  Typography,
  Input,
  Space,
  Button,
  Result,
  Alert,
} from "antd";
import { SendOutlined, InfoCircleTwoTone } from "@ant-design/icons";
import "../styles/Contact.css";

const Contact = () => {
  const [form] = Form.useForm();
  const { Content, Header } = Layout;
  const { Title, Text } = Typography;
  const { TextArea } = Input;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");
  const [showStatusMessage, setShowStatusMessage] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const handleInput = (e, cb) => {
    cb(e.target.value);
  };

  const clearForm = () => {
    form.resetFields();
    setName("");
    setEmail("");
    setContent("");
  };

  const handleSubmit = () => {
    setShowAlert(false);
    setShowStatusMessage(false);
    form.validateFields().then(() => {
      setDisabled(true);

      fetch("https://pmms-landing.netlify.app/.netlify/functions/send-email", {
        method: "POST",
        body: JSON.stringify({
          content: content,
          email: email,
          user: name,
        }),
      })
        .then((resp) => {
          const statusCode = resp.status;
          if (statusCode === 204) {
            setShowStatusMessage(true);
          } else {
            setShowAlert(true);
          }
        })
        .catch((err) => {
          setShowAlert(true);
        });
    });
  };

  useEffect(() => {
    if (showStatusMessage === true) {
      setTimeout(() => {
        setDisabled(false);
      }, 3000);
      clearForm();
    }
  }, [showStatusMessage]);

  useEffect(() => {
    if (showAlert === true) {
      setTimeout(() => {
        setDisabled(false);
      }, 3000);
    }
  }, [showAlert]);
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
          <Col span={12} className="Form_Col">
            <Form style={{ marginTop: "10%" }} size="large" form={form}>
              <Form.Item
                name={"name"}
                label={""}
                rules={[
                  {
                    type: "string",
                    min: 3,
                    message: "Please write a valida name",
                    required: true,
                  },
                ]}
                initialValue={name}
                required={true}
              >
                <Input
                  autoFocus={true}
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
                label={""}
                name={"email"}
                rules={[
                  {
                    type: "email",
                    message: "Please write a valid email address",
                    required: true,
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
                label={""}
                rules={[
                  {
                    type: "string",
                    min: 10,
                    required: true,
                    message: "Please write a message with at least 10 letters",
                  },
                ]}
                initialValue={content}
                required
              >
                <TextArea
                  placeholder="Your message"
                  value={content}
                  onChange={(e) => {
                    handleInput(e, setContent);
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
                  onClick={handleSubmit}
                  disabled={disabled}
                >
                  Send Message
                </Button>
              </Form.Item>
            </Form>
            {showStatusMessage && (
              <Result
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                icon={false}
                subTitle={
                  <Text
                    // type="success"
                    strong
                    style={{
                      backgroundColor: "#6166E4",
                      padding: "10px",
                      borderRadius: "2px",
                      color: "#fefedf",
                    }}
                  >
                    <InfoCircleTwoTone /> "Message Sended successfully We will
                    be contacting you shortly to resolve your questions.."
                  </Text>
                }
              />
            )}

            {showAlert && (
              <Alert
                type="error"
                message="It looks like we were unable to process your request at this time. If you require urgent assistance, we invite you to email us directly at contact@phillipcabrera.com. We appreciate your understanding and are here to help."
              />
            )}
          </Col>

          <Col span={10} className="Text_Col">
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
