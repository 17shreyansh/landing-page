import React, { useState } from "react";
import { Row, Col, Typography, Modal, Image } from "antd";
import floorPlanImage from "../assets/banner.jpg"; // Replace with your actual image path

const { Title, Paragraph } = Typography;

const FloorPlan = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const handleCancel = () => setIsModalVisible(false);

  return (
    <div
      style={{
        padding: "100px 5%",
        background: "#0c0c0c",
        color: "#fff",
        position: "relative",
      }}
    >
      <Row gutter={[48, 48]} align="middle">
        <Col xs={24} md={12}>
          <div style={{ animation: "fadeInUp 0.8s ease-out" }}>
            <Title level={2} style={{ color: "#fff", fontWeight: 600 }}>
              Floor Plan
            </Title>
            <Paragraph style={{ fontSize: "16px", color: "#ccc", marginTop: 16 }}>
              Explore a detailed layout of our property. Every inch is optimized for
              comfort, space, and elegance.
            </Paragraph>
          </div>
        </Col>

        <Col xs={24} md={12}>
          <div
            onClick={() => setIsModalVisible(true)}
            style={{
              cursor: "pointer",
              borderRadius: "16px",
              overflow: "hidden",
              boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
              transition: "transform 0.3s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <Image
              src={floorPlanImage}
              alt="Floor Plan"
              preview={false}
              style={{ width: "100%", height: "auto", display: "block" }}
              loading="lazy"
            />
          </div>
        </Col>
      </Row>

      <Modal
        open={isModalVisible}
        footer={null}
        onCancel={handleCancel}
        width={900}
        centered
        bodyStyle={{
          background: "rgba(255,255,255,0.03)",
          backdropFilter: "blur(15px)",
          padding: 0,
          borderRadius: 12,
        }}
      >
        <Image
          src={floorPlanImage}
          alt="Full Floor Plan"
          style={{ width: "100%", borderRadius: "12px" }}
          loading="lazy"
        />
      </Modal>

      <style>
        {`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @media (max-width: 576px) {
            h2.ant-typography {
              font-size: 24px !important;
            }

            .ant-btn {
              width: 100%;
            }
          }
        `}
      </style>
    </div>
  );
};

export default FloorPlan;
