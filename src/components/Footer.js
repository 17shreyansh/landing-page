import React from "react";
import { Row, Col, Typography } from "antd";
import CommonForm from "./Form";

const { Title, Paragraph } = Typography;

const FooterSection = () => {
  return (
    <div style={{ background: "#222", color: "#fff", padding: "40px 10%" }}>
      <Row gutter={[32, 32]} justify="space-between">
        {/* Contact Us */}
        <Col xs={24} sm={12} md={8} lg={10} xl={10}>
          <CommonForm/>
        </Col>

        {/* About the Developer */}
        <Col xs={24} sm={12} md={8} lg={6} xl={6}>
          <Title level={3} style={{ color: "#fff", fontSize: "24px", fontWeight: "600" }}>About the Developer</Title>
          <Paragraph style={{ color: "#bbb", fontSize: "14px", lineHeight: "1.5" }}>
            I am a passionate web developer focused on building user-friendly, scalable websites. My goal is to deliver innovative and reliable solutions for businesses. If you're interested in collaboration or web development services, feel free to reach out!
          </Paragraph>
        </Col>

        {/* Quick Links */}
        <Col xs={24} sm={12} md={8} lg={6} xl={6}>
          <Title level={3} style={{ color: "#fff", fontSize: "24px", fontWeight: "600" }}>Quick Links</Title>
          <ul style={{ listStyle: "none", paddingLeft: "0", marginBottom: "0" }}>
            <li><a href="#home" style={{ color: "#bbb", fontSize: "16px", textDecoration: "none" }}>Home</a></li>
            <li><a href="#services" style={{ color: "#bbb", fontSize: "16px", textDecoration: "none" }}>Services</a></li>
            <li><a href="#about" style={{ color: "#bbb", fontSize: "16px", textDecoration: "none" }}>About Us</a></li>
            <li><a href="#contact" style={{ color: "#bbb", fontSize: "16px", textDecoration: "none" }}>Contact</a></li>
          </ul>
        </Col>
      </Row>



      <div className="footer-bottom" style={{ textAlign: "center", marginTop: "40px" }}>
        <Paragraph style={{ fontSize: "14px", color: "#bbb", marginTop: "20px" }}>
          &copy; 2025 Your Company Name. All Rights Reserved.
        </Paragraph>
      </div>
    </div>
  );
};

export default FooterSection;
