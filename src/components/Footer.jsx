import React from "react";

function Footer({ profile }) {
  return (
    <footer className="site-footer">
      <p className="footer-identity">
        <strong>{profile.name}</strong>
        <span>—</span>
        <span>{profile.role}</span>
      </p>

      <nav className="footer-socials" aria-label="Social links">
        <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
        <span aria-hidden="true">|</span>
        <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        <span aria-hidden="true">|</span>
        <a href={`mailto:${profile.email}`}>Email</a>
      </nav>

      <p className="footer-copyright">© 2025 {profile.name}. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;
