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
  const { Content } = Layout;
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [disabledSubmitButton, setDisabledSubmitButton] = useState(false);
  const { Text } = Typography;
  const [form] = Form.useForm();

  const handleSignUp = () => {
    // Muestra el mensaje inicial
    const loadingMessage = message.loading("Creating user, please wait", 0); // El 0 hace que el mensaje no se cierre automáticamente

    setDisabledSubmitButton(true);

    // Realiza la solicitud API
    fetch(import.meta.env.VITE_SIGNUP_UL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: form.getFieldValue("email"),
        password: form.getFieldValue("password"),
      }),
    })
      .then((response) => response.json())
      .then((resp) => {
        const { error, messageStatus } = resp;
        console.log(resp);
        // Al finalizar la solicitud, destruye el mensaje de carga

        if (error) {
          message.error(error);
          loadingMessage(); // Cierra el mensaje de carga
        }

        if (messageStatus === "sended") {
          message.success(
            "Registered successfully! Please verify your email inbox"
          );
          loadingMessage(); // Cierra el mensaje de carga
          form.resetFields();
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        loadingMessage(); // Cierra el mensaje de carga en caso de error
        message.error("An error occurred during registration."); // Muestra un mensaje de error genérico
      })
      .finally(() => {
        setDisabledSubmitButton(false);
      });
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
          form={form}
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
            rules={[
              {
                required: true,
                message: "Please a valid email!",
                type: "email",
              },
            ]}
          >
            <Input placeholder="email@example.com" autoFocus={true} />
          </Form.Item>

          <Form.Item
            label="Passwrod"
            name="password"
            rules={[
              {
                required: true,
                pattern: /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/g,
                message:
                  "The passwod must have at least an Upper Character, a number and the lengh must be min 8",
                type: "string",
              },
            ]}
          >
            <Input.Password
              visibilityToggle={{
                visible: passwordVisible,
                onVisibleChange: setPasswordVisible,
              }}
              type="password"
              showCount
            />
          </Form.Item>

          <Form.Item style={{ textAlign: "center" }}>
            <Space size={"large"}>
              <Button
                type="primary"
                htmlType="submit"
                icon={<UserOutlined />}
                disabled={disabledSubmitButton}
              >
                Register
              </Button>
            </Space>
          </Form.Item>

          <Form.Item style={{ textAlign: "center" }}>
            <Anchor
              affix={false}
              items={[
                {
                  href: import.meta.env.VITE_LOGIN_URL,
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
