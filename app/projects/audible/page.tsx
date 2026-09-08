import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Audible Market Viability",
  description:
    "A strategic assessment of Audible's financial viability, competitive advantages, and outlook in a changing media market.",
  alternates: { canonical: "/projects/audible" },
  openGraph: {
    title: "Audible: Financial Viability & Future Growth",
    description:
      "A strategic assessment of Audible's financial viability, competitive advantages, and outlook in a changing media market.",
    images: ["/projects/audible/cover.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Audible: Financial Viability & Future Growth",
    description:
      "A strategic assessment of Audible's financial viability, competitive advantages, and outlook in a changing media market.",
    images: ["/projects/audible/cover.jpg"],
  },
};

export default function AudibleProject() {
  return (
    <main className="case-page">
      <header className="case-header">
        <a className="wordmark" href="/" aria-label="Chengtian Wang, home">
          CW<span>®</span>
        </a>
        <a href="/#projects">← Back to projects</a>
        <a href="mailto:cw3999@nyu.edu">Let’s talk ↗</a>
      </header>

      <section className="case-hero case-assignment-hero case-audible-hero">
        <div className="case-topline">
          <span>RECENT PROJECT / 06</span>
          <span>NEW YORK · MAY 2024</span>
        </div>
        <div className="case-hero-grid">
          <h1>
            <span>Audible.</span>
            <em>A resilient market, backed by scale.</em>
          </h1>
          <div className="case-assignment-copy">
            <p className="case-kicker">
              NYU · ENTERTAINMENT &amp; MEDIA INDUSTRIES
            </p>
            <p className="case-assignment-prompt">
              How financially viable is Audible, and what could drive its
              success or failure over the next few years?
            </p>
            <p className="case-assignment-guidance">
              The analysis found a defensible growth outlook supported by
              Amazon’s financing and data ecosystem, recurring subscription
              revenue, market leadership, differentiated content, and a
              screen-light format that serves different needs from short-form
              video and immersive media.
            </p>
            <dl className="case-assignment-meta">
              <div>
                <dt>TEAM</dt>
                <dd>
                  Moksh Jain · Robert Shikhman · Chengtian Wang · Mia Woo
                </dd>
              </div>
              <div>
                <dt>DELIVERABLE</dt>
                <dd>Market Viability Presentation</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section
        className="case-pdf-section"
        aria-labelledby="audible-pdf-title"
      >
        <div className="case-pdf-header">
          <div>
            <span className="eyebrow eyebrow-light">
              ORIGINAL PRESENTATION
            </span>
            <h2 id="audible-pdf-title">Read the full PDF.</h2>
          </div>
          <a
            href="/projects/audible/presentation.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Open in a new tab ↗
          </a>
        </div>
        <div className="case-pdf-frame">
          <iframe
            src="/projects/audible/presentation.pdf#view=FitH&toolbar=1"
            title="Audible financial viability and future growth presentation PDF"
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
