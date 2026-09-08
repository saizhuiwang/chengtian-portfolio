import type { Metadata } from "next";
import Image from "next/image";
import type { CSSProperties } from "react";
import MobileNav from "./components/MobileNav";
import RecentProjects from "./components/RecentProjects";

export const metadata: Metadata = {
  title: {
    absolute: "Chengtian Wang — Growth, Operations & Partnerships",
  },
  description:
    "Portfolio of Chengtian Wang, working across growth strategy, business development, partnership operations, and workflow automation.",
};

const experience = [
  {
    number: "01",
    company: "Degy Entertainment",
    role: "Operations & Data Coordination Intern",
    period: "Jan — Apr 2026",
    location: "New York, NY",
    intro:
      "Built an AI-assisted business-development workflow connecting research, outreach, and project delivery.",
    points: [
      "Used Codex, Apollo, Excel, and Power Automate to qualify and reach 400+ prospects each month.",
      "Prepared partnership proposals, deal terms, and approval materials to support negotiations.",
      "Managed milestones, requirements, and deliverables across 20+ concurrent projects.",
    ],
    tag: "OPERATIONS",
  },
  {
    number: "02",
    company: "Saizhui Culture Co., Ltd.",
    role: "Founder & Marketing Operations Lead",
    period: "May — Dec 2025",
    location: "Guangdong, China",
    intro:
      "Turned customer insight into a focused growth and partnership operation.",
    points: [
      "Built creator positioning, content, and growth plans using insights from 100+ interviews and platform data.",
      "Managed 120+ brand partnerships across outreach, timelines, content, and delivery.",
      "Grew a key account from under 5K to 50K followers in three months through content optimization.",
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
      "Connected communications planning with organized, measurable execution.",
    points: [
      "Coordinated 15+ media opportunities across outreach, client calendars, and campaign schedules.",
      "Created releases, one-sheets, and pitch decks to support external communications.",
      "Monitored 200+ media and social channels daily to inform publicity planning.",
    ],
    tag: "PUBLICITY",
  },
  {
    number: "04",
    company: "iQIYI",
    role: "Global Marketing & Project Operations Intern",
    period: "Nov 2024 — Feb 2025",
    location: "New York, NY",
    intro:
      "Coordinated global campaign strategy across markets, teams, and channels.",
    points: [
      "Supported an integrated U.S. campaign generating approximately 200K views and impressions.",
      "Coordinated China-based and North American teams across content, production, and on-site operations.",
      "Managed outreach, publishing timelines, and deliverables with 60+ creators and local partners.",
    ],
    tag: "MARKETING",
  },
  {
    number: "05",
    company: "China Broadcasting Performing-Arts Troupe",
    role: "Management Assistant · China Film Symphony Orchestra",
    period: "May — Jul 2024",
    location: "Beijing, China",
    intro:
      "Delivered complex, high-visibility projects with a 90+ person team.",
    points: [
      "Supported 10+ large-scale projects at major venues and universities across Beijing.",
      "Coordinated personnel schedules, on-site operations, logistics, and technical requirements.",
      "Worked across internal teams and external venues to keep delivery on track.",
    ],
    tag: "LIVE",
  },
];

const expertise = [
  "Growth Strategy",
  "Business Development",
  "Partnership Operations",
  "Project & Event Management",
  "AI & Automation",
  "Market Research & Analytics",
  "Content & Brief Writing",
  "Web Design & Deployment",
];

const tools = [
  "Power Automate",
  "Microsoft Excel",
  "PowerPoint",
  "Google Workspace",
  "Apollo",
  "FastMoss",
  "Muck Rack",
  "Codex",
  "Vercel",
  "Figma",
  "Adobe Photoshop",
  "CapCut",
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
        <MobileNav />
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
            aria-label="Communication, events, marketing, music business, and digital media"
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
              I turn <strong>market insight and ambitious ideas</strong> into
              measurable growth through clear strategy, connected operations,
              and practical systems.
            </span>
          </p>
          <div className="hero-actions reveal">
            <a className="button button-dark" href="#work">
              Explore my work <span aria-hidden="true">↓</span>
            </a>
            <a
              className="button button-ghost"
              href="https://saizhuiwang.github.io/chengtian-resume/chengtian-wang-resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              View résumé <span aria-hidden="true">↗</span>
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
            <strong>20+</strong>
            <span>projects delivered in parallel</span>
          </div>
        </div>
      </section>

      <div className="ticker" aria-hidden="true">
        <div className="ticker-track">
          <span>GROWTH STRATEGY ✦ BUSINESS DEVELOPMENT ✦ PARTNERSHIP OPERATIONS ✦ WORKFLOW AUTOMATION ✦ </span>
          <span>GROWTH STRATEGY ✦ BUSINESS DEVELOPMENT ✦ PARTNERSHIP OPERATIONS ✦ WORKFLOW AUTOMATION ✦ </span>
        </div>
      </div>

      <section className="section work-section" id="work" aria-labelledby="work-title">
        <div className="section-heading">
          <span className="eyebrow">01 / SELECTED EXPERIENCE</span>
          <h2 id="work-title">
            Making complex work
            <br />
            <em>move clearly.</em>
          </h2>
          <p>
            From AI-assisted pipeline automation and market research to campaign
            and project delivery — work designed to turn insight into action.
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
              A&amp;R <span>&amp;</span>
              <br />
              Production
              <br />
              Intensive
            </h2>
          </div>
          <div className="project-copy">
            <p className="project-location">Nashville, TN · January 2026</p>
            <p>
              A 200+ hour A&amp;R and production intensive developed in
              partnership with Universal Music Group, combining talent
              evaluation, artist development, and hands-on studio production.
            </p>
            <div className="project-stats">
              <div>
                <strong>30+</strong>
                <span>creator candidates evaluated</span>
              </div>
              <div>
                <strong>200+</strong>
                <span>intensive project hours</span>
              </div>
            </div>
            <p className="project-detail">
              Evaluated 30+ emerging artists based on content quality, audience
              fit, and market potential, then supported recording sessions
              across pre-production, tracking, overdubs, mixing, and mastering.
            </p>
            <div className="project-access">
              <span>INDUSTRY ACCESS</span>
              <p>
                Participated in small-group conversations with leaders at
                Universal Music Group, Live Nation, The MLC, and across
                Nashville’s publishing, production, and catalog ecosystem.
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
                Strategic thinking.
                <br />
                <em>Practical execution.</em>
              </h2>
            </div>

            <figure className="profile-portrait">
              <div className="profile-portrait-frame">
                <Image
                  src="/chengtian-wang-portrait.jpeg"
                  alt="Portrait of Chengtian Wang"
                  width={886}
                  height={886}
                  sizes="(max-width: 960px) min(100vw - 44px, 380px), 25vw"
                  loading="lazy"
                  unoptimized
                />
              </div>
              <figcaption>
                <span>CHENGTIAN WANG</span>
                <span>GROWTH · OPERATIONS · PARTNERSHIPS</span>
              </figcaption>
            </figure>
          </div>

          <div className="about-content-column">
            <div className="about-lead-wrap">
              <p className="about-lead">
                <strong>
                  I work at the intersection of growth, marketing, operations,
                  and the creative industries — turning ideas into campaigns,
                  partnerships, experiences, and repeatable systems.
                </strong>
                <span>
                  I am especially interested in using AI, automation, and
                  smarter workflows to help teams research faster, coordinate
                  more clearly, and make better decisions. With experience
                  across the U.S. and China, I bring a cross-cultural perspective
                  and a practical, systems-minded approach to execution.
                </span>
              </p>
            </div>

            <div className="about-details">
              <div className="education-card">
                <span className="education-label">EDUCATION</span>
                <div>
                  <strong>New York University</strong>
                  <span>
                    Music Business · Media, Culture &amp; Communication
                  </span>
                  <span>GPA 3.78 / 4.0 · May 2026</span>
                  <span className="education-coursework">
                    Selected coursework: Marketing · Applied Data Analysis ·
                    Business Statistics · International Business Marketplace ·
                    Management and Organizations
                  </span>
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
            <span>MARKETING &amp; OPERATIONS</span>
            <strong>Campaigns · Events · Project Delivery</strong>
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
