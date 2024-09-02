import React from "react";
import { Layout, Row, Col, Image } from "antd";
import ContactImage from "../assets/Message assets/contacts.svg";

const Contacts = ({ dataAos }) => {
  const { Content } = Layout;

  return (
    <Layout
      style={{ height: "100%", padding: "10px" }}
      className="contacts"
      id="contacts"
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
              <Image src={ContactImage} preview={false} />
            </Col>
          </Row>
        </Content>
      </Layout>
    </Layout>
  );
};
export default Contacts;
