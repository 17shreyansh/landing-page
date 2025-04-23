import React, { useState, useEffect, useRef } from "react";
import { Row, Col, Typography, Modal, Form, Button, Grid } from "antd";
import CommonForm from "./Form";

const { Title, Paragraph } = Typography;
const { useBreakpoint } = Grid;

const floorPlans = [
  {
    title: "1BHK Modern Plan",
    description: "Perfect for singles or couples. Open layout with modern kitchen and spacious balcony.",
    img: "https://foyr.com/learn/wp-content/uploads/2019/02/3d-house-floor-plan-design_large.jpg",
  },
  {
    title: "2BHK Premium Layout",
    description: "Ideal for small families. Comes with 2 bedrooms, 2 bathrooms, and modular kitchen.",
    img: "https://foyr.com/learn/wp-content/uploads/2019/02/3d-house-floor-plan-design_large.jpg",
  },
  {
    title: "Luxury 3BHK Villa",
    description: "A lavish floor plan with 3 spacious bedrooms, garden view, and ample natural lighting.",
    img: "https://foyr.com/learn/wp-content/uploads/2019/02/3d-house-floor-plan-design_large.jpg",
  },
];

const FloorPlan = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();
  const [showTitle, setShowTitle] = useState(true);
  const sectionRef = useRef(null);
  const screens = useBreakpoint();

  const handleClick = () => setIsModalVisible(true);
  const handleCancel = () => {
    setIsModalVisible(false);
    form.resetFields();
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setShowTitle(entry.isIntersecting),
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      style={{
        background: "#0e0e0e",
        padding: "100px 5%",
        color: "#fff",
        // minHeight: "100vh",
        position: "relative",
      }}
    >
      {/* Mobile Title */}
      {!screens.md && (
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <Title level={2} style={{ color: "#fff", margin: 0 }}>
            Floor Plans
          </Title>
        </div>
      )}

      {/* Desktop Rotated Title */}
      {screens.md && showTitle && (
        <div>
          <Title
            level={2}
            style={{
              position: "fixed",
              top: "40%",
              left: 40,
              transform: "translate(-50%, -50%) rotate(-90deg)",
              fontSize: "80px",
              fontWeight: "bold",
              color: "white",
              zIndex: 1,
              pointerEvents: "none",
              textTransform: "uppercase",
              whiteSpace: "nowrap",
              transition: "opacity 0.3s ease",
            }}
          >
            Floor Plans
          </Title>
        </div>
      )}

      <Row gutter={[24, 24]} justify="center">
        {floorPlans.map((plan, index) => (
          <Col xs={22} sm={20} md={7} key={index}>
            <div
              style={{
                background: "rgba(255,255,255,0.05)",
                borderRadius: "20px",
                overflow: "hidden",
                cursor: "pointer",
                boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "240px",
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                <img
                  src={plan.img}
                  alt={plan.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.6s ease",
                    filter: "blur(10px)",
                  }}
                />

                {/* Centered View Plan Button */}
                <Button
                  type="default"
                  ghost
                  size="large"
                  onClick={handleClick}
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    border: "1px solid #fff",
                    backgroundColor: "rgba(255,255,255,0.1)",
                    color: "#fff",
                    fontWeight: "bold",
                    borderRadius: "8px",
                    backdropFilter: "blur(4px)",
                    padding: "6px 20px",
                  }}
                >
                  View Plan
                </Button>
              </div>

              <div
                style={{
                  padding: "24px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  height: "100%",
                }}
              >
                <Title level={4} style={{ color: "#fff", margin: "0 0 10px" }}>
                  {plan.title}
                </Title>
                <Paragraph style={{ color: "#ccc", fontSize: "15px" }}>
                  {plan.description}
                </Paragraph>
              </div>
            </div>
          </Col>
        ))}
      </Row>

      <Modal
        open={isModalVisible}
        footer={null}
        onCancel={handleCancel}
        centered
        bodyStyle={{ padding: 0 }}
      >
        <CommonForm />
      </Modal>
    </div>
  );
};

export default FloorPlan;
