import React, { useState } from "react";
import { Typography } from "antd";
import SmartHome from "../assets/1.jpg";
import Pool from "../assets/2.jpg";
import Theatre from "../assets/3.jpg";
import Lounge from "../assets/4.jpg";

const { Title, Paragraph } = Typography;

const images = [
  { src: SmartHome, alt: "Smart Home", description: "Control lights, AC & security with your phone." },
  { src: Pool, alt: "Infinity Pool", description: "Relax in our rooftop pool with city views." },
  { src: Theatre, alt: "Private Theatre", description: "Enjoy blockbusters in your own private screen." },
  { src: Lounge, alt: "Co-working Lounge", description: "Work and network in a premium environment." },
  { src: SmartHome, alt: "Smart Home", description: "Control lights, AC & security with your phone." },
  { src: Pool, alt: "Infinity Pool", description: "Relax in our rooftop pool with city views." },
  { src: Theatre, alt: "Private Theatre", description: "Enjoy blockbusters in your own private screen." },
  { src: Lounge, alt: "Co-working Lounge", description: "Work and network in a premium environment." },
];

const Gallery = () => {
  const [hoveredImage, setHoveredImage] = useState(null);

  const handleMouseEnter = (index) => setHoveredImage(index);
  const handleMouseLeave = () => setHoveredImage(null);

  return (
    <section style={{ backgroundColor: "#fff", padding: "60px 5vw", textAlign: "center" }}>
      <Title level={2} style={{ fontSize: "80px", fontWeight: "700", color: "#111", marginTop: -15 }}>
        Gallery
      </Title>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px" }}>
        {images.map((img, index) => (
          <div
            key={index}
            style={{
              position: "relative",
              overflow: "hidden",
              borderRadius: "16px",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              cursor: "pointer",
              transform: hoveredImage === index ? "scale(1.05)" : "scale(1)",
              boxShadow: hoveredImage === index ? "0 15px 45px rgba(0, 0, 0, 0.3)" : "0 10px 30px rgba(0, 0, 0, 0.2)",
            }}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <img
              alt={img.alt}
              src={img.src}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transition: "transform 0.4s ease",
              }}
            />
            <div
              style={{
                position: "absolute",
                top: "0",
                left: "0",
                right: "0",
                bottom: "0",
                background: "rgba(0, 0, 0, 0.6)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                transition: "opacity 0.4s ease",
                opacity: hoveredImage === index ? 1 : 0,
              }}
            >
              <div style={{ textAlign: "center", color: "#fff", padding: "20px", zIndex: "2" }}>
                <Title level={3} style={{ fontSize: "26px", fontWeight: "700" }}>
                  {img.alt}
                </Title>
                <Paragraph style={{ fontSize: "16px", fontWeight: "300", marginTop: "10px" }}>
                  {img.description}
                </Paragraph>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
