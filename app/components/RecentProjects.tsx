import ProjectCarouselControls from "./ProjectCarouselControls";

const projects = [
  {
    href: "/projects/rednote",
    ariaLabel: "View the RedNote assignment description and original PDF",
    imageSrc: "/projects/rednote/slide-01.jpg",
    imageAlt: "Cover of the RedNote community-first growth strategy",
    kicker: "GROWTH STRATEGY · NEW YORK CITY",
    dateTime: "2026-07",
    dateLabel: "JUL 2026",
    title: "Bringing 100 Local Creators to a New Platform",
    description:
      "A community-first acquisition plan spanning creator targeting, outreach, activation, partnerships, and measurement.",
  },
  {
    href: "/projects/umg",
    ariaLabel: "View the NYU and Universal Music Group Production and A&R project",
    imageSrc: "/projects/umg/cover.jpg",
    imageAlt: "Cover of the Production and A&R Nashville presentation",
    kicker: "PRODUCTION · A&R · NASHVILLE",
    dateTime: "2026-01",
    dateLabel: "JAN 2026",
    title: "A&R & Production Intensive",
    description:
      "An immersive study of how records move from artist discovery through studio production and final mastering.",
  },
  {
    href: "/projects/stagelink",
    ariaLabel: "View the StageLink artist and venue matching platform project",
    imageSrc: "/projects/stagelink/cover.jpg",
    imageAlt:
      "Cover of the StageLink artist and venue matching platform presentation",
    kicker: "VENTURE STRATEGY · LIVE MUSIC",
    dateTime: "2025-12",
    dateLabel: "DEC 2025",
    title: "StageLink: Artist × Venue Matching Platform",
    description:
      "A data-driven platform designed to match independent artists and venues using audience fit, geography, and performance signals.",
  },
  {
    href: "/projects/apple-pricing",
    ariaLabel: "View the Apple psychology of pricing project",
    imageSrc: "/projects/apple-pricing/cover.jpg?v=20260726",
    imageAlt: "Cover of The Psychology of Pricing: Apple presentation",
    kicker: "CONSUMER PSYCHOLOGY · PRICING STRATEGY",
    dateTime: "2025-11",
    dateLabel: "NOV 2025",
    title: "Apple: The Psychology of Pricing",
    description:
      "A consumer-behavior analysis of how reference points, loss aversion, prestige cues, product tiers, and frictionless payment design make premium pricing feel rational.",
  },
  {
    href: "/projects/the-last-play",
    ariaLabel: "View The Last Play sports documentary pitch project",
    imageSrc: "/projects/the-last-play/cover.jpg",
    imageAlt:
      "Cover of Greg Brooks Jr.: The Last Play documentary pitch deck",
    kicker: "DOCUMENTARY DEVELOPMENT · SPORTS MEDIA",
    dateTime: "2025-05",
    dateLabel: "MAY 2025",
    title: "Greg Brooks Jr.: The Last Play",
    description:
      "A feature documentary proposal connecting human-centered storytelling with production, audience strategy, distribution, financing, and a disciplined micro-budget.",
  },
  {
    href: "/projects/audible",
    ariaLabel: "View the Audible financial viability and future growth project",
    imageSrc: "/projects/audible/cover.jpg",
    imageAlt: "Cover of the Audible market viability presentation",
    kicker: "PLATFORM STRATEGY · AUDIOBOOKS",
    dateTime: "2024-05",
    dateLabel: "MAY 2024",
    title: "Audible: Financial Viability & Future Growth",
    description:
      "An assessment of Audible’s subscription economics, Amazon-backed advantage, market position, and resilience against emerging media formats.",
  },
] as const;

export default function RecentProjects() {
  const railId = "recent-project-rail";

  return (
    <section
      className="recent-projects"
      id="projects"
      aria-labelledby="recent-projects-title"
    >
      <div className="recent-projects-header">
        <div className="recent-projects-title">
          <span className="eyebrow">02 / RECENT PROJECTS</span>
          <h2 id="recent-projects-title">
            Ideas built
            <br />
            <em>to move.</em>
          </h2>
        </div>
        <div className="recent-projects-side">
          <p>
            A selection of recent strategy and creative projects. Swipe through
            the previews, then open a card for the full story.
          </p>
          <ProjectCarouselControls railId={railId} />
        </div>
      </div>

      <div
        id={railId}
        className="recent-project-rail"
        tabIndex={0}
        aria-label="Recent project previews"
      >
        {projects.map((project) => (
          <a
            className="recent-project-card"
            href={project.href}
            aria-label={project.ariaLabel}
            key={project.href}
          >
            <div className="recent-project-preview">
              <img
                src={project.imageSrc}
                alt={project.imageAlt}
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="recent-project-card-body">
              <div>
                <div className="recent-project-card-meta">
                  <span className="recent-project-card-kicker">
                    {project.kicker}
                  </span>
                  <time
                    className="recent-project-card-date"
                    dateTime={project.dateTime}
                  >
                    {project.dateLabel}
                  </time>
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
              <span className="recent-project-open" aria-hidden="true">
                ↗
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
