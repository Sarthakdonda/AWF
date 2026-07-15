import React from "react";

function TechIcon({ tool }) {
  return (
    <span className="tech-pill">
      {tool.icon ? (
        <>
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d={tool.icon.path} /></svg>
          {tool.name}
        </>
      ) : (
        <strong>{tool.monogram || tool.name}</strong>
      )}
    </span>
  );
}

export default TechIcon;
