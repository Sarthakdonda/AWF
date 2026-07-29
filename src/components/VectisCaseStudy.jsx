import React from "react";
import { Activity, ArrowLeft, ArrowUpRight, Check, Cloud, Code2, Database, FileCode2, GitPullRequest, Server, ShieldCheck, Users } from "lucide-react";
import { Link } from "react-router-dom";

const metrics = [
  ["06", "core product capabilities"],
  ["03", "cloud providers supported"],
  ["Real time", "multiplayer architecture"],
  ["HCL", "production-ready output"],
];

function VectisCaseStudy({ project }) {
  return (
    <main id="main-content" className="case-study">
      <section className="case-hero">
        <Link className="case-back" to="/#projects"><ArrowLeft size={15} /> Back to projects</Link>
        <div className="case-eyebrow"><span>01 / Featured case study</span><span>Cloud engineering · 2026</span></div>
        <h1><span className="case-title-word">Vectis</span><span>®</span></h1>
        <div className="case-intro">
          <p>Intelligent cloud architecture, from a shared canvas to deployable infrastructure.</p>
          <div className="case-actions">
            <a href={project.github} target="_blank" rel="noreferrer">View repository <GitPullRequest size={15} /></a>
            <a className="dark" href={project.live} target="_blank" rel="noreferrer">Visit live product <ArrowUpRight size={15} /></a>
          </div>
        </div>
      </section>

      <section className="case-dashboard" aria-label="Vectis product workflow" data-reveal>
        <div className="dashboard-label"><span>Architecture workspace</span><span className="status-dot">System operational</span></div>
        <div className="architecture-canvas">
          <div className="case-canvas-grid" />
          <div className="canvas-live"><Users size={14} /><span>3 engineers online</span><i /><i /><i /></div>
          <div className="canvas-cloud-label"><Cloud size={14} /><span>AWS / production-vpc</span><b>synced</b></div>

          <svg className="case-data-paths" viewBox="0 0 1200 520" preserveAspectRatio="none" aria-hidden="true">
            <path className="path-underlay" d="M205 255 H430 C470 255 470 165 515 165 H635 C680 165 680 255 725 255 H990" />
            <path className="path-flow" d="M205 255 H430 C470 255 470 165 515 165 H635 C680 165 680 255 725 255 H990" />
            <circle r="4"><animateMotion dur="4.5s" repeatCount="indefinite" path="M205 255 H430 C470 255 470 165 515 165 H635 C680 165 680 255 725 255 H990" /></circle>
            <circle r="4"><animateMotion begin="-2.25s" dur="4.5s" repeatCount="indefinite" path="M205 255 H430 C470 255 470 165 515 165 H635 C680 165 680 255 725 255 H990" /></circle>
          </svg>

          <div className="architecture-node node-source"><span className="node-number">01</span><Server /><strong>Compute</strong><small>EC2 · t3.micro</small><em><i /> Healthy</em></div>
          <div className="architecture-node node-data"><span className="node-number">02</span><Database /><strong>PostgreSQL</strong><small>RDS · encrypted</small><em><i /> Healthy</em></div>
          <div className="architecture-node node-engine"><span className="node-number">03</span><Code2 /><strong>HCL engine</strong><small>Generating modules</small><em><i /> Live</em></div>

          <div className="case-terminal">
            <div className="terminal-head"><span><FileCode2 size={14} /> main.tf</span><b>Terraform</b></div>
            <div className="terminal-code">
              <span><i>resource</i> &quot;aws_instance&quot; &quot;web&quot; &#123;</span>
              <span>&nbsp;&nbsp;ami&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= var.ami_id</span>
              <span>&nbsp;&nbsp;instance_type = &quot;t3.micro&quot;</span>
              <span>&nbsp;&nbsp;subnet_id&nbsp;&nbsp;&nbsp;&nbsp;= aws_subnet.app.id</span>
              <span>&#125;<b className="terminal-caret" /></span>
            </div>
            <div className="terminal-foot"><span>✓ validated</span><span>4 resources ready</span></div>
          </div>

          <div className="case-cursor cursor-one"><span>SD</span><b>Reviewing VPC</b></div>
          <div className="case-cursor cursor-two"><span>AK</span><b>Editing compute</b></div>
          <div className="canvas-insights"><span><Activity />Cost <b>$24/mo</b></span><span><ShieldCheck />Security <b>Passed</b></span><span><GitPullRequest />PR <b>#184 ready</b></span></div>
        </div>
      </section>

      <section className="case-content" data-reveal>
        <aside><span>01</span><p>Project overview</p></aside>
        <div className="case-narrative"><h2>Infrastructure work should begin with clarity—not boilerplate.</h2><p>{project.overview}</p><p>Vectis brings planning, review, governance, and delivery into one collaborative workflow. The interface stays visual for cross-functional teams while its output remains useful to engineers.</p></div>
      </section>

      <section className="case-metrics" data-reveal>{metrics.map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}</section>

      <section className="case-content case-features-section" data-reveal>
        <aside><span>02</span><p>Capabilities</p></aside>
        <div><h2>Designed around the complete infrastructure lifecycle.</h2><div className="case-feature-grid">{project.features.map((feature, i) => <article key={feature}><span>0{i + 1}</span><Check size={18} /><p>{feature}</p></article>)}</div></div>
      </section>

      <section className="case-content case-architecture" data-reveal>
        <aside><span>03</span><p>Technical system</p></aside>
        <div><h2>A collaborative frontend backed by an event-driven delivery pipeline.</h2><div className="architecture-row"><div><Users /><strong>Collaborate</strong><span>React Flow · Yjs · WebSockets</span></div><i>→</i><div><Cloud /><strong>Model</strong><span>Node.js · PostgreSQL · Zustand</span></div><i>→</i><div className="dark"><Code2 /><strong>Deliver</strong><span>Terraform · GitHub · AWS</span></div></div><div className="case-stack">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div>
      </section>

      <section className="case-next" data-reveal><span>Next step</span><h2>Have an infrastructure problem worth solving?</h2><Link to="/contact">Start a conversation <ArrowUpRight /></Link></section>
    </main>
  );
}

export default VectisCaseStudy;
