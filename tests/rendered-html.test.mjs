import assert from "node:assert/strict";
import test from "node:test";

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set(
    "test",
    `${process.pid}-${Date.now()}-${pathname}`,
  );
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${pathname}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

async function renderHtml(pathname) {
  const response = await render(pathname);
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
  return response.text();
}

test("server-renders the finished portfolio homepage", async () => {
  const html = await renderHtml("/");

  assert.match(html, /<title>Chengtian Wang — Platform Growth/);
  assert.match(html, /href="#projects">Projects<\/a>/);
  assert.match(html, /href="#contact">Let’s talk/);
  assert.match(html, /MUSIC BUSINESS/);
  assert.match(html, /DIGITAL MEDIA/);
  assert.match(html, /Event Planning/);
  assert.doesNotMatch(html, /codex-preview|Building your site/);
});

test("keeps project metadata accurate and consistent", async () => {
  const [rednote, umg, lastPlay] = await Promise.all([
    renderHtml("/projects/rednote"),
    renderHtml("/projects/umg"),
    renderHtml("/projects/the-last-play"),
  ]);

  assert.match(rednote, /<dt>ROLE<\/dt>/);
  assert.match(rednote, /<dt>DELIVERABLE<\/dt>/);
  assert.match(rednote, /Creator Growth Figma Project/);

  assert.match(umg, /<dt>TEAM<\/dt>/);
  assert.match(umg, /The Dust Busters/);
  assert.match(umg, /<dt>DELIVERABLE<\/dt>/);
  assert.match(
    umg,
    /Gable Bradley A(?:&amp;|&)R (?:&amp;|&) Production Presentation/,
  );
  assert.doesNotMatch(umg, /<dt>SUBJECT<\/dt>/);

  assert.match(lastPlay, /FULL PRODUCTION PROPOSAL · 31 PAGES/);
  assert.match(
    lastPlay,
    /href="\/projects\/the-last-play\/production-proposal\.pdf\?v=20260727"/,
  );
});

test("defers noncritical project media", async () => {
  const [home, apple, audible] = await Promise.all([
    renderHtml("/"),
    renderHtml("/projects/apple-pricing"),
    renderHtml("/projects/audible"),
  ]);

  assert.match(
    home,
    /id="recent-project-rail"[\s\S]*?<img[^>]+loading="lazy"[^>]+decoding="async"/,
  );
  assert.match(apple, /<iframe[^>]+loading="lazy"/);
  assert.match(audible, /<iframe[^>]+loading="lazy"/);
});
