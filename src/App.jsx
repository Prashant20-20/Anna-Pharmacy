import Navbar from "./components/Navbar";
import { Routes, Route, useLocation } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Branches from "./pages/Branches";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App() {
  const location = useLocation();

  return (
    <div className="font-sans">
      
      {/* Navbar always visible */}
      <Navbar />

      {/* Pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/branches" element={<Branches />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

       {location.pathname !== "/" && <Footer />} 

    </div>
  );
}

export default App;
