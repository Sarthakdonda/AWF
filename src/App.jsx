import React, { useEffect, useMemo, useState } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import {
  Cloud,
  Container,
  Github,
  GitPullRequestArrow,
  Linkedin,
  Mail,
  Phone,
  Server,
  Terminal,
  Workflow,
} from "lucide-react";
import {
  siDocker,
  siGithub,
  siGithubactions,
  siGrafana,
  siJenkins,
  siLinux,
  siNginx,
  siPrometheus,
  siPython,
  siTerraform,
} from "simple-icons";

import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Education from "./components/Education.jsx";
import Certifications from "./components/Certifications.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import VectisCaseStudy from "./components/VectisCaseStudy.jsx";
import PluginCaseStudy from "./components/PluginCaseStudy.jsx";

const profile = {
  name: "Sarthak Donda",
  role: "DevOps Engineer",
  tagline: "Focused on cloud infrastructure, automation, and reliable software delivery.",
  email: "sarthakdonda4554@gmail.com",
  phone: "8200203790",
  github: "https://github.com/Sarthakdonda",
  linkedin: "https://www.linkedin.com/in/sarthak-donda-74785b39b/",
  education: "CHARUSAT · CSPIT-CE",
  location: "Gujarat, India",
};

const navItems = [
  { id: "summary", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "certifications", label: "Certifications" },
];

const skills = [
  {
    category: "Systems",
    description: "Linux workflow, shell basics, services, and server-side fundamentals.",
    icon: Server,
    tools: [{ name: "Linux", icon: siLinux }, { name: "Nginx", icon: siNginx }],
  },
  {
    category: "Cloud",
    description: "AWS-first infrastructure thinking with networking and deployment basics.",
    icon: Cloud,
    tools: [{ name: "AWS", monogram: "AWS" }],
  },
  {
    category: "Infrastructure as Code",
    description: "Repeatable provisioning and versioned infrastructure changes.",
    icon: Terminal,
    tools: [{ name: "Terraform", icon: siTerraform }],
  },
  {
    category: "Containers",
    description: "Portable application packaging and consistent runtime environments.",
    icon: Container,
    tools: [{ name: "Docker", icon: siDocker }],
  },
  {
    category: "CI/CD",
    description: "Automated validation, build checks, and delivery workflows.",
    icon: Workflow,
    tools: [
      { name: "GitHub Actions", icon: siGithubactions },
      { name: "GitHub", icon: siGithub },
      { name: "Jenkins", icon: siJenkins },
    ],
  },
  {
    category: "Monitoring & Scripting",
    description: "Operational visibility and automation utilities for reliable systems.",
    icon: GitPullRequestArrow,
    tools: [
      { name: "Python", icon: siPython },
      { name: "Prometheus", icon: siPrometheus },
      { name: "Grafana", icon: siGrafana },
    ],
  },
];

const projects = [
  {
    type: "Featured project",
    title: "Vectis — Intelligent Cloud Architecture Whiteboard",
    overview:
      "A real-time multiplayer whiteboard for cloud engineers that automatically converts visual cloud architecture diagrams into production-ready Terraform (HCL) code — eliminating manual coding effort.",
    summary: "A collaborative cloud whiteboard that turns architecture diagrams into reviewed, production-ready Terraform.",
    features: [
      "Auto-generates modular Terraform code from drag-and-drop components",
      "Real-time multiplayer collaboration using WebSockets and CRDTs (Yjs)",
      "Direct GitHub integration with automatic pull request creation",
      "Live AWS cost estimation and security guardrails",
      "One-click compliance auditing for SOC 2 and HIPAA",
      "Multi-cloud support across AWS, Azure, and GCP",
    ],
    tags: ["React Flow", "Next.js", "Node.js", "PostgreSQL", "Terraform", "WebSockets", "Yjs", "Zustand", "AWS"],
    github: "https://github.com/Sarthakdonda/vectis",
    live: "https://vectis.dev",
    visual: "vectis",
    slug: "vectis",
  },
  {
    type: "Full-stack product",
    title: "Plugin — Smart EV Infrastructure",
    summary: "An end-to-end platform for discovering stations, booking chargers, managing live sessions, payments, and network operations.",
    overview: "Plugin connects EV drivers, charging-station managers, and administrators through one operational platform—from station discovery and reservations to charging sessions, billing, analytics, and governance.",
    features: [
      "Station discovery, charger availability, and conflict-safe booking",
      "Live charging sessions with pricing snapshots and billing",
      "Wallet payments, Razorpay integration, and PDF invoices",
      "Station-manager applications, KYC documents, and approval workflows",
      "Admin analytics for stations, sessions, customers, and revenue",
      "JWT security, OTP email flows, notifications, and audit logs",
    ],
    tags: ["React", "Vite", "Framer Motion", "Java 17", "Spring Boot", "Spring Security", "MongoDB Atlas", "JWT", "Razorpay"],
    github: "https://github.com/Sarthakdonda/PLUGIN",
    slug: "plugin",
  },
];

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const location = useLocation();

  const contactLinks = useMemo(
    () => [
      { label: "LinkedIn", value: "Professional profile", href: profile.linkedin, icon: Linkedin },
      { label: "GitHub", value: "Sarthakdonda", href: profile.github, icon: Github },
      { label: "Email", value: profile.email, href: `mailto:${profile.email}`, icon: Mail },
      { label: "Phone", value: profile.phone, href: `tel:${profile.phone}`, icon: Phone },
    ],
    [],
  );

  useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.classList.add("js");
    const sectionIds = ["home", ...navItems.map((item) => item.id), "contact"];
    const sections = sectionIds.map((id) => document.getElementById(id)).filter(Boolean);
    const revealElements = document.querySelectorAll("[data-reveal]");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const updateActiveSection = () => {
      const marker = window.innerHeight * 0.34;
      const current = sections.reduce(
        (active, section) => (section.getBoundingClientRect().top <= marker ? section.id : active),
        "home",
      );
      setActiveSection(current);
    };

    let revealObserver;
    if (reduceMotion || !("IntersectionObserver" in window)) {
      revealElements.forEach((element) => element.classList.add("is-visible"));
    } else {
      revealObserver = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              observer.unobserve(entry.target);
            }
          });
        },
        { rootMargin: "0px 0px -9%", threshold: 0.12 },
      );
      revealElements.forEach((element) => revealObserver.observe(element));
    }

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);
    return () => {
      revealObserver?.disconnect();
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, [location.pathname]);

  useEffect(() => {
    if (location.pathname === "/" && location.hash) {
      window.requestAnimationFrame(() => document.querySelector(location.hash)?.scrollIntoView());
    }
  }, [location]);

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Header navItems={navItems} activeSection={activeSection} profile={profile} />
      <Routes>
        <Route path="/" element={<main id="main-content"><Hero profile={profile} /><Skills skills={skills} /><Projects projects={projects} /><Education education={profile.education} /><Certifications /></main>} />
        <Route path="/projects/vectis" element={<VectisCaseStudy project={projects[0]} />} />
        <Route path="/projects/plugin" element={<PluginCaseStudy project={projects[1]} />} />
        <Route path="/contact" element={<main id="main-content" className="contact-page"><Contact profile={profile} contactLinks={contactLinks.slice(0, 3)} /></main>} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer profile={profile} />
    </>
  );
}

export default App;
