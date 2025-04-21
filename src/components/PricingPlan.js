import React from "react";
import { Row, Col, Typography, Button } from "antd";
import { CheckOutlined } from "@ant-design/icons";

const { Title, Paragraph } = Typography;

const pricingData = [
  {
    title: "Standard",
    price: "₹15,000/month",
    features: [
      "Furnished Cabin",
      "High-Speed Internet",
      "Meeting Room Access",
      "24/7 Security",
    ],
  },
  {
    title: "Premium",
    price: "₹25,000/month",
    features: [
      "Private Office Space",
      "Unlimited Meeting Room Access",
      "Dedicated Reception",
      "Complimentary Beverages",
    ],
    highlight: true,
  },
  {
    title: "Enterprise",
    price: "Custom Pricing",
    features: [
      "Custom Layout",
      "Branding Options",
      "Dedicated Facilities",
      "Priority Support",
    ],
  },
];

const PricingPlan = () => {
  return (
    <div style={{ padding: "100px 5%", background: "#ffffff" }}>
      <div style={{ textAlign: "center", marginBottom: "60px" }}>
        <Title level={2} style={{ fontWeight: 700 }}>
          Our Pricing Plans
        </Title>
        <Paragraph style={{ fontSize: "16px", color: "#666", maxWidth: 600, margin: "0 auto" }}>
          Designed to match your needs — from startups to enterprises.
        </Paragraph>
      </div>

      <Row gutter={[32, 48]} justify="center">
        {pricingData.map((plan, index) => (
          <Col xs={24} md={8} key={index}>
            <div
              style={{
                padding: "40px 30px",
                borderRadius: 16,
                background: plan.highlight ? "#f0f5ff" : "#f9f9f9",
                border: plan.highlight ? "1.5px solid #1890ff" : "1px solid #e0e0e0",
                transition: "all 0.3s ease",
                position: "relative",
                height: "100%",
              }}
            >
              {plan.highlight && (
                <div
                  style={{
                    position: "absolute",
                    top: -16,
                    left: 20,
                    background: "#1890ff",
                    color: "#fff",
                    padding: "4px 12px",
                    borderRadius: "12px",
                    fontSize: 12,
                    fontWeight: 600,
                  }}
                >
                  Most Popular
                </div>
              )}

              <Title level={3} style={{ marginBottom: 12 }}>{plan.title}</Title>
              <Paragraph
                style={{
                  fontSize: 18,
                  fontWeight: 600,
                  color: "#1890ff",
                  marginBottom: 24,
                }}
              >
                {plan.price}
              </Paragraph>

              <div style={{ marginBottom: 24 }}>
                {plan.features.map((feature, idx) => (
                  <div key={idx} style={{ display: "flex", alignItems: "center", marginBottom: 12 }}>
                    <CheckOutlined style={{ color: "#52c41a", marginRight: 10 }} />
                    <span style={{ color: "#444", fontSize: 15 }}>{feature}</span>
                  </div>
                ))}
              </div>

              <Button
                type={plan.highlight ? "primary" : "default"}
                block
                size="large"
                style={{
                  borderRadius: 8,
                  fontWeight: 600,
                  borderColor: plan.highlight ? "#1890ff" : "#ccc",
                }}
              >
                Choose Plan
              </Button>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default PricingPlan;
