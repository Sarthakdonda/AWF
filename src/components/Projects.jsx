import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

function Projects({ projects }) {
  return (
    <section className="section projects-section" id="projects" aria-labelledby="projects-title">
      <header className="projects-heading" data-reveal>
        <div className="projects-heading-meta">
          <span>03</span>
          <p>Projects</p>
          <span>02 product case studies</span>
        </div>
        <h2 id="projects-title">Selected projects</h2>
      </header>

      <div className="project-list">
        {projects.map((project, index) => (
          <article className="project-card featured-project" key={project.title} data-reveal>
            <div className="project-topline">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <span>{project.type}</span>
              <span>{index === 0 ? "Cloud engineering" : "Full-stack platform"}</span>
            </div>

            <Link className={`project-summary project-summary-${project.slug}`} to={`/projects/${project.slug}`} aria-label={`Read the ${project.title} case study`}>
              <div>
                <span className="project-kicker">{project.slug === "vectis" ? "Cloud infrastructure · Product engineering" : "EV mobility · Full-stack engineering"}</span>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
              </div>
              <span className="project-read-more">Explore case study <ArrowRight size={18} /></span>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
