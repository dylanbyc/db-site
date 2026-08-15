import assert from "node:assert/strict";
import test from "node:test";

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set(
    "test",
    `${process.pid}-${Date.now()}-${pathname.replaceAll("/", "-")}`,
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

test("server-renders the Dylan Bai home page", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Dylan Bai — Field Notes<\/title>/i);
  assert.match(html, /Learning<span>in public\.<\/span>/);
  assert.match(html, /Latest writing/);
  assert.match(html, /Things I&#x27;m building/);
  assert.match(html, /Brazilian jiu-jitsu/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape/i);
});

test("server-renders the main content routes", async () => {
  const routes = [
    ["/writing", /Writing — Dylan Bai/],
    ["/projects", /Projects — Dylan Bai/],
    ["/about", /About — Dylan Bai/],
    [
      "/writing/feedback-loops-mat-model",
      /Feedback loops: what the mat and the model have in common/,
    ],
  ];

  for (const [pathname, expected] of routes) {
    const response = await render(pathname);
    assert.equal(response.status, 200, `${pathname} should return 200`);
    assert.match(await response.text(), expected);
  }
});
