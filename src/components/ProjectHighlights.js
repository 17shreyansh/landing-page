import React from "react";
import { Row, Col, Typography } from "antd";
import {
  EnvironmentOutlined,
  ThunderboltOutlined,
  ClusterOutlined,
  HomeOutlined,
  WifiOutlined,
  CalendarOutlined,
} from "@ant-design/icons";

const { Title, Paragraph } = Typography;

const highlights = [
  {
    icon: <EnvironmentOutlined />,
    title: "Prime Location",
    description: "Situated at the city’s core, offering excellent connectivity to all major areas.",
  },
  {
    icon: <ThunderboltOutlined />,
    title: "24/7 Power Backup",
    description: "Complete power backup for uninterrupted lifestyle and business needs.",
  },
  {
    icon: <ClusterOutlined />,
    title: "Modern Architecture",
    description: "Contemporary, sleek design with luxurious aesthetics and functionality.",
  },
  {
    icon: <HomeOutlined />,
    title: "Smart Homes",
    description: "Automated interiors equipped with intelligent controls and monitoring.",
  },
  {
    icon: <WifiOutlined />,
    title: "High-Speed Internet",
    description: "Seamless internet access for all your work-from-home or streaming needs.",
  },
  {
    icon: <CalendarOutlined />,
    title: "Business Lounge",
    description: "Sophisticated spaces for meetings, networking, and relaxation.",
  },
];

const ProjectHighlights = () => {
  return (
    <div
      style={{
        padding: "80px 5%",
        background: "#f4f6f8",
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
        Project Highlights
      </Title>

      <Row gutter={[24, 24]} justify="center">
        {highlights.map((item, index) => (
          <Col xs={12} sm={12} md={8} key={index}>
            <div
              style={{
                borderRadius: "16px",
                background: "rgba(255, 255, 255, 0.85)",
                boxShadow: "0 8px 24px rgba(0,0,0,0.05)",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
                padding: "30px",
                transition: "all 0.4s ease",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px)";
                e.currentTarget.style.boxShadow = "0 15px 30px rgba(0,0,0,0.12)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.05)";
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

export default ProjectHighlights;
