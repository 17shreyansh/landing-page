import React from "react";
import { Button, Row, Col, Typography } from "antd";
import CommonForm from "./Form";
import BannerImage from "../assets/banner.jpg";

const { Title, Paragraph } = Typography;

const Banner = ({ openPopup }) => {
  return (
    <div 
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.6)), url(${BannerImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "calc(100vh - 64px)", // Account for navbar height
        paddingTop: "64px", // Prevent overlap
        display: "flex",
        alignItems: "center",
        color: "white",
        paddingLeft: "5%",
        paddingRight: "5%",
      }}
    >
      <Row
        gutter={[32, 32]}
        align="middle"
        justify="space-between"
        style={{ width: "100%" }}
      >
        <Col xs={24} md={12}>
          <Title style={{ color: "white", fontSize: "38px", fontWeight: "700" }}>
            Premium Ready-for-Office Spaces
          </Title>
          <Paragraph style={{ color: "white", fontSize: "18px", maxWidth: "500px" }}>
            Modern workspaces in a prime business location with world-class amenities and infrastructure. Designed for productivity, elegance, and convenience.
          </Paragraph>
          <Button className="button" size="large" onClick={openPopup}>
            Enquire Now
          </Button>
        </Col>
        <Col xs={24} md={10}>
          <div
            style={{
              padding: "30px",
              borderRadius: "12px",
              boxShadow: "0 8px 24px rgba(0,0,0,0.3)",
              width: "100%",
              maxWidth: "100%",
            }}
          >
            <CommonForm />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Banner;
