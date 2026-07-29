import React, { useEffect, useRef, useState } from "react";
import { ArrowRight, ArrowUpRight, Github, RotateCcw, Search, Star, X } from "lucide-react";
import { Link } from "react-router-dom";

const GITHUB_USER = "Sarthakdonda";
const GITHUB_REPOS_URL = `https://api.github.com/users/${GITHUB_USER}/repos?per_page=100&sort=updated`;

function DotLoader() {
  return (
    <span className="repo-dot-loader" role="status" aria-label="Searching repositories">
      <i />
      <i />
      <i />
    </span>
  );
}

function Projects({ projects }) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [submittedQuery, setSubmittedQuery] = useState("");
  const [repos, setRepos] = useState([]);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");
  const searchInputRef = useRef(null);

  useEffect(() => {
    if (isSearchOpen) searchInputRef.current?.focus();
  }, [isSearchOpen]);

  const searchRepositories = async (searchTerm) => {
    const normalizedQuery = searchTerm.trim();
    if (!normalizedQuery) {
      searchInputRef.current?.focus();
      return;
    }

    setSubmittedQuery(normalizedQuery);
    setStatus("loading");
    setError("");
    setRepos([]);

    try {
      const response = await fetch(GITHUB_REPOS_URL, {
        headers: { Accept: "application/vnd.github+json" },
      });

      if (!response.ok) {
        throw new Error(response.status === 403
          ? "GitHub’s request limit was reached. Try again in a few minutes."
          : "GitHub could not return the repositories right now.");
      }

      const data = await response.json();
      const matches = data.filter((repo) =>
        repo.name.toLowerCase().includes(normalizedQuery.toLowerCase()),
      );
      setRepos(matches);
      setStatus(matches.length ? "success" : "empty");
    } catch (requestError) {
      setError(requestError.message || "The repository search could not be completed.");
      setStatus("error");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    searchRepositories(query);
  };

  const closeSearch = () => {
    setIsSearchOpen(false);
    setQuery("");
    setSubmittedQuery("");
    setRepos([]);
    setError("");
    setStatus("idle");
  };

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

      <div className={`repo-search-shell${isSearchOpen ? " is-open" : ""}`}>
        <button
          className="repo-search-trigger"
          type="button"
          aria-expanded={isSearchOpen}
          aria-controls="github-repository-search"
          onClick={() => (isSearchOpen ? closeSearch() : setIsSearchOpen(true))}
        >
          <span className="repo-search-icon"><Github size={22} aria-hidden="true" /></span>
          <span>
            <strong>Search my GitHub</strong>
            <small>Browse public repositories from @{GITHUB_USER}</small>
          </span>
          <span className="repo-search-action">
            {isSearchOpen ? "Close" : "Open search"}
            {isSearchOpen ? <X size={16} /> : <ArrowRight size={16} />}
          </span>
        </button>

        {isSearchOpen && (
          <div className="repo-search-panel" id="github-repository-search">
            <form className="repo-search-form" onSubmit={handleSubmit}>
              <Search size={20} aria-hidden="true" />
              <label className="sr-only" htmlFor="repo-search-input">Search Sarthakdonda repositories</label>
              <input
                ref={searchInputRef}
                id="repo-search-input"
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Try “portfolio” or “plugin”"
                autoComplete="off"
              />
              <button type="submit" disabled={status === "loading" || !query.trim()}>
                {status === "loading" ? <DotLoader /> : <>Search <ArrowRight size={16} /></>}
              </button>
            </form>

            <div className="repo-search-results" aria-live="polite">
              {status === "idle" && (
                <div className="repo-search-note">
                  <span>GitHub / repositories</span>
                  <p>Enter a repository name to search this account’s public work.</p>
                </div>
              )}

              {status === "loading" && (
                <div className="repo-search-loading">
                  <DotLoader />
                  <p>Looking through @{GITHUB_USER} for “{submittedQuery}”</p>
                </div>
              )}

              {status === "success" && (
                <div className="repo-results-list">
                  <div className="repo-results-meta">
                    <span>{String(repos.length).padStart(2, "0")} result{repos.length === 1 ? "" : "s"}</span>
                    <span>Matched “{submittedQuery}”</span>
                  </div>
                  {repos.map((repo) => (
                    <a className="repo-result" href={repo.html_url} target="_blank" rel="noreferrer" key={repo.id}>
                      <span className="repo-result-index">{String(repos.indexOf(repo) + 1).padStart(2, "0")}</span>
                      <span className="repo-result-copy">
                        <strong>{repo.name}</strong>
                        <small>{repo.description || "Public GitHub repository"}</small>
                      </span>
                      <span className="repo-result-stars"><Star size={14} /> {repo.stargazers_count}</span>
                      <span className="repo-result-link">View repository <ArrowUpRight size={16} /></span>
                    </a>
                  ))}
                </div>
              )}

              {status === "empty" && (
                <div className="repo-empty-state">
                  <strong>404</strong>
                  <div>
                    <span>Repository not found</span>
                    <p>No public repository in @{GITHUB_USER} matches “{submittedQuery}”. Check the spelling or try a shorter name.</p>
                  </div>
                  <button type="button" onClick={() => searchInputRef.current?.focus()}>Try another search</button>
                </div>
              )}

              {status === "error" && (
                <div className="repo-error-state">
                  <span>Request failed</span>
                  <p>{error}</p>
                  <button type="button" onClick={() => searchRepositories(submittedQuery)}>
                    <RotateCcw size={15} /> Retry search
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

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
