import React, { useState } from "react";
import { Row, Col, Typography, Button, Modal } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import CommonForm from "./Form";

const { Title, Paragraph } = Typography;

const pricingData = [
  {
    title: "3 BHK",
    price: "₹ 8.17 Cr* Onwards",
    size: "Size : 3270 Sq.Ft",
  },
  {
    title: "4 BHK",
    price: "₹ 11.21 Cr* Onwards",
    size: "Size : 4315 Sq.Ft",
    highlight: true,
  },
  {
    title: "5 BHK",
    price: "₹ 17.79 Cr* Onwards",
    size: "Size : 5935 Sq.Ft",
  },
];

const PricingPlan = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const showModal = (plan) => {
    setSelectedPlan(plan);
    setIsModalVisible(true);
  };

 
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div style={{ padding: "10px 5%", background: "#fff" }}>
      <div style={{  marginBottom: "60px" }}>
        <Title level={1} style={{ fontWeight: 700, fontSize:80, textAlign:"right"}}>
          Price List
        </Title>
        <Paragraph style={{ fontSize: 25, color: "#777", maxWidth: 600, margin: "0 auto",textAlign: "center", }}>
        Unlock the Door to Affordable Luxury
        </Paragraph>
      </div>
      <Row gutter={[32, 32]} justify="center">
        {pricingData.map((plan, index) => (
          <Col xs={20} sm={12} md={8} lg={6} xl={6} key={index}>
            <div
              style={{
                position: "relative",
                padding: "36px 30px",
                borderRadius: "20px",
                background: "#fdfdfd",
                boxShadow: plan.highlight
                  ? "0 8px 24px rgba(0, 0, 0, 0.1)"
                  : "0 6px 18px rgba(0, 0, 0, 0.06)",
                border: plan.highlight ? "1.5px solid #000" : "1px solid #eaeaea",
                transition: "0.3s ease",
              }}
            >
              {/* Horizontal Highlight Banner */}
              {plan.highlight && (
                <div
                  style={{
                    width: "100%",
                    backgroundColor: "#000",
                    padding: "8px 16px",  // Reduced size for subtle highlight
                    borderRadius: "12px",
                    marginBottom: 16,  // Reduced space between the banner and content
                    color: "#fff",
                    fontSize: 14,  // Reduced font size
                    fontWeight: 600,
                    textAlign: "center",
                    letterSpacing: 1,
                    opacity: 0.8,  // Reduced opacity for a more subtle look
                  }}
                >
                  MOST PREFERRED CHOICE
                </div>
              )}

              <Title level={4} style={{ fontWeight: 700, marginBottom: 12 }}>
                {plan.title}
              </Title>

              <Paragraph
                style={{
                  fontSize: 18,
                  fontWeight: 600,
                  color: "#000",
                  marginBottom: 12,
                }}
              >
                {plan.price}
              </Paragraph>

              <Paragraph style={{ fontSize: 16, color: "#444", marginBottom: 24 }}>
                {plan.size}
              </Paragraph>

              <Button
                type={plan.highlight ? "primary" : "default"}
                block
                size="large"
                style={{
                  borderRadius: 10,
                  fontWeight: 600,
                  background: plan.highlight ? "#000" : "#fff",
                  color: plan.highlight ? "#fff" : "#333",
                  borderColor: plan.highlight ? "#000" : "#ccc",
                }}
                icon={<HomeOutlined />}
                onClick={() => showModal(plan)}  // Trigger modal on click
              >
                Know More
              </Button>
            </div>
          </Col>
        ))}
      </Row>

      {/* Modal */}
      {selectedPlan && (
        <Modal
          
          visible={isModalVisible}
          onCancel={handleCancel}
          footer={null}  
          width={500}
          
        >
          <CommonForm/>
        </Modal>
      )}
    </div>
  );
};

export default PricingPlan;

