import type { Metadata } from "next";
import type { CSSProperties } from "react";
import RecentProjects from "./components/RecentProjects";

export const metadata: Metadata = {
  title: "Chengtian Wang — Platform Growth, Strategy & Operations",
  description:
    "Portfolio of Chengtian Wang, working across creator partnerships, platform growth, campaign operations, data-informed strategy, and workflow automation.",
};

const experience = [
  {
    number: "01",
    company: "Degy Entertainment",
    role: "Operations & Data Coordination Intern",
    period: "Jan — Apr 2026",
    location: "New York, NY",
    intro:
      "Built the operating rhythm behind artist booking and event delivery.",
    points: [
      "Automated an Apollo, Excel, and Power Automate outreach workflow reaching 400+ prospects each month.",
      "Supported deal outlines, booking terms, contract approvals, and pipeline tracking.",
      "Coordinated timelines, technical riders, and deliverables across 20+ events.",
    ],
    tag: "OPERATIONS",
  },
  {
    number: "02",
    company: "Saizhui Culture Co., Ltd.",
    role: "Founder",
    period: "May — Dec 2025",
    location: "Guangdong, China",
    intro:
      "Created an artist services company from insight to execution.",
    points: [
      "Built a planning tool informed by 100+ industry interviews and platform data.",
      "Facilitated 120+ brand partnerships and sponsorship placements for artists.",
      "Grew a representative client’s audience from under 5K to 50K+ in three months.",
    ],
    tag: "FOUNDER",
  },
  {
    number: "03",
    company: "FYI Brand Group",
    role: "Public Relations Intern",
    period: "Jan — May 2025",
    location: "New York, NY",
    intro:
      "Turned artist stories into organized, measurable publicity campaigns.",
    points: [
      "Tracked 15+ publicity offers and maintained campaign calendars and press strategy.",
      "Prepared releases, one-sheets, pitch decks, and media and social clippings.",
      "Monitored 200+ outlets daily using Muck Rack, RocketReach, and Photoshop.",
    ],
    tag: "PUBLICITY",
  },
  {
    number: "04",
    company: "iQIYI",
    role: "Marketing & Execution Intern",
    period: "Nov 2024 — Feb 2025",
    location: "New York, NY",
    intro:
      "Connected campaign strategy with live execution for a global entertainment brand.",
    points: [
      "Drove engagement beyond 2M streams for iQIYI’s The Rap of China 2025 Competition.",
      "Ran on-site operations for two large live events, from rundowns to rapid issue-solving.",
      "Partnered with 60+ artists and influencers to expand audience engagement.",
    ],
    tag: "MARKETING",
  },
  {
    number: "05",
    company: "China Film Symphony Orchestra",
    role: "Management Assistant",
    period: "May — Jul 2024",
    location: "Beijing, China",
    intro:
      "Helped move a 90+ member orchestra from rehearsal room to major stages.",
    points: [
      "Coordinated 10+ performances at venues including the National Grand Theater.",
      "Managed personnel, logistics, stage setup, audio systems, and master output.",
      "Produced 20+ promotional assets reaching thousands of attendees.",
    ],
    tag: "LIVE",
  },
];

const expertise = [
  "Creator Partnerships",
  "Platform Growth",
  "Campaign Strategy",
  "Audience Development",
  "Event Planning",
  "Operations & Automation",
  "Data-Informed Planning",
];

const tools = [
  "Power Automate",
  "Microsoft Office / Google Workspace",
  "Apollo",
  "FastMoss",
  "Chartmetric",
  "Muck Rack",
  "Figma",
  "Adobe Creative Cloud",
  "SoundExchange",
  "MLC",
  "ASCAP / BMI",
  "Logic Pro",
];

function AnimatedLetters({
  text,
  startIndex = 0,
}: {
  text: string;
  startIndex?: number;
}) {
  return Array.from(text).map((letter, index) => {
    const letterIndex = startIndex + index;

    return (
      <span
        className={`hero-letter${letter === "." ? " title-dot" : ""}`}
        key={`${letter}-${letterIndex}`}
        style={
          {
            "--letter-delay": `${180 + letterIndex * 68}ms`,
          } as CSSProperties
        }
      >
        {letter}
      </span>
    );
  });
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Chengtian Wang, home">
          CW<span>®</span>
        </a>
        <nav className="nav-links" aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
        </nav>
        <a className="header-cta" href="#contact">
          Let’s talk <span aria-hidden="true">↗</span>
        </a>
      </header>

      <section className="hero" id="top" aria-labelledby="hero-title">
        <div className="hero-title-wrap">
          <h1 id="hero-title" aria-label="Chengtian Wang">
            <span className="hero-line" aria-hidden="true">
              <AnimatedLetters text="CHENGTIAN" />
            </span>
            <span className="hero-line hero-line-bottom" aria-hidden="true">
              <AnimatedLetters text="WANG." startIndex={9} />
            </span>
          </h1>
          <div
            className="hero-focus"
            role="img"
            aria-label="Communication, events, marketing, creator ecosystems, and data systems"
          >
            <div className="focus-system" aria-hidden="true">
              <div className="focus-orbit-stage">
                <span className="focus-orbit focus-orbit-wide" />
                <span className="focus-orbit focus-orbit-tall" />
                <span className="focus-orbit focus-orbit-inner" />

                <div className="focus-star">
                  <span>✦</span>
                  <small>×</small>
                </div>

                <div className="focus-planet focus-planet-communication">
                  <i />
                  <small>COMMUNICATION</small>
                </div>
                <div className="focus-planet focus-planet-events">
                  <i />
                  <small>EVENTS</small>
                </div>
                <div className="focus-planet focus-planet-marketing">
                  <i />
                  <small>MARKETING</small>
                </div>

                <p className="focus-discipline">
                  <span>MUSIC BUSINESS</span>
                  <i>×</i>
                  <span>DIGITAL MEDIA</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-bottom">
          <p className="hero-summary reveal">
            <span className="summary-label">WHAT I BRING</span>
            <span className="summary-copy">
              I turn <strong>audience insight and creative ideas</strong> into
              measurable growth through clear strategy, connected operations,
              and practical systems.
            </span>
          </p>
          <div className="hero-actions reveal">
            <a className="button button-dark" href="#work">
              Explore my work <span aria-hidden="true">↓</span>
            </a>
            <a className="button button-ghost" href="/chengtian-wang-resume.pdf" download>
              Download résumé <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <div className="hero-numbers" aria-label="Career highlights">
          <div>
            <strong>400+</strong>
            <span>monthly prospects reached</span>
          </div>
          <div>
            <strong>120+</strong>
            <span>brand partnerships facilitated</span>
          </div>
          <div>
            <strong>2M+</strong>
            <span>campaign streams generated</span>
          </div>
        </div>
      </section>

      <div className="ticker" aria-hidden="true">
        <div className="ticker-track">
          <span>CREATOR STRATEGY ✦ PLATFORM GROWTH ✦ CAMPAIGN OPERATIONS ✦ DATA AUTOMATION ✦ </span>
          <span>CREATOR STRATEGY ✦ PLATFORM GROWTH ✦ CAMPAIGN OPERATIONS ✦ DATA AUTOMATION ✦ </span>
        </div>
      </div>

      <section className="section work-section" id="work" aria-labelledby="work-title">
        <div className="section-heading">
          <span className="eyebrow">01 / SELECTED EXPERIENCE</span>
          <h2 id="work-title">
            Building momentum
            <br />
            <em>across platforms.</em>
          </h2>
          <p>
            From audience data and workflow automation to creator partnerships
            and campaign execution — work designed to turn insight into action.
          </p>
        </div>

        <div className="experience-list">
          {experience.map((item) => (
            <article className="experience-card" key={item.company}>
              <div className="experience-topline">
                <span className="experience-number">{item.number}</span>
                <span className="experience-tag">{item.tag}</span>
              </div>
              <div className="experience-main">
                <div className="experience-title">
                  <h3>{item.company}</h3>
                  <p>{item.role}</p>
                </div>
                <div className="experience-meta">
                  <span>{item.period}</span>
                  <span>{item.location}</span>
                </div>
              </div>
              <p className="experience-intro">{item.intro}</p>
              <ul>
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <RecentProjects />

      <section className="project-section" id="project" aria-labelledby="project-title">
        <div className="project-label">
          <span className="eyebrow eyebrow-light">03 / FEATURED PROJECT</span>
          <span className="project-year">2026</span>
        </div>
        <div className="project-grid">
          <div>
            <p className="project-collab">NYU × UNIVERSAL MUSIC GROUP</p>
            <h2 id="project-title">
              A&R <span>&</span>
              <br />
              Production
              <br />
              Intensive
            </h2>
          </div>
          <div className="project-copy">
            <p className="project-location">Nashville, TN · January 2026</p>
            <p>
              An immersive look at how records are discovered, shaped, and
              finished — from the first A&R conversation to the final master.
            </p>
            <div className="project-stats">
              <div>
                <strong>30+</strong>
                <span>artists evaluated</span>
              </div>
              <div>
                <strong>200+</strong>
                <span>studio hours</span>
              </div>
            </div>
            <p className="project-detail">
              Worked in recording sessions with Grammy-winning producers across
              pre-production, tracking, overdubs, mixing, and mastering.
            </p>
            <div className="project-access">
              <span>INDUSTRY ACCESS</span>
              <p>
                Visits and small-group conversations with leaders at Universal
                Music Group, Live Nation, The MLC, and across Nashville’s
                publishing, production, and catalog ecosystem.
              </p>
            </div>
            <a
              className="project-program-link"
              href="https://steinhardt.nyu.edu/programs/study-abroad/undergraduate/nashville-production-and-ar-music-industry"
              target="_blank"
              rel="noreferrer"
            >
              <span>View official NYU program</span>
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>

      <section className="section about-section" id="about" aria-labelledby="about-title">
        <span className="eyebrow about-eyebrow">04 / PROFILE</span>

        <div className="about-grid">
          <div className="about-visual-column">
            <div className="about-intro">
              <h2 id="about-title">
                Creative instinct.
                <br />
                <em>Clear execution.</em>
              </h2>
            </div>

            <figure className="profile-portrait">
              <div className="profile-portrait-frame">
                <img
                  src="/chengtian-wang-portrait.jpeg"
                  alt="Portrait of Chengtian Wang"
                  width="886"
                  height="886"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <figcaption>
                <span>CHENGTIAN WANG</span>
                <span>GROWTH · STRATEGY · EXECUTION</span>
              </figcaption>
            </figure>
          </div>

          <div className="about-content-column">
            <div className="about-lead-wrap">
              <p className="about-lead">
                <strong>
                  I turn audience and market insight into growth strategies,
                  partnerships, and operating plans for digital platforms and
                  creator-led businesses.
                </strong>
                <span>
                  Across creator acquisition, glocalization, campaign
                  operations, and workflow automation, I have built prospecting
                  systems, developed data-informed growth plans, and coordinated
                  execution across artists, brands, and live teams.
                </span>
              </p>
            </div>

            <div className="about-details">
              <div className="education-card">
                <span className="education-label">EDUCATION</span>
                <div>
                  <strong>New York University</strong>
                  <span>
                    Bachelor’s Degree · Music Business &amp; Digital Media
                  </span>
                  <span>GPA 3.78 / 4.0 · May 2026</span>
                  <span className="education-honor">
                    University Honors Scholar · Founders Day Award
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="capabilities-section" aria-label="Capabilities and tools">
        <div className="capability-block">
          <span className="capability-label">WHAT I DO</span>
          <div className="chip-list">
            {expertise.map((item) => (
              <span className="chip chip-primary" key={item}>{item}</span>
            ))}
          </div>
        </div>
        <div className="capability-block">
          <span className="capability-label">TOOLS & PLATFORMS</span>
          <div className="chip-list">
            {tools.map((item) => (
              <span className="chip" key={item}>{item}</span>
            ))}
          </div>
        </div>
        <div className="language-row">
          <div>
            <span>LANGUAGES</span>
            <strong>Mandarin · English · French</strong>
          </div>
          <div>
            <span>MUSIC</span>
            <strong>Cello · Piano · Composition · Recording</strong>
          </div>
        </div>
      </section>

      <footer className="footer" id="contact">
        <div className="footer-topline">
          <span>05 / CONTACT</span>
          <span>AVAILABLE FOR NEW OPPORTUNITIES</span>
        </div>
        <h2>
          Let’s make the
          <br />
          next thing <em>matter.</em>
        </h2>
        <div className="footer-links">
          <a href="mailto:cw3999@nyu.edu">
            cw3999@nyu.edu <span aria-hidden="true">↗</span>
          </a>
          <a href="tel:+18574001818">
            +1 857 400 1818 <span aria-hidden="true">↗</span>
          </a>
          <a
            href="https://www.linkedin.com/in/chengtian-wang"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="footer-bottom">
          <span>© 2026 CHENGTIAN WANG</span>
          <a href="#top">BACK TO TOP ↑</a>
        </div>
      </footer>
    </main>
  );
}
