// File: src/pages/Home.jsx
import React, { useState } from 'react';
import Banner from '../components/Banner';
import Nav from '../components/Nav';
import FormPopup from '../components/Popup';
import ProjectHighlights from '../components/ProjectHighlights';
import FloorPlan from '../components/FloorPlan';
import PricingPlan from '../components/PricingPlan';
import "../App.css"; // Import external CSS for hover styles
import Amenities from '../components/Amenities';
import LocationAdvantages from '../components/LocationAdvantages';
import FooterSection from '../components/Footer';
import Gallery from '../components/Gallery';



const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openPopup = () => setIsModalOpen(true);
  const closePopup = () => setIsModalOpen(false);

  return (
    <>
    <Nav openPopup={openPopup} />
<Banner openPopup={openPopup} />
<FormPopup visible={isModalOpen} onClose={closePopup} />

<div id="highlights">
  <ProjectHighlights />
</div>
<div id="floor-plan">
  <FloorPlan />
</div>
<div id="pricing">
  <PricingPlan />
</div>
<div id="amenities">
  <Amenities />
</div>
<div id="location">
  <LocationAdvantages />
</div>
<div id="gallery">
  <Gallery />
</div>

<div id="contact">
  <FooterSection />
</div>

    </>
  );
};

export default Home;
