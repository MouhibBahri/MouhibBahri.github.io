// Hand-drawn SVG schematics. Colors come from CSS classes (site.css, "figures").
// Drawing order matters: wires and moving dots first, boxes last,
// so dots pass *under* the boxes.

const box = (x, y, w, h, label, sub = "", cls = "") =>
  `<g class="fx-node ${cls}"><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="7"/>` +
  `<text class="fx-label" x="${x + w / 2}" y="${y + (sub ? h / 2 - 2 : h / 2 + 4)}" text-anchor="middle">${label}</text>` +
  (sub ? `<text class="fx-sub" x="${x + w / 2}" y="${y + h / 2 + 12}" text-anchor="middle">${sub}</text>` : "") +
  `</g>`;

let uid = 0;
const svg = (vb, body, label) => {
  const id = `ah${++uid}`;
  return `<svg class="fx" viewBox="${vb}" role="img" aria-label="${label}" xmlns="http://www.w3.org/2000/svg">` +
    `<defs><marker id="${id}" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 8 4 0 8z" class="fx-arrowhead"/></marker></defs>` +
    body.replaceAll("url(#ah)", `url(#${id})`) + `</svg>`;
};

// A dot that loops along a path for the whole cycle.
const dot = (d, dur, begin = "0s", cls = "fx-dot", r = 3.8) =>
  `<circle r="${r}" class="${cls}"><animateMotion dur="${dur}" begin="${begin}" repeatCount="indefinite" path="${d}"/></circle>`;

// A dot that only travels during [s, e] of a `total`-second cycle (one step of a story).
const step = (d, s, e, total, cls = "fx-dot", r = 4) => {
  const a = Math.max(s, 0.001), b = Math.min(e, 0.999), eps = 0.004;
  return `<circle r="${r}" class="${cls}" opacity="0">` +
    `<animateMotion dur="${total}s" repeatCount="indefinite" path="${d}" keyPoints="0;0;1;1" keyTimes="0;${a};${b};1" calcMode="linear"/>` +
    `<animate attributeName="opacity" values="0;0;1;1;0;0" keyTimes="0;${a};${a + eps};${b - eps};${b};1" dur="${total}s" repeatCount="indefinite"/>` +
    `</circle>`;
};

// Visible only during [s, e] of the cycle.
const flash = (s, e, total) =>
  `<animate attributeName="opacity" values="0;0;1;1;0;0" keyTimes="0;${s};${s + 0.01};${e - 0.01};${e};1" dur="${total}s" repeatCount="indefinite"/>`;

// ---------------------------------------------------------------- memory
export function figMemory(t) {
  const fr = t.lang === "fr";
  const T = 10;
  const P = {
    inject: "M288 202 H382 V50 H288",
    msgIn: "M98 42 H176",
    recall: "M274 150 V72",
    msgOut: "M176 58 H98",
    store: "M190 72 V150",
    edit: "M232 72 V150",
  };
  const wires =
    `<path d="${P.msgIn}" class="fx-wire" marker-end="url(#ah)"/>` +
    `<path d="${P.msgOut}" class="fx-wire" marker-end="url(#ah)"/>` +
    `<path d="${P.store}" class="fx-wire" marker-end="url(#ah)"/>` +
    `<path d="${P.edit}" class="fx-wire" marker-end="url(#ah)"/>` +
    `<path d="${P.recall}" class="fx-wire" marker-end="url(#ah)"/>` +
    `<path d="M288 202 H382 V148 M382 108 V50 H288" class="fx-wire fx-hookwire" marker-end="url(#ah)"/>`;
  const dots =
    step(P.inject, 0.0, 0.16, T, "fx-dot fx-dot-hook") +
    step(P.msgIn, 0.19, 0.29, T) +
    step(P.recall, 0.32, 0.43, T) +
    step(P.msgOut, 0.46, 0.56, T) +
    step(P.store, 0.6, 0.72, T) +
    step(P.edit, 0.78, 0.9, T);
  const opLabel = (x, txt, s, e) =>
    `<g class="fx-op"><rect x="${x - 21}" y="103" width="42" height="15" rx="4"/><text x="${x}" y="114" text-anchor="middle">${txt}</text>` +
    `<rect class="fx-op-on" x="${x - 21}" y="103" width="42" height="15" rx="4" opacity="0">${flash(s, e, T)}</rect>` +
    `<text class="fx-op-on-t" x="${x}" y="114" text-anchor="middle" opacity="0">${txt}${flash(s, e, T)}</text></g>`;
  const ops =
    opLabel(190, fr ? "écrire" : "store", 0.6, 0.72) +
    opLabel(232, fr ? "éditer" : "edit", 0.78, 0.9) +
    opLabel(274, fr ? "rappel" : "recall", 0.32, 0.43);
  const table =
    `<g class="fx-node fx-table"><rect x="176" y="150" width="112" height="72" rx="7"/>` +
    `<path d="M176 172 H288" class="fx-rule"/>` +
    `<text class="fx-label" x="232" y="165" text-anchor="middle">${fr ? "mémoires" : "memories"}</text>` +
    [0, 1, 2].map((i) =>
      `<rect class="fx-track" x="190" y="${180 + i * 13}" width="84" height="6" rx="2"/>` +
      `<rect class="fx-bar fx-bar-${i}" x="190" y="${180 + i * 13}" width="${[84, 62, 44][i]}" height="6" rx="2"/>`).join("") +
    `</g>`;
  const nodes =
    box(14, 28, 84, 44, fr ? "utilisateur" : "user") +
    box(176, 28, 112, 44, "agent", fr ? "contexte" : "context") +
    box(328, 108, 108, 40, "hook", fr ? "début de session" : "session start", "fx-hook") +
    table;

  // weight of one memory over one day (example values)
  const xOf = (h) => 52 + ((h - 8) / 16) * 360;
  const yOf = (w) => 318 - ((w - 0.75) / 0.25) * 54;
  const pts = [[9, 1], [12, 0.8], [16, 0.9], [23.5, 0.891]];
  const line = `M${xOf(9)} ${yOf(1)} H${xOf(12)} V${yOf(0.8)} H${xOf(16)} V${yOf(0.9)} H${xOf(23.5)} V${yOf(0.891)} H${xOf(24)}`;
  const labels = fr ? ["1.0 créée", "0.8 notée", "0.9 renotée", "×0.99 nuit"] : ["1.0 new", "0.8 rated", "0.9 re-rated", "×0.99 night"];
  const chart =
    `<text class="fx-cap" x="10" y="240">${fr ? "poids d’un souvenir sur une journée (exemple)" : "weight of one memory over a day (example)"}</text>` +
    `<path d="M52 ${yOf(1)} H416 M52 ${yOf(0.8)} H416" class="fx-grid"/>` +
    `<path d="M52 256 V318 H416" class="fx-axis"/>` +
    `<text class="fx-sub" x="46" y="${yOf(1) + 4}" text-anchor="end">1.0</text>` +
    `<text class="fx-sub" x="46" y="${yOf(0.8) + 4}" text-anchor="end">0.8</text>` +
    [9, 12, 16, 24].map((h) => `<text class="fx-sub" x="${xOf(h)}" y="334" text-anchor="middle">${String(h % 24).padStart(2, "0")}:00</text>`).join("") +
    `<path d="${line}" class="fx-weight"/>` +
    pts.map(([h, w], i) =>
      `<circle cx="${xOf(h)}" cy="${yOf(w)}" r="3.2" class="fx-pt"/>` +
      `<text class="fx-sub fx-ptl" x="${xOf(h) + (i === 3 ? -4 : 6)}" y="${yOf(w) - 7}" text-anchor="${i === 3 ? "end" : "start"}">${labels[i]}</text>`).join("") +
    `<circle r="4" class="fx-dot"><animateMotion dur="${T}s" repeatCount="indefinite" path="${line}"/></circle>`;
  return svg("0 0 440 342", wires + dots + ops + nodes + chart, t.caption);
}

// ---------------------------------------------------------------- chain replication
export function figChain(t) {
  const fr = t.lang === "fr";
  const T = 4.4, y = 128;
  const W = `M70 ${y + 12} H318`, A = `M318 ${y + 30} H70`;
  const wires =
    `<path d="M70 ${y + 12} H102 M178 ${y + 12} H210 M286 ${y + 12} H318" class="fx-wire" marker-end="url(#ah)"/>` +
    `<path d="M318 ${y + 30} H286 M210 ${y + 30} H178 M102 ${y + 30} H70" class="fx-wire fx-dash" marker-end="url(#ah)"/>`;
  const hb = [[140, 168], [248, 202], [356, 236]];
  const beats = hb.map(([x, mx], i) => {
    const d = `M${x} ${y} L${mx} 52`;
    return `<path d="${d}" class="fx-hbline"/>` + dot(d, "1.8s", `-${(i * 0.6).toFixed(1)}s`, "fx-hb", 3.2);
  }).join("");
  const dots =
    `<circle r="4.2" class="fx-dot"><animateMotion dur="${T}s" repeatCount="indefinite" keyPoints="0;1;1" keyTimes="0;0.42;1" calcMode="linear" path="${W}"/>` +
    `<animate attributeName="opacity" values="1;1;0;0" keyTimes="0;0.42;0.43;1" dur="${T}s" repeatCount="indefinite"/></circle>` +
    `<circle r="4.2" class="fx-dot fx-ack"><animateMotion dur="${T}s" repeatCount="indefinite" keyPoints="0;0;1;1" keyTimes="0;0.5;0.92;1" calcMode="linear" path="${A}"/>` +
    `<animate attributeName="opacity" values="0;0;1;1;0" keyTimes="0;0.49;0.5;0.92;0.93" dur="${T}s" repeatCount="indefinite"/></circle>`;
  const nodes =
    box(132, 10, 140, 42, "master", fr ? "métadonnées" : "metadata") +
    box(10, y, 60, 44, "client") +
    box(102, y, 76, 44, "S1", "replica") +
    box(210, y, 76, 44, "S2", "replica") +
    box(318, y, 76, 44, "S3", "replica", "fx-tail");
  const fsync = `<text class="fx-sub fx-accent-text" x="356" y="${y + 62}" text-anchor="middle" opacity="0">fsync · seal${flash(0.41, 0.56, T)}</text>`;
  const legend =
    `<circle cx="16" cy="${y + 60}" r="4" class="fx-dot"/><text class="fx-sub fx-left" x="26" y="${y + 63}">write</text>` +
    `<circle cx="78" cy="${y + 60}" r="4" class="fx-dot fx-ack"/><text class="fx-sub fx-left" x="88" y="${y + 63}">ack</text>` +
    `<circle cx="134" cy="${y + 60}" r="3.4" class="fx-hb"/><text class="fx-sub fx-left" x="144" y="${y + 63}">heartbeat</text>`;
  return svg("0 0 404 200", wires + beats + dots + nodes + fsync + legend, t.caption);
}

// ---------------------------------------------------------------- woodpecker pipeline
export function figPipeline(t) {
  const fr = t.lang === "fr";
  const route = "M118 43 H282 M336 66 V110 M282 133 H118";
  const wires =
    `<path d="M118 43 H146 M254 43 H282 M336 66 V110 M282 133 H254 M146 133 H118" class="fx-wire" marker-end="url(#ah)"/>` +
    `<path d="M64 156 C64 184 200 184 200 156" class="fx-wire fx-dash" marker-end="url(#ah)"/>`;
  const d = dot(route, "5s");
  const n =
    box(10, 20, 108, 46, "8 sources", "RSS · SEO · CRM") +
    box(146, 20, 108, 46, "score 0–1", fr ? "vs. clients cibles" : "vs. ICPs") +
    box(282, 20, 108, 46, fr ? "idées" : "ideas", fr ? "hebdo / tenant" : "weekly / tenant") +
    box(282, 110, 108, 46, "plan", fr ? "par canal" : "per channel") +
    box(146, 110, 108, 46, fr ? "brouillon" : "draft", fr ? "sous-agent" : "sub-agent") +
    box(10, 110, 108, 46, fr ? "relecture" : "review", fr ? "humaine" : "by a person");
  const lab = `<text class="fx-sub" x="132" y="196" text-anchor="middle">${fr ? "les commentaires relancent la rédaction" : "comments feed redrafts"}</text>`;
  return svg("0 0 400 202", wires + d + n + lab, t.caption);
}

// ---------------------------------------------------------------- 2zero observability
export function figObserve(t) {
  const fr = t.lang === "fr";
  const main = "M110 42 H290";
  const db = "M200 64 V112";
  const otel = "M165 64 C152 92 104 94 80 112";
  const wires =
    `<path d="M110 42 H150 M250 42 H290" class="fx-wire" marker-end="url(#ah)"/>` +
    `<path d="${db}" class="fx-wire" marker-end="url(#ah)"/>` +
    `<path d="${otel}" class="fx-wire fx-dash fx-otel" marker-end="url(#ah)"/>` +
    `<path d="M50 64 V112" class="fx-wire fx-dash fx-otel" marker-end="url(#ah)"/>`;
  const d = dot(main, "3s") + dot(db, "3s", "-1.4s") + dot(otel, "3s", "-0.8s", "fx-dot fx-dot-soft");
  const n =
    box(10, 20, 100, 44, fr ? "navigateur" : "browser", "Next.js") +
    box(150, 20, 100, 44, "API routes", "Next.js") +
    box(290, 20, 100, 44, "Tinybird", "events") +
    box(150, 112, 100, 42, "PostgreSQL", "Drizzle") +
    box(10, 112, 100, 42, "PostHog", "OTLP");
  return svg("0 0 400 166", wires + d + n, t.caption);
}

// ---------------------------------------------------------------- crowdfunding dApp
export function figDapp(t) {
  const fr = t.lang === "fr";
  const T = 6;
  const fund = "M94 42 H150";
  const rel = "M260 42 H306";
  const wires =
    `<path d="${fund}" class="fx-wire" marker-end="url(#ah)"/>` +
    `<path d="${rel}" class="fx-wire" marker-end="url(#ah)"/>` +
    `<path d="M52 64 V126" class="fx-wire fx-dash" marker-end="url(#ah)"/>` +
    `<path d="M205 104 V126" class="fx-wire fx-dash" marker-end="url(#ah)"/>`;
  const dots =
    dot(fund, "1.5s") + dot(fund, "1.5s", "-0.75s") +
    step(rel, 0.24, 0.33, T) + step(rel, 0.57, 0.66, T) + step(rel, 0.9, 0.99, T) +
    step("M52 64 V126", 0.02, 0.14, T, "fx-dot fx-dot-soft", 3.4);
  const ms = [0, 1, 2].map((i) =>
    `<rect class="fx-track" x="${154 + i * 35}" y="80" width="32" height="10" rx="2"/>` +
    `<rect class="fx-ms fx-ms-${i}" x="${154 + i * 35}" y="80" width="32" height="10" rx="2"/>`).join("") +
    `<text class="fx-sub" x="205" y="102" text-anchor="middle">${fr ? "jalons" : "milestones"}</text>`;
  const n =
    box(10, 20, 84, 44, fr ? "contributeurs" : "backers", "wallets") +
    box(150, 20, 110, 44, "escrow", "smart contract") +
    box(306, 20, 84, 44, fr ? "porteur" : "creator") +
    box(6, 126, 96, 40, "API", fr ? "login par nonce" : "nonce sign-in") +
    box(150, 126, 110, 40, "IPFS", fr ? "métadonnées" : "metadata");
  return svg("0 0 400 176", wires + dots + n + ms, t.caption);
}

export const figures = { memory: figMemory, chain: figChain, pipeline: figPipeline, observe: figObserve, dapp: figDapp };

// Small line glyphs (24x24).
export const glyphs = {
  clock: `<circle cx="12" cy="12" r="8.5"/><path d="M12 7v5l3.5 2"/>`,
  pulse: `<path d="M2.5 12h4l2.5-6 4 12 2.5-6h6"/>`,
  gauge: `<path d="M4 17a8 8 0 1 1 16 0"/><path d="M12 17l4-5"/>`,
  code: `<path d="M8 7l-5 5 5 5M16 7l5 5-5 5M13.5 5l-3 14"/>`,
  agent: `<rect x="5" y="8" width="14" height="11" rx="3"/><path d="M12 4v4M9 13h.01M15 13h.01M2 13h3M19 13h3"/>`,
  server: `<rect x="3.5" y="4" width="17" height="7" rx="2"/><rect x="3.5" y="13" width="17" height="7" rx="2"/><path d="M7.5 7.5h.01M7.5 16.5h.01"/>`,
  layout: `<rect x="3.5" y="4" width="17" height="16" rx="2"/><path d="M3.5 9h17M9 9v11"/>`,
  db: `<ellipse cx="12" cy="6" rx="7.5" ry="2.8"/><path d="M4.5 6v12c0 1.5 3.4 2.8 7.5 2.8s7.5-1.3 7.5-2.8V6M4.5 12c0 1.5 3.4 2.8 7.5 2.8s7.5-1.3 7.5-2.8"/>`,
  nodes: `<circle cx="5.5" cy="12" r="2.5"/><circle cx="18.5" cy="5.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/><path d="M7.8 11l8.4-4.3M7.8 13l8.4 4.3"/>`,
  chain: `<rect x="2.5" y="8" width="8" height="8" rx="2"/><rect x="13.5" y="8" width="8" height="8" rx="2"/><path d="M10.5 12h3"/>`,
  check: `<path d="M4 12.5l5 5L20 6.5"/>`,
  lang: `<circle cx="12" cy="12" r="8.5"/><path d="M3.5 12h17M12 3.5c2.5 2.5 3.5 5.5 3.5 8.5s-1 6-3.5 8.5c-2.5-2.5-3.5-5.5-3.5-8.5s1-6 3.5-8.5z"/>`,
};
