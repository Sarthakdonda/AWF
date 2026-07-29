import React from "react";

function Education({ education }) {
  return (
    <section className="section education-section" id="education" aria-labelledby="education-title">
      <header className="section-heading compact-heading" data-reveal>
        <span className="section-number">04</span>
        <p className="section-label">Education</p>
        <h2 id="education-title">Academic foundation.</h2>
      </header>
      <article className="education-card" data-reveal>
        <span>Undergraduate</span>
        <div><h3>B.Tech in Computer Engineering</h3><p>{education}</p></div>
        <strong>Current</strong>
      </article>
    </section>
  );
}

export default Education;
