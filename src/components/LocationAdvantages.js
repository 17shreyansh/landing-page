import React from "react";
import { Row, Col, Typography, Carousel } from "antd";
import {
  EnvironmentOutlined,
  ShopOutlined,
  CarOutlined,
  BankOutlined,
  HeartOutlined,
  FieldTimeOutlined,
} from "@ant-design/icons";

const { Title, Paragraph } = Typography;

const locationAdvantages = [
  {
    icon: <EnvironmentOutlined />,
    title: "Prime Location",
    description: "Located in the heart of the city, ensuring easy access to major commercial and residential hubs.",
  },
  {
    icon: <ShopOutlined />,
    title: "Proximity to Shopping Centers",
    description: "Close to major shopping malls and entertainment centers, offering convenience and leisure.",
  },
  {
    icon: <CarOutlined />,
    title: "Excellent Connectivity",
    description: "Well-connected to public transport and highways, reducing travel time for work or leisure.",
  },
  {
    icon: <BankOutlined />,
    title: "Nearby Financial Institutions",
    description: "Surrounded by banks, ATMs, and financial services, making daily transactions easier.",
  },
  {
    icon: <HeartOutlined />,
    title: "Health and Wellness",
    description: "With hospitals, gyms, and wellness centers nearby, prioritizing health is simple and convenient.",
  },
  {
    icon: <FieldTimeOutlined />,
    title: "Timely Public Services",
    description: "Quick access to essential services like post offices, police stations, and emergency response units.",
  },
];

const LocationAdvantages = () => {
  return (
    <div
      style={{
        padding: "80px 5%",
        background: "#f8f8f8",
        position: "relative",
      }}
    >
      <Title
        level={2}
        style={{
          textAlign: "center",
          marginBottom: "60px",
          color: "#001529",
          fontWeight: 600,
        }}
      >
        Location Advantages
      </Title>

      <Carousel
        draggable
        dots={true}
        effect="scrollx"
        style={{
          marginBottom: "40px",
          scrollSnapType: "x mandatory", // Add scroll-snap to the carousel for smooth scrolling
        }}
      >
        {/* Slider Items */}
        <div>
          <Row gutter={[24, 24]} justify="center" style={{ overflowX: "auto", scrollSnapType: "x mandatory" }}>
            {locationAdvantages.slice(0, 3).map((item, index) => (
              <Col xs={12} sm={12} md={8} key={index}>
                <div
                  style={{
                    borderRadius: "16px",
                    background: "rgba(255, 255, 255, 0.9)",
                    boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
                    backdropFilter: "blur(10px)",
                    WebkitBackdropFilter: "blur(10px)",
                    padding: "30px",
                    cursor: "pointer",
                    margin: "0 auto",
                    textAlign: "center",
                    transform: "translateY(0)",
                    transition: "transform 0.3s ease-in-out",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-8px)";
                    e.currentTarget.style.boxShadow = "0 15px 30px rgba(0,0,0,0.15)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.1)";
                  }}
                >
                  <div
                    style={{
                      width: 60,
                      height: 60,
                      borderRadius: "50%",
                      background: "#001529",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: 20,
                    }}
                  >
                    <div style={{ color: "#fff", fontSize: 24 }}>{item.icon}</div>
                  </div>
                  <Title level={4} style={{ fontWeight: 500, color: "#002140" }}>
                    {item.title}
                  </Title>
                  <Paragraph style={{ color: "#595959", fontSize: "15px", lineHeight: 1.7 }}>
                    {item.description}
                  </Paragraph>
                </div>
              </Col>
            ))}
          </Row>
        </div>

        <div>
          <Row gutter={[24, 24]} justify="center" style={{ overflowX: "auto", scrollSnapType: "x mandatory" }}>
            {locationAdvantages.slice(3, 6).map((item, index) => (
              <Col xs={12} sm={12} md={8} key={index}>
                <div
                  style={{
                    borderRadius: "16px",
                    background: "rgba(255, 255, 255, 0.9)",
                    boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
                    backdropFilter: "blur(10px)",
                    WebkitBackdropFilter: "blur(10px)",
                    padding: "30px",
                    cursor: "pointer",
                    margin: "0 auto",
                    textAlign: "center",
                    transform: "translateY(0)",
                    transition: "transform 0.3s ease-in-out",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-8px)";
                    e.currentTarget.style.boxShadow = "0 15px 30px rgba(0,0,0,0.15)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.1)";
                  }}
                >
                  <div
                    style={{
                      width: 60,
                      height: 60,
                      borderRadius: "50%",
                      background: "#001529",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: 20,
                    }}
                  >
                    <div style={{ color: "#fff", fontSize: 24 }}>{item.icon}</div>
                  </div>
                  <Title level={4} style={{ fontWeight: 500, color: "#002140" }}>
                    {item.title}
                  </Title>
                  <Paragraph style={{ color: "#595959", fontSize: "15px", lineHeight: 1.7 }}>
                    {item.description}
                  </Paragraph>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </Carousel>

      <style>
        {`
          @media (max-width: 576px) {
            h2.ant-typography {
              font-size: 24px !important;
            }
            .ant-typography h4 {
              font-size: 18px !important;
            }
            div[style*="padding: 30px"] {
              padding: 24px !important;
            }
          }
        `}
      </style>
    </div>
  );
};

export default LocationAdvantages;
