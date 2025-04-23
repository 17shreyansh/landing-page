// File: src/App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import FormPopup from "./components/Popup";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openPopup = () => setIsModalOpen(true);
  const closePopup = () => setIsModalOpen(false);

  
  return (
    <Router>
      {/* Reusable popup available across routes */}
      <FormPopup visible={isModalOpen} onClose={closePopup} />

      <Routes>
        <Route path="/" element={<Home openPopup={openPopup} />} />
        {/* Add other pages if needed in the future */}
      </Routes>
    </Router>
  );
}

export default App;
