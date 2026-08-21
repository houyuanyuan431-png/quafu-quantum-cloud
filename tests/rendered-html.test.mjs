import assert from "node:assert/strict";
import test from "node:test";

async function render(path = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(new Request(`http://localhost${path}`, { headers: { accept: "text/html" } }), {
    ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) },
  }, { waitUntil() {}, passThroughOnException() {} });
}

test("renders the seven-screen Quafu homepage", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  const html = await response.text();
  for (const text of ["你的第一条", "设备实况", "零基础？", "想系统学？", "会写代码？", "做研究？", "做出来的东西"]) assert.match(html, new RegExp(text));
  assert.match(html, /href="\/lab"/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton|Lorem ipsum/i);
});

test("renders the guest experiment route", async () => {
  const response = await render("/lab");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /第一条线路，准备好了/);
  assert.match(html, /qc\.cnot\(0, 1\)/);
  assert.match(html, /运行线路/);
  assert.match(html, /免登录/);
});
