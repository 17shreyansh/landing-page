import React, { useState, useEffect } from "react";
import { Menu, Button, Row, Col, Drawer } from "antd";
import { MenuOutlined } from "@ant-design/icons";

const Nav = ({ openPopup }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 300);

      if (window.scrollY > lastScrollY) {
        setIsNavbarVisible(false);
      } else {
        setIsNavbarVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

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
      <Menu.Item key="1" onClick={() => scrollToSection("highlights")}>
      Highlights
    </Menu.Item>
    <Menu.Item key="2" onClick={() => scrollToSection("floor-plan")}>
      Floor Plan
    </Menu.Item>
    <Menu.Item key="3" onClick={() => scrollToSection("pricing")}>
      Pricing
    </Menu.Item>
    <Menu.Item key="4" onClick={() => scrollToSection("amenities")}>
      Amenities
    </Menu.Item>
    <Menu.Item key="5" onClick={() => scrollToSection("gallery")}>
      Gallery
    </Menu.Item>
    <Menu.Item key="6" onClick={() => scrollToSection("location")}>
      Location
    </Menu.Item>
    <Menu.Item key="7" onClick={() => scrollToSection("contact")}>
      Contact
    </Menu.Item>
    </>
  );

  const menuTextColor = isScrolled ? "#000" : "#fff";

  return (
    <Row
      justify="space-between"
      align="middle"
      style={{
        background: isScrolled ? "#fff" : "transparent",
        padding: "10px 24px", 
        position: "fixed",
        width: "100%",
        zIndex: 999,
        transition: "all 0.4s ease",
        top: isNavbarVisible ? "0" : "-80px",
        color: menuTextColor,
      }}
    >
      <Col>
        <div
          style={{
            fontWeight: "bold",
            fontSize: "20px",
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
            defaultSelectedKeys={[]}
            style={{
              borderBottom: "none",
              background: "transparent",
              color: menuTextColor,
              transition: "color 0.3s ease",
            }}
            theme={isScrolled ? "light" : "dark"}
          >
            {menuItems}
          </Menu>
        </Col>
      )}

      <Col>
        {!isMobile && (
          <Button
            // type="primary"
            className="button"
            onClick={openPopup}
            style={{ transition: "all 0.3s ease", }}
          >
            Enquire
          </Button>
        )}

        {isMobile && (
          <>
            <Button
              type="text"
              icon={<MenuOutlined />}
              onClick={() => setVisible(true)}
              style={{
                fontSize: "20px",
                color: menuTextColor,
                transition: "color 0.3s ease",
              }}
            />
            <Drawer
              title="Menu"
              placement="right"
              onClose={() => setVisible(false)}
              open={visible}
            >
              <Menu mode="vertical" onClick={() => setVisible(false)}>
                {menuItems}
                <Menu.Item>
                  <Button type="primary" block onClick={openPopup}>
                    Enquire Now
                  </Button>
                </Menu.Item>
              </Menu>
            </Drawer>
          </>
        )}
      </Col>
    </Row>
  );
};

export default Nav;
