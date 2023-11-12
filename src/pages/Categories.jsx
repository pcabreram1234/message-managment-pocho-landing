import React from "react";
import { Layout, Typography, Row, Col, Image } from "antd";
import CategoriesImage from "../assets/Message assets/categories.svg";

const Categories = () => {
  const { Content } = Layout;

  return (
    <Layout
      style={{ height: "100%", padding: "10px" }}
      className="categories"
      id="categories"
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
              <Image src={CategoriesImage} preview={false} />
            </Col>
          </Row>
        </Content>
      </Layout>
    </Layout>
  );
};
export default Categories;
