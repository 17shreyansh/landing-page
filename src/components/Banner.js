import React, { useState } from "react";
import { Carousel, Row, Col, Typography, Button, Grid } from "antd";
import CommonForm from "./Form";
import BannerImage1 from "../assets/1.jpg";
import BannerImage2 from "../assets/2.jpg";
import BannerImage3 from "../assets/3.jpg";
import BannerImage4 from "../assets/4.jpg";

const { Title, Paragraph } = Typography;
const { useBreakpoint } = Grid;

const slides = [
  {
    image: BannerImage1,
    title: "Modern Workspace in Business Hub",
    description: "Spacious, fully-furnished offices designed for productivity and professionalism."
  },
  {
    image: BannerImage2,
    title: "Ergonomic and Aesthetic Designs",
    description: "World-class interiors crafted to create a vibrant work environment."
  },
  {
    image: BannerImage3,
    title: "Accessible Location",
    description: "Situated in the heart of the city with top connectivity and facilities."
  },
  {
    image: BannerImage4,
    title: "Premium Infrastructure",
    description: "High-speed internet, 24/7 security, and essential amenities included."
  },
];

const Banner = ({ openPopup }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const screens = useBreakpoint();

  const handleBeforeChange = (from, to) => {
    setCurrentSlide(to);
  };

  return (
    <div style={{ position: "relative", overflow: "hidden" }}>
      {(screens.lg || screens.md) && (
        <div style={{
          position: "absolute",
          left: 0,
          top: "50%",
          transform: "translateY(-50%) rotate(180deg)",
          writingMode: "vertical-rl",
          background: "rgba(0, 0, 0, 0.3)",
          backdropFilter: "blur(4px)",
          padding: "8px 14px",
          color: "#fff",
          fontWeight: "bold",
          fontSize: screens.md ? 12 : 14,
          zIndex: 2,
          height: "100%",
          textAlign: "center"
        }}>
          123, Skyline Towers, Mumbai
        </div>
      )}

      {(screens.lg || screens.md) && (
        <div
        style={{
          position: "absolute",
          top: 600,
          left: 100,
          background: "rgba(255, 255, 255, 0.08)",
          border: "1px solid rgba(255, 255, 255, 0.3)",
          borderRadius: "16px",
          padding: "16px 24px",
          color: "#fff",
          fontSize: screens.md ? 14 : 16,
          fontWeight: "bold",
          zIndex: 2,
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          boxShadow: "0 8px 20px rgba(0, 0, 0, 0.4)",
          display: "flex",
          flexDirection: "column",
          gap: "4px",
          transform: "translateY(0)",
          transition: "all 0.4s ease-in-out"
        }}
      >
        <div style={{
          fontSize: "20px",
          letterSpacing: 1,
          color: "#ffffffcc"
        }}>
          Starting Price
        </div>
        <div style={{
          fontSize: "28px",
          color: "#ffc107",
          fontWeight: 700
        }}>
          ₹5 CR
        </div>
      </div>
      
      )}

      {(screens.lg || screens.md) && (
        <div style={{
          position: "absolute",
          bottom: 50,
          right: 50,
          width: screens.md ? 400 : 300,
          padding: "5px 10px",
          borderRadius: 8,
          fontWeight: "bold",
          zIndex: 2
        }}>
          <CommonForm />
        </div>
      )}

      <Carousel
        autoplay
        dots={false}
        effect="scrollx"
        beforeChange={handleBeforeChange}
        arrows
      >
        {slides.map((slide, index) => (
          <div key={index}>
            <div
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url(${slide.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                minHeight: "calc(100vh - 64px)",
                display: "flex",
                alignItems: "center",
                padding: screens.xs ? "20px" : "0 5%",
                position: "relative",
                height: "100vh"
              }}
            >
              {(screens.lg || screens.md) && (
                <Row
                  align="middle"
                  style={{ width: "100%" }}
                  gutter={[32, 32]}
                  justify="space-between"
                >
                  <Col xs={24} md={14}>
                    <div
                      style={{
                        transition: "all 0.6s ease",
                        transform: currentSlide === index ? "translateX(0)" : "translateX(50%)",
                        opacity: currentSlide === index ? 1 : 0,
                        paddingLeft: screens.md ? "20px" : "50px",
                        paddingBottom: screens.md ? "100px" : "300px"
                      }}
                    >
                      <Title style={{ color: "white", fontSize: screens.md ? "30px" : "38px" }}>{slide.title}</Title>
                      <Paragraph style={{ color: "white", fontSize: screens.md ? "16px" : "18px", maxWidth: "600px" }}>
                        {slide.description}
                      </Paragraph>
                      <Button className="button" size="large" onClick={openPopup}>
                        Enquire Now
                      </Button>
                    </div>
                  </Col>
                </Row>
              )}

              {screens.xs && (
                <div style={{ width: "100%", paddingTop: "300px", paddingLeft: 10 }}>
                  <Title level={4} style={{ color: "white" }}>{slide.title}</Title>
                  <Button className="button" size="large" style={{ width: "150px" }} onClick={openPopup}>
                    Enquire Now
                  </Button>
                </div>
              )}
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Banner;
