import React from "react";
import { Layout, Typography, Card, Row, Col } from "antd";
import "../styles/FAQ.css";

const FAQ = () => {
  const { Content, Header } = Layout;
  const { Title, Text } = Typography;

  return (
    <Layout>
      <Header style={{ backgroundColor: "transparent", textAlign: "center" }}>
        <Title>Frequently Asked Questions</Title>
      </Header>

      <Content>
        <Row justify="center" gutter={10} align="middle">
          <Col style={{ padding: "10px" }}>
            <Card
              title={"How do I register on the platform?"}
              style={{ width: "500px" }}
            >
              <ul className="faq_list">
                <li>
                  <Text>
                    You only need an email account and create a username. How do
                    I set up categories for my messages?
                  </Text>
                </li>
              </ul>
            </Card>
          </Col>

          <Col style={{ padding: "10px" }}>
            <Card
              title={"How do I set up categories for my messages?"}
              style={{ width: "500px" }}
            >
              <ul className="faq_list">
                <li>
                  <Text>
                    Click the "ADD Category" button in the "Categories" section
                    of your user account. During the process, you can associate
                    the category with several of your already saved contacts.
                  </Text>
                </li>
              </ul>
            </Card>
          </Col>

          <Col style={{ padding: "10px" }}>
            <Card
              title={"How do I create and manage my contacts?"}
              style={{ width: "500px" }}
            >
              <ul className="faq_list">
                <li>
                  <Text>
                    Click the "ADD Contact" button in the "Contacts" section of
                    your user account to add and manage your contacts.
                  </Text>
                </li>
              </ul>
            </Card>
          </Col>

          <Col style={{ padding: "10px" }}>
            <Card
              title={"How do I schedule automatic messages for my contacts?"}
              style={{ width: "500px" }}
            >
              <ul className="faq_list">
                <li>
                  <Text>
                    In the "Configuration Panel" section, you will be able to
                    see all of your recorded messages. Select them manually or
                    filter by message and/or category, then click the "Configure
                    Messages" button to schedule sending.
                  </Text>
                </li>
              </ul>
            </Card>
          </Col>

          <Col style={{ padding: "10px" }}>
            <Card
              title={"Can I send personalized messages to my contacts?"}
              style={{ width: "500px" }}
            >
              <ul className="faq_list">
                <li>
                  <Text>
                    Yes, this is one of our main features. You can customize
                    messages for each contact.
                  </Text>
                </li>
              </ul>
            </Card>
          </Col>

          <Col style={{ padding: "10px" }}>
            <Card
              title={"What types of messages can I send?"}
              style={{ width: "500px" }}
            >
              <ul className="faq_list">
                <li>
                  <Text>
                    Currently, you can send messages in plain text. We'll be
                    adding the ability to send HTML messages soon.
                  </Text>
                </li>
              </ul>
            </Card>
          </Col>

          <Col style={{ padding: "10px" }}>
            <Card
              title={"Can I schedule recurring messages?"}
              style={{ width: "500px" }}
            >
              <ul className="faq_list">
                <li>
                  <Text>
                    This feature is in development and will be available soon.
                  </Text>
                </li>
              </ul>
            </Card>
          </Col>

          <Col style={{ padding: "10px" }}>
            <Card
              title={"How can I check the history of sent messages?"}
              style={{ width: "500px" }}
            >
              <ul className="faq_list">
                <li>
                  <Text>
                    In your user portal, you'll find the "History Panel"
                    section, where you can view all the messages you've
                    scheduled. You can also filter and search by message,
                    category, recipient, scheduling date, and sending status.
                  </Text>
                </li>
              </ul>
            </Card>
          </Col>

          <Col style={{ padding: "10px" }}>
            <Card
              title={"How many messages can I send with my current plan?"}
              style={{ width: "500px" }}
            >
              <ul className="faq_list">
                <li>
                  <Text>
                    In the beta version, the number of messages you can create,
                    edit, and send is unlimited.
                  </Text>
                </li>
              </ul>
            </Card>
          </Col>

          <Col style={{ padding: "10px" }}>
            <Card
              title={
                "Is there support available if I have problems with the platform?"
              }
              style={{ width: "500px" }}
            >
              <ul className="faq_list">
                <li>
                  <Text>
                    If you have any issues or questions, you can contact
                    technical support from the "Contacts" section in your user
                    account.
                  </Text>
                </li>
              </ul>
            </Card>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default FAQ;
