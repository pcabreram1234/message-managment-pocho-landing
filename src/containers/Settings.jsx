import React from "react";
import { Layout, Typography, Row, Col, Image } from "antd";
import SettingsImage from "../assets/Message assets/settings.svg";

const Settings = () => {
  const { Content } = Layout;

  return (
    <Layout
      style={{ height: "100%", padding: "10px" }}
      className="settings"
      id="settings"
    >
      <Layout>
        <Content style={{ position: "relative" }}>
          <Row
            align="middle"
            justify="center"
            wrap={true}
            style={{ position: "relative" }}
          >
            <Col style={{ display: "flex", justifyContent: "center" }}>
              <Image src={SettingsImage} preview={false} />
            </Col>
          </Row>
        </Content>
      </Layout>
    </Layout>
  );
};
export default Settings;
