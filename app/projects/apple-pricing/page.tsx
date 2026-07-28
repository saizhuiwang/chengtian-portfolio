import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Apple Pricing Psychology — Chengtian Wang",
  description:
    "A consumer-behavior analysis of the psychological principles behind Apple's premium pricing strategy.",
};

export default function ApplePricingProject() {
  return (
    <main className="case-page">
      <header className="case-header">
        <a className="wordmark" href="/" aria-label="Chengtian Wang, home">
          CW<span>®</span>
        </a>
        <a href="/#projects">← Back to projects</a>
        <a href="mailto:cw3999@nyu.edu">Let’s talk ↗</a>
      </header>

      <section className="case-hero case-assignment-hero case-apple-hero">
        <div className="case-topline">
          <span>RECENT PROJECT / 04</span>
          <span>NEW YORK · NOV 2025</span>
        </div>
        <div className="case-hero-grid">
          <h1>
            <span>Apple.</span>
            <em>Why premium feels reasonable.</em>
          </h1>
          <div className="case-assignment-copy">
            <p className="case-kicker">
              NYU · INTRODUCTION TO MARKETING
            </p>
            <p className="case-assignment-prompt">
              How does Apple make premium prices feel natural, manageable, and
              worth paying?
            </p>
            <p className="case-assignment-guidance">
              The analysis connects Apple’s product architecture and payment
              experience to reference dependence, diminishing sensitivity,
              loss aversion, prestige pricing, price discrimination, and
              left-digit bias. It also examines how financing, trade-ins,
              iCloud, AppleCare+, and Apple Card reduce payment friction while
              reinforcing ecosystem loyalty.
            </p>
            <dl className="case-assignment-meta">
              <div>
                <dt>TEAM</dt>
                <dd>Mel · Chengtian Wang · Sasha</dd>
              </div>
              <div>
                <dt>DELIVERABLE</dt>
                <dd>Consumer Psychology Presentation</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section
        className="case-pdf-section"
        aria-labelledby="apple-pricing-pdf-title"
      >
        <div className="case-pdf-header">
          <div>
            <span className="eyebrow eyebrow-light">
              ORIGINAL PRESENTATION · 14 PAGES
            </span>
            <h2 id="apple-pricing-pdf-title">Explore the full analysis.</h2>
          </div>
          <a
            href="/projects/apple-pricing/presentation.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Open in a new tab ↗
          </a>
        </div>
        <div className="case-pdf-frame">
          <iframe
            src="/projects/apple-pricing/presentation.pdf#view=FitH&toolbar=1"
            title="Apple psychology of pricing presentation PDF"
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
