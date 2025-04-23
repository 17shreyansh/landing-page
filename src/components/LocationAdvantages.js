import React, { useEffect } from "react";
import { Typography, List } from "antd";
import AOS from "aos";
import "aos/dist/aos.css";

const { Title, Paragraph } = Typography;

const LocationAdvantage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const advantages = [
    "Prime city-center location",
    "5 mins walk from Metro Station",
    "Close to top-rated restaurants and cafés",
    "High footfall area for business exposure",
    "Proximity to banks, ATMs, and supermarkets",
    "Safe neighborhood with 24/7 connectivity",
  ];

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        padding: "60px 10%",
        background: "#fff",
        gap: "40px",
        justifyContent: "space-between",
      }}
    >
      {/* Left Side: Advantages List */}
      <div
        style={{
          flex: "1",
          minWidth: "320px",
          maxWidth: "100%",
        }}
        data-aos="fade-right"
      >
        <Title level={1} 
        style={{fontWeight: 700, fontSize:80, textAlign:"left", marginTop:-10}}
        >Location</Title>
        <Paragraph style={{ fontSize: "16px", color: "#595959" }}>
          Located in the heart of the city, our space offers unparalleled access and convenience.
        </Paragraph>

        <List
          dataSource={advantages}
          renderItem={(item) => (
            <List.Item>
              <span style={{ fontSize: "16px" }}>✔️ {item}</span>
            </List.Item>
          )}
        />
      </div>

      {/* Right Side: Google Map */}
      <div
        style={{
          flex: "1",
          minWidth: "320px",
          height: "60vh",
          borderRadius: "12px",
          overflow: "hidden",
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.15)",
        }}
        data-aos="fade-left"
      >
        <iframe
          title="location-map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609858294!2d72.74109934803173!3d19.08219783966745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63d361f5d05%3A0x740b67a91a8df0d7!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1682268228433!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default LocationAdvantage;
