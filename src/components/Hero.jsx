import React from "react";
import { ArrowDown, ArrowUpRight } from "lucide-react";

function Hero({ profile }) {
  return (
    <section className="hero-section" id="home" aria-labelledby="hero-title">
      <div className="hero-frame">
        <div className="hero-frame-top">
          <span>{profile.name}</span>
          <span>DevOps portfolio · 2025</span>
          <span>{profile.location}</span>
        </div>

        <div className="hero-layout">
          <div className="hero-copy">
            <p className="hero-name">Entry-level DevOps engineer</p>
            <h1 id="hero-title">
              DevOps
              <span>Engineer</span>
            </h1>
            <p className="hero-tagline">{profile.tagline}</p>
          </div>

          <aside className="hero-profile" id="summary" aria-labelledby="hero-profile-title">
            <div className="hero-profile-heading">
              <span id="hero-profile-title">About me</span>
              <span>01</span>
            </div>
            <p className="hero-profile-lead">
              Computer Engineering student building practical experience through cloud and automation projects.
            </p>
            <p>
              I bring a structured approach to problem-solving, reliable delivery, and continuous learning. I am
              seeking an entry-level role where I can contribute and grow with an experienced engineering team.
            </p>
            <div className="hero-actions">
              <a className="button button-dark" href="#projects">
                Explore projects <ArrowDown size={16} />
              </a>
              <a className="button button-light" href={`mailto:${profile.email}`}>
                Get in touch <ArrowUpRight size={16} />
              </a>
            </div>
          </aside>
        </div>

        <div className="hero-status-row" aria-label="Professional focus">
          <span><i /> Open to opportunities</span>
          <span>Cloud infrastructure</span>
          <span>CI/CD and automation</span>
        </div>
      </div>
    </section>
  );
}

export default Hero;
