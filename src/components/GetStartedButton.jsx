import React from "react";
import { Button } from "antd";
import { StarTwoTone } from "@ant-design/icons";

const GetStartedButton = () => {
  return (
    <Button
      type="primary"
      size="large"
      htmlType="submit"
      style={{ borderRadius: "10px" }}
    >
      <StarTwoTone />
      Get Started
    </Button>
  );
};

export default GetStartedButton;
