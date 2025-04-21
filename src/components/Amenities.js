import React, { useEffect } from "react";
import { Typography } from "antd";
import AOS from "aos";
import "aos/dist/aos.css";

// Luxurious high-quality images from the internet
const WifiImage = "https://media.istockphoto.com/id/1443156018/photo/high-speed-light-streaks-internet-data-lines.jpg?s=612x612&w=0&k=20&c=Wxjru310dRq2r8rKqVxYJwlmHq03lhM6Np2VjresfQg=";
const Banner = "https://wallpapers.com/images/hd/real-estate-white-graphics-design-qr9394ynnogt96or.jpg";

const CoffeeImage = "https://www.shutterstock.com/image-vector/set-cocktails-drinks-different-types-260nw-2155991083.jpg";
// const SecurityImage = "https://source.unsplash.com/1600x900/?security";
// const WorkstationImage = "https://source.unsplash.com/1600x900/?workspace";
// const ConferenceImage = "https://source.unsplash.com/1600x900/?conference";
// const EventImage = "https://source.unsplash.com/1600x900/?event";

const { Title, Paragraph } = Typography;

const Amenities = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div style={{ overflow: "hidden" }}>
      {/* Hero Section */}
      <div
        className="hero-section"
        style={{
          backgroundImage: `url(${WifiImage})`,
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white",
          textAlign: "center",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `url(${Banner})`,
            backgroundSize:"cover",

          }}
        ></div>
        <Title level={1} style={{ fontSize: "4rem", zIndex: 1 }}>
          Our Amenities
        </Title>
        <Paragraph style={{ fontSize: "20px", zIndex: 1 }}>
          Crafted for comfort, productivity, and an exceptional experience.
        </Paragraph>
      </div>

      {/* Dynamic Section with Creative Effects */}
      <div
        className="amenities-info"
        style={{
          padding: "80px 5%",
          backgroundColor: "#f4f6f8",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Title level={2} style={{ textAlign: "center", fontSize: "3rem" }}>
          What We Offer
        </Title>

        <div
          className="dynamic-section"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "20px",
            width: "100%",
            marginTop: "50px",
          }}
        >
          {/* Example Section for "High-Speed Internet" */}
          <div
            className="left-panel"
            style={{
              position: "relative",
              height: "300px",
              background: `url(${WifiImage}) no-repeat center`,
              backgroundSize:"cover",
              borderRadius: "15px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
              transition: "transform 0.4s ease-in-out",
            }}
            data-aos="zoom-in"
          >
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                color: "white",
                fontSize: "1.5rem",
                fontWeight: 600,
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
              }}
            >
              High-Speed Internet
            </div>
          </div>

          <div
            className="right-panel"
            style={{
              backgroundColor: "#fff",
              borderRadius: "15px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
              padding: "40px",
            }}
          >
            <Title level={4}>Boost Your Productivity</Title>
            <Paragraph style={{ fontSize: "16px" }}>
              Experience seamless connectivity with our high-speed internet.
              Perfect for remote work, meetings, and collaboration.
            </Paragraph>
          </div>
        </div>

        {/* Additional Sections like this */}
        <div
          className="dynamic-section"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "20px",
            width: "100%",
            marginTop: "50px",
          }}
        >
          {/* Section for Complimentary Beverages */}
          <div
            className="right-panel"
            style={{
              backgroundColor: "#fff",
              borderRadius: "15px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
              padding: "40px",
            }}
          >
            <Title level={4}>Complimentary Beverages</Title>
            <Paragraph style={{ fontSize: "16px" }}>
              Enjoy a wide selection of coffee and teas to fuel your day.
              Always available to keep you refreshed.
            </Paragraph>
          </div>

          <div
            className="left-panel"
            style={{
              position: "relative",
              height: "300px",
              background: `url(${CoffeeImage}) no-repeat center center`,
              backgroundSize: "cover",
              borderRadius: "15px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
              transition: "transform 0.4s ease-in-out",
            }}
            data-aos="zoom-in"
          >
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                color: "white",
                fontSize: "1.5rem",
                fontWeight: 600,
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
              }}
            >
              Complimentary Beverages
            </div>
          </div>
        </div>

        {/* More Sections can be added with similar layout */}
      </div>
    </div>
  );
};

export default Amenities;
