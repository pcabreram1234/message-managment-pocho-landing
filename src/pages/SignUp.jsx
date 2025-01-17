import React, { useState } from "react";
import { UserOutlined } from "@ant-design/icons";
import {
  Layout,
  Typography,
  Form,
  Input,
  Button,
  Space,
  Anchor,
  Image,
} from "antd";
import { useNavigate } from "react-router";
import RegisterIcon from "../assets/Message assets/undraw_sign_in_re_o58h.svg";
import PopUpModal from "../components/PopUpModal";

const SignUp = () => {
  const { Content } = Layout;
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [disabledSubmitButton, setDisabledSubmitButton] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [alertModalType, setAlertModalType] = useState("info");
  const [modalMessage, setModalMessage] = useState(
    "Please wait, we are sending you an email confirmation"
  );
  const [modalInfoText, setModalInfoText] = useState("Saving user");
  const { Text } = Typography;
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const resetPopUpModal = async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        setShowModal(true);
        setAlertModalType("info");
        setModalMessage(
          "Please wait, we are sending you an email confirmation"
        );
        resolve();
      }, 100);
    });
  };

  const handleSignUp = async () => {
    setDisabledSubmitButton(true);
    await resetPopUpModal();

    try {
      const response = await fetch(import.meta.env.VITE_SIGNUP_UL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: form.getFieldValue("email"),
          password: form.getFieldValue("password"),
        }),
      });

      const resp = await response.json();
      const { error, messageStatus } = resp;

      if (error) {
        setAlertModalType("error");
        setModalMessage(error);
        setModalInfoText("Error");
      } else if (messageStatus === "sended") {
        setAlertModalType("success");
        setModalMessage("Email confirmation sent successfully!");
        setModalInfoText("Success");
        navigate("/verification");
      }
    } catch (error) {
      console.error("Error:", error);
      setAlertModalType("error");
      setModalMessage("An error occurred while creating your account.");
      setModalInfoText("Error");
    } finally {
      setDisabledSubmitButton(false);
    }
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

        {showModal && (
          <PopUpModal
            isModalVisible={showModal}
            cb={setShowModal}
            alertModalType={alertModalType}
            modalInfoText={modalInfoText}
            modalMessage={modalMessage}
          />
        )}
      </Content>
    </Layout>
  );
};

export default SignUp;
