import React, { useState, useEffect } from "react";
import { Layout, Typography, Result, Spin, Button } from "antd";
import { useNavigate } from "react-router";
const { Text } = Typography;

const VerificationPage = () => {
  const [timeLeft, setTimeLeft] = useState(60);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/signup"); // Redirige al signup u otra página
  };

  useEffect(() => {
    if (timeLeft === 0) {
      setIsLoading(false);
      handleRedirect();
    } else {
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
      return () => clearInterval(timer); // Limpiar el intervalo cuando el componente se desmonte
    }
  }, [timeLeft]);

  return (
    <Layout
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <Result
          status="success"
          title="Your account has been successfully verified!"
          subTitle="Please check your email to verify your account"
          extra={[
            <Layout.Content>
              <Text>Redirecting you in {timeLeft} seconds...</Text>
              <Spin size="large" />
              <Layout.Footer>
                <Button type="primary" key="login" onClick={handleRedirect}>
                  Go Back
                </Button>
              </Layout.Footer>
            </Layout.Content>,
          ]}
        />
      </div>
    </Layout>
  );
};

export default VerificationPage;
