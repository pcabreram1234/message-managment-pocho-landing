import React from "react";
import { Layout, Row, Col, Image } from "antd";
import SchedulesImage from "../assets/Message assets/schedules.svg";

const Schedules = () => {
  const { Content } = Layout;

  return (
    <Layout
      style={{ height: "100%", padding: "10px" }}
      className="schedules"
      id="schedules"
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
              <Image src={SchedulesImage} preview={false} />
            </Col>
          </Row>
        </Content>
      </Layout>
    </Layout>
  );
};
export default Schedules;
