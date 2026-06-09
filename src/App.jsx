import Navbar from "./components/Navbar";
import { Routes, Route, useLocation } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Branches from "./pages/Branches";
import Contact from "./pages/Contact";
import ThankYou from "./pages/ThankYou";
import Footer from "./components/Footer";

// Company submenu pages
import AboutUs from "./pages/company/AboutUs";
import TheTeam from "./pages/company/TheTeam";

function App() {
  const location = useLocation();

  return (
    <div className="font-sans">
      
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="" element={<About />} />
        <Route path="/company/about-us" element={<AboutUs />} />
        <Route path="/company/the-team" element={<TheTeam />} />
        <Route path="/branches" element={<Branches />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>

      {location.pathname !== "/" && <Footer />}

    </div>
  );
}

export default App;
