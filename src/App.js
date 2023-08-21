import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Destinations from "./pages/Destinations";
import Gallery from "./pages/Gallery"
import Packages from "./pages/Packages";
import Contact from "./pages/Contact";
import About from "./pages/About";
import { Route, Routes } from "react-router-dom";
import "./styles.css"
import Footer from "./components/Footer";
//import { waitForElementToBeRemoved } from "@testing-library/react";
//import { wait } from "@testing-library/user-event/dist/utils";

function App() {
  return ( 
    <>
      < Navbar />
      <div className="container">
      <AnimatePresence initial={false} mode="wait">
      <Routes>        
          <Route path="/" element={< Home />} />
          <Route path="/gallery" element={< Gallery />} />
          <Route path="/destinations" element={< Destinations />} />
          <Route path="/packages" element={< Packages />} />
          <Route path="/about" element={< About />} />
          <Route path="/contact" element={< Contact />} />
      </Routes>
      </AnimatePresence>
      <Footer />
      </div>
    </>    
  )
  
}

export default App