import React from "react";
import { Layout, Typography, Row, Col, Image } from "antd";
import MessageImage from "../assets/Message assets/message.svg";

const Messages = () => {
  const { Content } = Layout;
  return (
    <Layout
      style={{ height: "100%", backgroundColor: "#f1edff" }}
      className="messages"
      id="messages"
    >
      <Layout>
        <Content>
          <Row align="middle" justify="center" wrap={true}>
            <Col>
              <Image src={MessageImage} preview={false} />
            </Col>
          </Row>
        </Content>
      </Layout>
    </Layout>
  );
};
export default Messages;
