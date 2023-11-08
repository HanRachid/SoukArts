import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./layouts/Navbar.tsx";
import Footer from "./layouts/Footer.tsx";
import Home from "./pages/Home.tsx";
import DashBoard from "./pages/Dashboard.tsx";
import HeroSlider from "./components/HeroSlider.tsx";

import image1 from "./assets/Rug.jpg";
import image2 from "./assets/boho-living-room-design-091922.jpg.webp";
import image3 from "./assets/interior-trend-southwest-desert-chic-style-boho-3.jpg";
import image4 from "./assets/styl-boho.jpg";

export default function App() {
  return (
    <div className="bg-colorBeigeLight w-full h-full ">
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <HeroSlider
            image1={image1}
            image2={image2}
            image3={image3}
            image4={image4}
          >
            RUGS CATEGORIES
          </HeroSlider>
          <div className="flex-1 flex flex-col">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<DashBoard />} />
            </Routes>
          </div>

          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}
