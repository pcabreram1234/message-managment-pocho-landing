import React, { useState } from "react";
import { UserOutlined } from "@ant-design/icons";
import {
  Layout,
  Typography,
  Form,
  Input,
  Button,
  message,
  Space,
  Anchor,
  Image,
} from "antd";
import RegisterIcon from "../assets/Message assets/undraw_sign_in_re_o58h.svg";

const SignUp = () => {
  const { Content, Footer } = Layout;
  const { Text } = Typography;

  const handleSignUp = (values) => {
    // Lógica para registrar un nuevo usuario (por ejemplo, solicitud API)
    message.success("Registered successfully!");
  };

  return (
    <Layout>
      <Content
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Form
          name="signUp"
          labelAlign="right"
          layout="vertical"
          size="large"
          style={{ maxWidth: 400, width: "100%" }}
          onFinish={handleSignUp}
        >
          <Form.Item>
            <Image
              src={RegisterIcon}
              preview={false}
              style={{ maxWidth: "300px" }}
            />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please enter your email!" }]}
          >
            <Input type="text" />
          </Form.Item>

          <Form.Item
            label="Passwrod"
            name="password"
            rules={[{ required: true, message: "Please enter your password!" }]}
          >
            <Input type="password" />
          </Form.Item>

          <Form.Item style={{ textAlign: "center" }}>
            <Space size={"large"}>
              <Button type="primary" htmlType="submit" icon={<UserOutlined />}>
                Register
              </Button>
            </Space>
          </Form.Item>

          <Form.Item style={{ textAlign: "center" }}>
            <Anchor
              affix={false}
              items={[
                {
                  href: "https://pmmscheduler.netlify.app/login",
                  target: "__blank",
                  key: 1,
                  title: (
                    <Text strong type="secondary">
                      Already have an account? Click here
                    </Text>
                  ),
                },
              ]}
            />
          </Form.Item>
        </Form>
      </Content>
    </Layout>
  );
};

export default SignUp;
