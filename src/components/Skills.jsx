import React from "react";
import TechIcon from "./TechIcon.jsx";

function Skills({ skills }) {
  return (
    <section className="section skills-section" id="skills" aria-labelledby="skills-title">
      <header className="section-heading" data-reveal>
        <span className="section-number">02</span>
        <p className="section-label">Technical stack</p>
        <h2 id="skills-title">Tools organized around the delivery lifecycle.</h2>
      </header>

      <div className="skills-table">
        {skills.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <article className="skill-row" key={skill.category} data-reveal>
              <span className="row-number">{String(index + 1).padStart(2, "0")}</span>
              <div className="skill-title"><Icon size={20} /><h3>{skill.category}</h3></div>
              <p>{skill.description}</p>
              <div className="tool-list">{skill.tools.map((tool) => <TechIcon key={tool.name} tool={tool} />)}</div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Skills;
