import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "RedNote Creator Growth Assignment",
  description:
    "A community-first strategy for bringing 100 local creators to a new platform, followed by the original assignment PDF.",
  alternates: { canonical: "/projects/rednote" },
  openGraph: {
    title: "Bringing 100 Local Creators to a New Platform",
    description:
      "A community-first strategy for bringing 100 local creators to a new platform.",
    images: ["/projects/rednote/slide-01.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bringing 100 Local Creators to a New Platform",
    description:
      "A community-first strategy for bringing 100 local creators to a new platform.",
    images: ["/projects/rednote/slide-01.jpg"],
  },
};

const assignmentPages = Array.from(
  { length: 8 },
  (_, index) => `/projects/rednote-pages/page-${index + 1}.jpg`,
);

export default function RedNoteProject() {
  return (
    <main className="case-page">
      <header className="case-header">
        <a className="wordmark" href="/" aria-label="Chengtian Wang, home">
          CW<span>®</span>
        </a>
        <a href="/#projects">← Back to projects</a>
        <a href="mailto:cw3999@nyu.edu">Let’s talk ↗</a>
      </header>

      <section className="case-hero case-assignment-hero">
        <div className="case-topline">
          <span>RECENT PROJECT / 01</span>
          <span>NEW YORK CITY · 2026</span>
        </div>
        <div className="case-hero-grid">
          <h1>
            <span>100 local creators.</span>
            <em>
              One community‑first
              <br />
              launch.
            </em>
          </h1>
          <div className="case-assignment-copy">
            <p className="case-kicker">REDNOTE · ASSIGNMENT DESCRIPTION</p>
            <p className="case-assignment-prompt">
              You have one month to bring 100 creators from your city to a new
              platform. How would you do it?
            </p>
            <p className="case-assignment-guidance">
              You can use any approach — think as big or small as you want.
              Include a list of the top 10 creators you’d approach, and why.
            </p>
            <dl className="case-assignment-meta">
              <div>
                <dt>ROLE</dt>
                <dd>Global Community Intern</dd>
              </div>
              <div>
                <dt>DELIVERABLE</dt>
                <dd>Creator Growth Figma Project</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section className="case-pdf-section" aria-labelledby="case-pdf-title">
        <div className="case-pdf-header">
          <div>
            <span className="eyebrow eyebrow-light">
              ORIGINAL ASSIGNMENT · 8 PAGES
            </span>
            <h2 id="case-pdf-title">Read the full PDF.</h2>
          </div>
          <a
            href="/projects/rednote-assignment.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Open in a new tab ↗
          </a>
        </div>
        <div
          className="case-pdf-frame case-pdf-frame-pages"
          aria-label="Original RedNote assignment slide previews"
        >
          {assignmentPages.map((page, index) => (
            <figure className="case-pdf-page" key={page}>
              <Image
                src={page}
                alt={`RedNote assignment slide ${index + 1} of 8`}
                width={1600}
                height={900}
                sizes="(max-width: 700px) 90vw, 80vw"
                loading={index === 0 ? "eager" : "lazy"}
                unoptimized
              />
              <figcaption>
                {String(index + 1).padStart(2, "0")} / 08
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <footer className="case-footer">
        <a href="/#projects">← Back to recent projects</a>
        <a href="mailto:cw3999@nyu.edu">Discuss this project ↗</a>
      </footer>
    </main>
  );
}
