import React from "react";

function Certifications() {
  return (
    <section className="section certifications-section" id="certifications" aria-labelledby="certifications-title">
      <header className="section-heading compact-heading" data-reveal>
        <span className="section-number">05</span>
        <p className="section-label">Certifications</p>
        <h2 id="certifications-title">Verified credentials.</h2>
      </header>
      <div className="certification-note" data-reveal>
        <span>Certification record</span>
        <p>Verified certifications will be listed here as they are completed.</p>
      </div>
    </section>
  );
}

export default Certifications;
