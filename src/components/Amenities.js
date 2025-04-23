import React, { useEffect, useState, useRef } from "react";
import { Typography, Col, Row, Carousel } from "antd";
import SmartHome from "../assets/1.jpg";
import Pool from "../assets/2.jpg";
import Theatre from "../assets/3.jpg";
import Lounge from "../assets/4.jpg";
// import { BorderOutlined } from "@ant-design/icons";

const { Title, Paragraph } = Typography;


const sliderData = [
  {
    image: SmartHome,
    title: "Smart Home",
    description: "Control lights, AC & security with your phone.",
  },
  {
    image: Pool,
    title: "Infinity Pool",
    description: "Relax in our rooftop pool with city views.",
  },
  {
    image: Theatre,
    title: "Private Theatre",
    description: "Enjoy blockbusters in your own private screen.",
  },
  {
    image: Lounge,
    title: "Co-working Lounge",
    description: "Work and network in a premium environment.",
  },
];

const Amenities = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const amenitiesRef = useRef(null);
  
const styles = {
  section: {
    minHeight: "100vh",
    position: "relative",
    display: "flex",
    alignItems: "center",
    overflow: "hidden",
    background: "#fff",
  },
  headingContainer: {
    position: "absolute",
    top: 20,
    left: 40,
    fontSize: "80px",
    fontWeight: "700",
    color: "#111",
    zIndex: 1,
    pointerEvents: "none",
    transition: "opacity 0.3s ease",
  },
  imageContainer: (url, alignRight = false) => ({
    flex: 1,
    backgroundImage: `url(${url})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    filter: "brightness(0.75)",
    clipPath: alignRight
      ? "polygon(0 0, 100% 0, 100% 100%, 20% 100%)"
      : "polygon(0 0, % 0, 100% 100%, 0 100%)",
    transition: "0.5s",
  }),
  textContainer: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "5vw",
    position: "relative",
    zIndex: 2,
  },
  overlaySlider: {
    position: "absolute",
    bottom: isSmallScreen ? "-5vh" : "-10vh",
    left: isSmallScreen ? "0vh" : "50vh",
    width: isSmallScreen ? "65vh" : "calc(100% - 40px)",
    padding: "20px",
    borderRadius: "12px",
    zIndex: 2,
  },
};


  // Efficient useEffect hook to check screen size and avoid unnecessary state updates
  useEffect(() => {
    const checkScreenSize = () => {
      const newSize = window.innerWidth < 768;
      if (newSize !== isSmallScreen) {
        setIsSmallScreen(newSize);
      }
    };

    checkScreenSize(); // Run on initial render
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, [isSmallScreen]); // Only re-run if isSmallScreen changes

  return (
    <section style={styles.section} ref={amenitiesRef}>
      <div
        style={{
          ...styles.headingContainer,
          opacity: isSmallScreen ? 0 : 1,
        }}
      >
        Amenities
      </div>

      <div style={{ display: "flex", width: "100%", height: "100%" }}>
        <div style={styles.textContainer}>
          {/* Overlay Slider */}
          <div style={styles.overlaySlider}>
            <Carousel autoplay arrows dotPosition="bottom" effect="fade">
              {sliderData.map((item, index) => (
                <div key={index}>
                  <Row
                    justify="center"
                    align="middle"
                    style={{
                      minHeight: "300px",
                      background: `url(${item.image}) no-repeat center center`,
                      backgroundSize: "cover",
                      borderRadius: 10,
                    }}
                  >
                    <Col
                      span={24}
                      style={{
                        zIndex: 2,
                        textAlign: "center",
                        color: "#fff",
                        padding: "20px",
                      }}
                    >
                      <Title level={2} style={{ color: "#fff" }}>
                        {item.title}
                      </Title>
                      <Paragraph style={{ color: "#fff", fontSize: "1rem" }}>
                        {item.description}
                      </Paragraph>
                    </Col>
                  </Row>
                </div>
              ))}
            </Carousel>
          </div>

          <Title level={1} style={{ color: "#111", fontSize: isSmallScreen? "40px" : "50px", paddingBottom:isSmallScreen? 250:100 }}>
            Premium Amenities for Every Need
          </Title>
        </div>

        {/* Image Section */}
        <div style={styles.imageContainer(SmartHome, true)}></div>
      </div>
    </section>
  );
};

export default Amenities;
