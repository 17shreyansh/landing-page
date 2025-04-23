import React, { useEffect, useState, useRef } from "react";
import { Typography } from "antd";
import Image1 from "../assets/1.jpg";
import Image2 from "../assets/2.jpg";

const { Title, Paragraph } = Typography;

const styles = {
  section: {
    height: "100vh",
    position: "relative",
    display: "flex",
    alignItems: "center",
    overflow: "hidden",
  },
  verticalHeading: {
    position: "fixed",
    top: "50%",
    right: -250,
    transform: "translateY(-50%) rotate(-90deg)",
    fontSize: "100px",
    fontWeight: "bold",
    color: "black",
    zIndex: -2,
    pointerEvents: "none",
    textTransform: "uppercase",
    whiteSpace: "nowrap",
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
      : "polygon(0 0, 80% 0, 100% 100%, 0 100%)",
    transition: "0.5s",
  }),
  textContainer: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "5vw",
  },
};

const OverviewHighlights = () => {
  const [showHighlightHeading, setShowHighlightHeading] = useState(true);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const highlightRef = useRef(null);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowHighlightHeading(!entry.isIntersecting);
      },
      { threshold: 1 }
    );

    if (highlightRef.current) {
      observer.observe(highlightRef.current);
    }

    return () => {
      
    };
  }, []);

  return (
    <>
      {/* OVERVIEW Section */}
      <section style={styles.section}>
        <div style={{ display: "flex", width: "100%", height: "100%" }}>
          <div style={styles.imageContainer(Image1)}></div>
          <div style={styles.textContainer}>
            <Title level={1} style={{ color: "#111", fontSize: "3rem" }}>
              Modern Living Like Never Before
            </Title>
            <Paragraph style={{ fontSize: "1.2rem", color: "#333" }}>
              Explore thoughtfully crafted living spaces that blend aesthetics with
              comfort. Whether you're working or relaxing, everything around you
              inspires clarity and calm.
            </Paragraph>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS Section */}
      <section style={styles.section} ref={highlightRef}>
        {/* Conditionally show heading */}
        {!isSmallScreen && (
          <div
            style={{
              ...styles.verticalHeading,
              opacity: showHighlightHeading ? 1 : 0,
            }}
          >
            HIGHLIGHTS
          </div>
        )}

        <div style={{ display: "flex", width: "100%", height: "100%" }}>
          <div style={styles.textContainer}>
            <Title level={1} style={{ color: "#111", fontSize: "3rem" }}>
              Unmatched Lifestyle Perks
            </Title>
            <Paragraph style={{ fontSize: "1.2rem", color: "#333" }}>
              Rooftop gardens, tech-integrated security, and immersive experiences
              for every age – enjoy the perks that make every day exceptional.
            </Paragraph>
          </div>
          <div style={styles.imageContainer(Image2, true)}></div>
        </div>
      </section>
    </>
  );
};

export default OverviewHighlights;
  
