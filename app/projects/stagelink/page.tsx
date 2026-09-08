import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "StageLink",
  description:
    "A data-driven artist and venue matching platform developed for NYU's Entrepreneurship for the Music Industry course.",
  alternates: { canonical: "/projects/stagelink" },
  openGraph: {
    title: "StageLink: Two-Sided Matching Platform",
    description:
      "A data-driven marketplace concept matching artists and venues through audience fit, geography, and performance signals.",
    images: ["/projects/stagelink/cover.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "StageLink: Two-Sided Matching Platform",
    description:
      "A data-driven marketplace concept matching artists and venues through audience fit, geography, and performance signals.",
    images: ["/projects/stagelink/cover.jpg"],
  },
};

export default function StageLinkProject() {
  return (
    <main className="case-page">
      <header className="case-header">
        <a className="wordmark" href="/" aria-label="Chengtian Wang, home">
          CW<span>®</span>
        </a>
        <a href="/#projects">← Back to projects</a>
        <a href="mailto:cw3999@nyu.edu">Let’s talk ↗</a>
      </header>

      <section className="case-hero case-assignment-hero case-stagelink-hero">
        <div className="case-topline">
          <span>RECENT PROJECT / 03</span>
          <span>NEW YORK · DEC 2025</span>
        </div>
        <div className="case-hero-grid">
          <h1>
            <span>StageLink.</span>
            <em>Artist × venue, matched by data.</em>
          </h1>
          <div className="case-assignment-copy">
            <p className="case-kicker">
              NYU · ENTREPRENEURSHIP FOR THE MUSIC INDUSTRY
            </p>
            <p className="case-assignment-prompt">
              A platform concept designed to make artist–venue matching more
              intelligent, transparent, and efficient.
            </p>
            <p className="case-assignment-guidance">
              StageLink combines performance signals, audience demographics,
              geographic reach, and venue fit to recommend stronger pairings.
              The venture addresses booking mismatch with verified profiles,
              transparent insights, audience-fit predictions, and a
              lower-friction communication workflow.
            </p>
            <dl className="case-assignment-meta">
              <div>
                <dt>TEAM</dt>
                <dd>Chengtian Wang · Joowon Lee · David Koh</dd>
              </div>
              <div>
                <dt>DELIVERABLE</dt>
                <dd>Venture Pitch Deck</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section
        className="case-pdf-section"
        aria-labelledby="stagelink-pdf-title"
      >
        <div className="case-pdf-header">
          <div>
            <span className="eyebrow eyebrow-light">
              ORIGINAL PRESENTATION
            </span>
            <h2 id="stagelink-pdf-title">Read the full PDF.</h2>
          </div>
          <a
            href="/projects/stagelink/presentation.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Open in a new tab ↗
          </a>
        </div>
        <div className="case-pdf-frame">
          <iframe
            src="/projects/stagelink/presentation.pdf#view=FitH&toolbar=1"
            title="StageLink artist and venue matching platform presentation PDF"
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
