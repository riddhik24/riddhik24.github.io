import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "./ThemeContext";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isShrunk, setIsShrunk] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setIsShrunk(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300
        backdrop-blur-xl border-b
        ${isShrunk
          ? "py-2 bg-white/90 dark:bg-dark-bg/95 shadow-lg border-black/5 dark:border-white/5"
          : "py-4 bg-white/80 dark:bg-dark-bg/85 border-transparent"
        }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Brand */}
        <Link
          className="font-heading font-extrabold text-xl gradient-text no-underline"
          to="/"
          onClick={closeMenu}
        >
          Riddhik Mohite
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {[
            { path: "/", label: "Home" },
            { path: "/expertise", label: "Expertise" },
            { path: "/about", label: "About" },
            { path: "/blogs", label: "Blogs" },
            { path: "/contact", label: "Contact" },
          ].map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={closeMenu}
              className={`relative px-4 py-2 rounded-lg text-xs font-heading font-semibold uppercase tracking-wider no-underline transition-all duration-200
                ${isActive(item.path)
                  ? "text-accent bg-accent/10"
                  : "text-light-text-secondary dark:text-dark-text-secondary hover:text-accent hover:bg-accent/5"
                }`}
            >
              {item.label}
              {isActive(item.path) && (
                <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-5 h-0.5 bg-gradient-to-r from-accent to-accent-purple rounded-full" />
              )}
            </Link>
          ))}

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="ml-4 p-2.5 rounded-xl border transition-all duration-300 cursor-pointer
              bg-light-glass dark:bg-dark-glass
              border-light-glass-border dark:border-dark-glass-border
              text-light-text dark:text-dark-text
              hover:border-accent hover:bg-accent/10 hover:scale-105"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <i className="fas fa-sun text-amber-400 text-sm" />
            ) : (
              <i className="fas fa-moon text-indigo-500 text-sm" />
            )}
          </button>
        </div>

        {/* Mobile: toggle + menu button */}
        <div className="lg:hidden flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg border transition-all cursor-pointer
              bg-light-glass dark:bg-dark-glass
              border-light-glass-border dark:border-dark-glass-border
              text-light-text dark:text-dark-text"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <i className="fas fa-sun text-amber-400 text-sm" />
            ) : (
              <i className="fas fa-moon text-indigo-500 text-sm" />
            )}
          </button>

          <button
            className="px-3 py-2 rounded-lg border font-heading text-xs font-bold uppercase tracking-wider transition-all cursor-pointer
              text-light-text dark:text-dark-text
              border-light-glass-border dark:border-dark-glass-border
              hover:border-accent hover:bg-accent/5"
            onClick={() => setIsOpen(!isOpen)}
          >
            Menu <i className="fas fa-bars ms-1" />
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <div className="lg:hidden border-t border-light-glass-border dark:border-dark-glass-border bg-light-surface/95 dark:bg-dark-bg/95 backdrop-blur-xl">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-1">
            {[
              { path: "/", label: "Home" },
              { path: "/expertise", label: "Expertise" },
              { path: "/about", label: "About" },
              { path: "/blogs", label: "Blogs" },
              { path: "/contact", label: "Contact" },
            ].map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={closeMenu}
                className={`px-4 py-3 rounded-lg text-sm font-heading font-semibold uppercase tracking-wider no-underline transition-all
                  ${isActive(item.path)
                    ? "text-accent bg-accent/10"
                    : "text-light-text-secondary dark:text-dark-text-secondary hover:text-accent hover:bg-accent/5"
                  }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
