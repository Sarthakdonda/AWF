import React, { useState } from "react";
import { ArrowUpRight, Check, Copy } from "lucide-react";

function Contact({ profile, contactLinks }) {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-title">
      <div className="contact-inner">
        <header className="contact-header" data-reveal>
          <span>06</span>
          <p>Connect with me</p>
          <span className="contact-status"><i /> Available for project work</span>
        </header>

        <div className="contact-callout" data-reveal>
          <h2 id="contact-title">Let&apos;s connect and build something reliable.</h2>
          <p>LinkedIn · GitHub · Email</p>
        </div>

        <div className="contact-email-row" data-reveal>
          <a href={`mailto:${profile.email}`}>{profile.email}<ArrowUpRight size={25} /></a>
          <button type="button" onClick={copyEmail} aria-live="polite">
            {copied ? <Check size={16} /> : <Copy size={16} />}
            {copied ? "Copied" : "Copy email"}
          </button>
        </div>

        <div className="contact-details" data-reveal>
          <div><span>Location</span><strong>{profile.location}</strong></div>
          <nav aria-label="Contact links">
            {contactLinks.map((link) => {
              const Icon = link.icon;
              const external = link.href.startsWith("http");
              return (
                <a key={link.href} href={link.href} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined}>
                  <Icon size={16} /> {link.label} {external && <ArrowUpRight size={14} />}
                </a>
              );
            })}
          </nav>
        </div>
      </div>
    </section>
  );
}

export default Contact;
