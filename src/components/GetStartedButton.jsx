import React from "react";
import { Button } from "antd";
import { StarTwoTone } from "@ant-design/icons";
import { useNavigate } from "react-router";

const GetStartedButton = () => {
  const location = useNavigate();
  return (
    <Button
      type="primary"
      size="large"
      htmlType="submit"
      style={{ borderRadius: "10px" }}
      onClick={() => {
        location("/signup");
      }}
    >
      <StarTwoTone />
      Get Started
    </Button>
  );
};

export default GetStartedButton;
