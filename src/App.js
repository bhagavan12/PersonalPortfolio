import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./Pages/Home/Navbar";
import Home from "./Pages/Home/Homescreen";
import Portfolio from "./Pages/Home/MyPortfolio";
import About from "./Pages/Home/AboutMe";
import Testimonials from "./Pages/Home/Testimonials";
import ContactMe from "./Pages/Home/ContactMe";
import MySkills from "./Pages/Home/MySkills";
import Achievements from './Pages/Home/Achievements';
import Resume from './Pages/Home/Resume';
import Loader from "./Pages/Home/Loader";
function App() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 2500); 

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="App">
      <Router>
        {!showContent ? (
          <Loader/>
        ) : (
          <div>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="*" element={<div>404 Not Found</div>}></Route>
              <Route path="/heroSection" element={<Home />} />
              <Route path="/MyPortfolio" element={<Portfolio />} />
              <Route path="/AboutMe" element={<About />} />
              <Route path="/testimonial" element={<Testimonials />} />
              <Route path="/contact" element={<ContactMe />} />
              <Route path="/contact" element={<MySkills />} />
              <Route path="/achievements" element={<Achievements />} />
              <Route path="/resume" element={<Resume />} />
            </Routes>
          </div>
        )}
      </Router>
    </div>
  );
}

export default App;
