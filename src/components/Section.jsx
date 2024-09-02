import React from "react";
import Aos from "aos";
import { Layout, Typography, Image, Row, Col } from "antd";

const Section = ({ hasTitle, mainTitle, sideTitle, srcImage, imageOrder }) => {
  const { Content, Header } = Layout;
  const { Title } = Typography;
  Aos.init();
  return (
    <Layout
      data-aos="fade-in"
      id="home"
      style={{
        margin: "10px 0 10px 0",
        background: "white",
      }}
    >
      <Content>
        {hasTitle && (
          <Row
            justify="center"
            gutter={{
              xs: 8,
              sm: 16,
              md: 24,
              lg: 32,
            }}
          >
            <Title style={{ textAlign: "center" }}>{mainTitle}</Title>
          </Row>
        )}
        <Row
          align="middle"
          style={{ padding: "10px 0" }}
          justify="center"
          gutter={{
            xs: 8,
            sm: 16,
            md: 24,
            lg: 32,
          }}
        >
          {imageOrder === "right" && (
            <>
              <Col md={12} style={{ display: "flex" }}>
                <Title style={{ textAlign: "center" }}>{sideTitle}</Title>
              </Col>
              <Col md={10}>
                <Image src={srcImage} preview={false} />
              </Col>
            </>
          )}

          {imageOrder === "left" && (
            <>
              <Col md={10}>
                <Image src={srcImage} preview={false} />
              </Col>
              <Col md={12} style={{ display: "flex" }}>
                <Title style={{ textAlign: "center" }}>{sideTitle}</Title>
              </Col>
            </>
          )}
        </Row>
      </Content>
    </Layout>
  );
};

export default Section;
