import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.css';
function Navbar() {
  const [navActive, setNavActive] = useState(false);

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  const closeMenu = () => {
    setNavActive(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) {
        closeMenu();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (window.innerWidth <= 1200) {
      closeMenu();
    }
  }, []);

  return (
    <nav class="navbar navbar-expand-lg nal" style={{zIndex:1}}>
      <div class="container-fluid" style={{display:"flex"}}>
        <Link class="brand kaushan-script-regular" to="/" style={{flex:"1"}}>{"</>"}Sai Bhagavan</Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation" style={{flex:"1"}}>
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/AboutMe">About Me</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/achievements">Achievements</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/MyPortfolio">Projects</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/resume">Resume</Link>
            </li>
            <li class="nav-item">
              <Link class="btn btn-outline-primary btn-sm" to="mailto:2100032454cseh@gmail.com">Contact Me</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  );
}

export default Navbar;
