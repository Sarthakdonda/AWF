import React, { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

function Header({ navItems, activeSection, profile }) {
  const [isOpen, setIsOpen] = useState(false);
  const [compact, setCompact] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 24);
    const onKeyDown = (event) => event.key === "Escape" && setIsOpen(false);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  return (
    <header className={compact ? "site-header is-compact" : "site-header"}>
      <Link className="brand" to="/" onClick={() => setIsOpen(false)} aria-label={`${profile.name}, home`}>
        <span className="brand-mark" aria-hidden="true">SD</span>
        <span className="brand-name">{profile.name}</span>
      </Link>

      <button
        className="menu-button"
        type="button"
        aria-label={isOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={isOpen}
        aria-controls="primary-navigation"
        onClick={() => setIsOpen((value) => !value)}
      >
        {isOpen ? <X size={19} /> : <Menu size={19} />}
      </button>

      <nav id="primary-navigation" className={isOpen ? "nav-menu is-open" : "nav-menu"} aria-label="Main navigation">
        <div className="nav-links">
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={`/#${item.id}`}
              className={isHome && activeSection === item.id ? "active" : ""}
              aria-current={isHome && activeSection === item.id ? "location" : undefined}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <Link className="nav-cta" to="/contact" onClick={() => setIsOpen(false)}>
          Get in touch <ArrowUpRight size={15} />
        </Link>
      </nav>
    </header>
  );
}

export default Header;
