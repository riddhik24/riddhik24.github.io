import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isShrunk, setIsShrunk] = useState(false);

  // Handle scroll shrink effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) setIsShrunk(true);
      else setIsShrunk(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close navbar when navigating
  const closeMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-dark fixed-top ${
        isShrunk ? "navbar-shrink" : ""
      }`}
      id="mainNav"
    >
      <div className="container">
        <Link className="navbar-brand" to="/home" onClick={closeMenu}>
          <h5 className="font-bold">Riddhik Mohite</h5>
        </Link>

        {/* Toggler */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
        >
          Menu <i className="fas fa-bars ms-1"></i>
        </button>

        {/* Collapsible menu */}
        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
          <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/home" onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/expertise" onClick={closeMenu}>
                Expertise
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about" onClick={closeMenu}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/blogs" onClick={closeMenu}>
                Blogs
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact" onClick={closeMenu}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
