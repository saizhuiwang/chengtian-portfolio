import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Last Play Documentary Pitch — Chengtian Wang",
  description:
    "A sports documentary development project spanning story treatment, production, marketing, distribution, financing, and budget strategy.",
};

export default function TheLastPlayProject() {
  return (
    <main className="case-page">
      <header className="case-header">
        <a className="wordmark" href="/" aria-label="Chengtian Wang, home">
          CW<span>®</span>
        </a>
        <a href="/#projects">← Back to projects</a>
        <a href="mailto:cw3999@nyu.edu">Let’s talk ↗</a>
      </header>

      <section className="case-hero case-assignment-hero case-last-play-hero">
        <div className="case-topline">
          <span>RECENT PROJECT / 05</span>
          <span>NEW YORK · MAY 2025</span>
        </div>
        <div className="case-hero-grid">
          <h1>
            <span>The Last Play.</span>
            <em>More than a game. More than a diagnosis.</em>
          </h1>
          <div className="case-assignment-copy">
            <p className="case-kicker">
              NYU · MEDIA, CULTURE &amp; COMMUNICATION
            </p>
            <p className="case-assignment-prompt">
              Develop a sports article or magazine story into a market-ready
              film concept.
            </p>
            <p className="case-assignment-guidance">
              The team reframed reporting on Greg Brooks Jr.’s medical crisis
              and recovery as a feature sports documentary about resilience,
              athlete healthcare, and institutional accountability. The
              proposal connects the treatment with talent, production,
              audience, marketing, distribution, financing, and a $380,000
              micro-budget.
            </p>
            <dl className="case-assignment-meta">
              <div>
                <dt>TEAM</dt>
                <dd>
                  Chengtian Wang · Madison Vigue · Milena Valdez · Raven Turner
                </dd>
              </div>
              <div>
                <dt>DELIVERABLE</dt>
                <dd>Documentary Pitch &amp; Production Proposal</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section
        className="case-pdf-section"
        aria-labelledby="last-play-deck-title"
      >
        <div className="case-pdf-header">
          <div>
            <span className="eyebrow eyebrow-light">
              ORIGINAL PITCH DECK · 18 PAGES
            </span>
            <h2 id="last-play-deck-title">Explore the film pitch.</h2>
          </div>
          <a
            href="/projects/the-last-play/presentation.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Open in a new tab ↗
          </a>
        </div>
        <div className="case-pdf-frame">
          <iframe
            src="/projects/the-last-play/presentation.pdf#view=FitH&toolbar=1"
            title="Greg Brooks Jr.: The Last Play documentary pitch deck PDF"
            loading="lazy"
          />
        </div>
      </section>

      <section
        className="case-pdf-section case-pdf-section-report"
        aria-labelledby="last-play-proposal-title"
      >
        <div className="case-pdf-header">
          <div>
            <span className="eyebrow eyebrow-light">
              FULL PRODUCTION PROPOSAL · 31 PAGES
            </span>
            <h2 id="last-play-proposal-title">Read the complete plan.</h2>
          </div>
          <a
            href="/projects/the-last-play/production-proposal.pdf?v=20260727"
            target="_blank"
            rel="noreferrer"
          >
            Open in a new tab ↗
          </a>
        </div>
        <div className="case-pdf-frame case-pdf-frame-document">
          <iframe
            src="/projects/the-last-play/production-proposal.pdf?v=20260727#view=FitH&toolbar=1"
            title="Greg Brooks Jr.: The Last Play full production proposal PDF"
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
