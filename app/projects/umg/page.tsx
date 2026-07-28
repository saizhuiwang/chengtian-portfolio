import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Production and A&R — Chengtian Wang",
  description:
    "A Nashville presentation exploring the production process and the role of A&R through the work of Gable Bradley.",
};

export default function UmgProject() {
  return (
    <main className="case-page">
      <header className="case-header">
        <a className="wordmark" href="/" aria-label="Chengtian Wang, home">
          CW<span>®</span>
        </a>
        <a href="/#projects">← Back to projects</a>
        <a href="mailto:cw3999@nyu.edu">Let’s talk ↗</a>
      </header>

      <section className="case-hero case-assignment-hero case-umg-hero">
        <div className="case-topline">
          <span>RECENT PROJECT / 02</span>
          <span>NASHVILLE · JAN 2026</span>
        </div>
        <div className="case-hero-grid">
          <h1>
            <span>Production</span>
            <em>&amp; A&amp;R.</em>
          </h1>
          <div className="case-assignment-copy">
            <p className="case-kicker">
              NYU × UNIVERSAL MUSIC GROUP · ASSIGNMENT
            </p>
            <p className="case-assignment-prompt">
              Reflect on the group’s Nashville experience and demonstrate an
              understanding of A&amp;R talent assessment and record production.
            </p>
            <p className="case-assignment-guidance">
              Present one mastered track the group A&amp;R’d and produced, then
              explain how the artist’s vision moved through pre-production,
              tracking, overdubs, mixing, and mastering. Address the
              artist-producer-engineer relationship, trust, the role of
              A&amp;R, and the skills required to move a record from concept to
              master.
            </p>
            <a
              className="case-assignment-source"
              href="/projects/umg/assignment-brief.pdf"
              target="_blank"
              rel="noreferrer"
            >
              View original assignment brief ↗
            </a>
            <dl className="case-assignment-meta">
              <div>
                <dt>TEAM</dt>
                <dd>The Dust Busters</dd>
              </div>
              <div>
                <dt>DELIVERABLE</dt>
                <dd>Gable Bradley A&amp;R &amp; Production Presentation</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section className="case-pdf-section" aria-labelledby="umg-pdf-title">
        <div className="case-pdf-header">
          <div>
            <span className="eyebrow eyebrow-light">
              ORIGINAL PRESENTATION
            </span>
            <h2 id="umg-pdf-title">Read the full PDF.</h2>
          </div>
          <a
            href="/projects/umg/nashville-presentation.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Open in a new tab ↗
          </a>
        </div>
        <div className="case-pdf-frame">
          <iframe
            src="/projects/umg/nashville-presentation.pdf#view=FitH&toolbar=1"
            title="Production and A&R Nashville presentation PDF"
            loading="lazy"
          />
        </div>
      </section>

      <footer className="case-footer">
        <a href="/#projects">← Back to recent projects</a>
        <a href="mailto:cw3999@nyu.edu">Discuss this project ↗</a>
      </footer>
    </main>
  );
}
