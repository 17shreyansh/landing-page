import React, { useState, useEffect } from "react";
import { Menu, Button, Row, Col, Drawer } from "antd";
import { MenuOutlined, PhoneOutlined } from "@ant-design/icons";

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
      const scrollY = window.scrollY;

      if (scrollY - lastScrollY > 10) {
        setIsNavbarVisible(false);
      } else if (lastScrollY - scrollY > 10) {
        setIsNavbarVisible(true);
      }

      setLastScrollY(scrollY);
    };

    const handleResize = () => {
      setIsMobile(window.matchMedia("(max-width: 768px)").matches);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [lastScrollY]);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const menuItems = (
    <>
      {["highlights", "floor-plan", "pricing", "amenities", "gallery", "location", "contact"].map((id, idx) => (
        <Menu.Item
          key={idx}
          onClick={() => scrollToSection(id)}
          style={{ fontSize: "16px" , textAlign: "center" }}
        >
          {id.replace("-", " ").replace(/\b\w/g, (l) => l.toUpperCase())}
        </Menu.Item>
      ))}
    </>
  );

  const menuTextColor = isScrolled ? "#000" : "#fff";

  return (
    <Row
      justify="space-between"
      align="middle"
      style={{
        background: isScrolled ? "#fff" : "transparent",
        padding: isMobile ? "10px 16px" : "16px 70px",
        position: "fixed",
        width: "100%",
        zIndex: 999,
        transition: "top 0.5s ease, background 0.3s ease",
        top: isNavbarVisible ? "0" : "-100px",
        boxShadow: isScrolled ? "0 2px 8px rgba(0,0,0,0.1)" : "none",
      }}
    >
      <Col>
        <div
          style={{
            fontWeight: "bold",
            fontSize: isMobile ? "20px" : "22px",
            color: menuTextColor,
            transition: "color 0.3s ease",
          }}
        >
          Real Estate
        </div>
      </Col>

      {!isMobile && (
        <Col flex="auto">
          <Menu
            mode="horizontal"
            style={{
              borderBottom: "none",
              background: "transparent",
              justifyContent: "center",
              display: "flex",
              color: menuTextColor,
            }}
            theme={isScrolled ? "light" : "dark"}
          >
            {menuItems}
          </Menu>
        </Col>
      )}

      <Col>
        {!isMobile ? (
          <a
            href="tel:+917017828192"
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "8px 16px",
              backgroundColor: "black",
              color: "white",
              borderRadius: "8px",
              animation: "pulse 2s infinite",
              textDecoration: "none",
              fontWeight: "bold",
              transition: "all 0.3s ease",
              width: "160px",
              justifyContent: "center",
            }}
          >
            <PhoneOutlined style={{ marginRight: "8px" }} />
            +91 7017828192
          </a>
        ) : (
          <>
            <a
            href="tel:+917017828192"
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "8px 16px",
              backgroundColor: "black",
              color: "white",
              borderRadius: "8px",
              animation: "pulse 2s infinite",
              textDecoration: "none",
              fontWeight: "bold",
              transition: "all 0.3s ease",
              width: "160px",
              justifyContent: "center",
            }}
          >
            <PhoneOutlined style={{ marginRight: "8px" }} />
            +91 7017828192
          </a>

            <Button
              type="text"
              icon={<MenuOutlined />}
              onClick={() => setVisible(true)}
              style={{
                fontSize: "20px",
                color: menuTextColor,
                marginLeft: "12px",
              }}
            />
            <Drawer
              title="Menu"
              placement="right"
              onClose={() => setVisible(false)}
              open={visible}
              bodyStyle={{ padding: 0 }}
            >
              <Menu mode="vertical" onClick={() => setVisible(false)}>
                {menuItems}
              </Menu>
            </Drawer>
          </>
        )}
      </Col>

      <style>{`
        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }
      `}</style>
    </Row>
  );
};

export default Nav;
