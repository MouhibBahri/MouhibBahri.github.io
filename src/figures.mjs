// Hand-drawn SVG schematics. Colors come from CSS classes (see site.css, "figures").
// Text in the figures is technical and mostly identical in both languages;
// the few words that differ go through `t`.

const box = (x, y, w, h, label, sub = "", cls = "") =>
  `<g class="fx-node ${cls}"><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="6"/>` +
  `<text class="fx-label" x="${x + w / 2}" y="${y + (sub ? h / 2 - 2 : h / 2 + 4)}" text-anchor="middle">${label}</text>` +
  (sub ? `<text class="fx-sub" x="${x + w / 2}" y="${y + h / 2 + 12}" text-anchor="middle">${sub}</text>` : "") +
  `</g>`;

const svg = (vb, body, label) =>
  `<svg class="fx" viewBox="${vb}" role="img" aria-label="${label}" xmlns="http://www.w3.org/2000/svg">` +
  `<defs><marker id="ah" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 8 4 0 8z" class="fx-arrowhead"/></marker></defs>` +
  body + `</svg>`;

const dot = (pathId, dur, begin = "0s", extra = "") =>
  `<circle r="3.6" class="fx-dot"${extra}><animateMotion dur="${dur}" begin="${begin}" repeatCount="indefinite" rotate="auto"><mpath href="#${pathId}"/></animateMotion></circle>`;

export function figHero(t) {
  const layers = t.layers;
  const rowH = 46, gap = 10, x = 70, w = 330, top = 18;
  let rows = "";
  layers.forEach((l, i) => {
    const y = top + i * (rowH + gap);
    rows += `<g class="fx-layer" style="--i:${i}">` +
      `<rect x="${x}" y="${y}" width="${w}" height="${rowH}" rx="6"/>` +
      `<text class="fx-idx" x="${x - 16}" y="${y + rowH / 2 + 4}" text-anchor="end">L${layers.length - 1 - i}</text>` +
      `<text class="fx-label fx-left" x="${x + 16}" y="${y + 20}">${l.label}</text>` +
      `<text class="fx-sub fx-left" x="${x + 16}" y="${y + 35}">${l.note}</text>` +
      `<circle class="fx-led" cx="${x + w - 18}" cy="${y + rowH / 2}" r="3.5"/>` +
      `</g>`;
  });
  const h = top + layers.length * (rowH + gap) + 6;
  const spine = `<path id="hspine" d="M${x + w - 46} ${top - 6} V ${h - 8}" class="fx-wire fx-dash"/>`;
  return svg(`0 0 420 ${h}`, rows + spine + dot("hspine", "5s"), t.caption);
}

export function figMemory(t) {
  const b =
    box(14, 20, 96, 46, "agent", t.lang === "fr" ? "outils mémoire" : "memory tools") +
    box(290, 20, 96, 46, "libSQL", "F8_BLOB · int8") +
    `<path id="mw" d="M110 34 H290" class="fx-wire" marker-end="url(#ah)"/>` +
    `<text class="fx-sub" x="200" y="28" text-anchor="middle">store · 1024-d → int8</text>` +
    `<path id="mr" d="M290 54 H110" class="fx-wire" marker-end="url(#ah)"/>` +
    `<text class="fx-sub fx-accent-text" x="200" y="72" text-anchor="middle">(1 − d) · 0.95^Δdays · top 5</text>` +
    dot("mw", "3.2s") + dot("mr", "3.2s", "-1.6s");
  // weight bars
  const rows = [
    ["preference", 0.82, "up"],
    ["correction", 0.95, "up"],
    ["insight", 0.58, "down"],
    ["discovery", 0.36, "down"],
    ["insight", 0.14, "gc"],
  ];
  let bars = `<text class="fx-cap" x="14" y="104">${t.lang === "fr" ? "poids des souvenirs" : "memory weights"}</text>`;
  rows.forEach(([cat, wv, mode], i) => {
    const y = 114 + i * 20;
    bars += `<text class="fx-sub fx-left" x="14" y="${y + 9}">${cat}</text>` +
      `<rect class="fx-track" x="96" y="${y}" width="200" height="10" rx="2"/>` +
      `<rect class="fx-bar fx-bar-${mode}" x="96" y="${y}" width="${200 * wv}" height="10" rx="2"/>`;
  });
  bars +=
    `<text class="fx-sub fx-left" x="306" y="${114 + 9}">↑ EWMA</text>` +
    `<text class="fx-sub fx-left" x="306" y="${134 + 9}">α = 0.3</text>` +
    `<text class="fx-sub fx-left" x="306" y="${154 + 9}">↓ e^(−0.01t)</text>` +
    `<text class="fx-sub fx-left" x="306" y="${174 + 9}">t½ ≈ 69 d</text>` +
    `<text class="fx-sub fx-left" x="306" y="${194 + 9}">GC</text>`;
  return svg("0 0 400 222", b + bars, t.caption);
}

export function figChain(t) {
  const y = 132;
  const nodes =
    box(132, 10, 140, 44, "master", "metadata · BoltDB") +
    box(10, y - 4, 60, 44, "client") +
    box(102, y - 4, 76, 44, "S1", "replica") +
    box(210, y - 4, 76, 44, "S2", "replica") +
    box(318, y - 4, 76, 44, "S3", "replica", "fx-tail");
  const wires =
    `<path id="cw" d="M70 ${y + 6} H102 M178 ${y + 6} H210 M286 ${y + 6} H318" class="fx-wire" marker-end="url(#ah)"/>` +
    `<path id="ca" d="M318 ${y + 30} H286 M210 ${y + 30} H178 M102 ${y + 30} H70" class="fx-wire fx-dash" marker-end="url(#ah)"/>` +
    `<path id="cwp" d="M70 ${y + 6} H318" fill="none" stroke="none"/>` +
    `<path id="cap" d="M318 ${y + 30} H70" fill="none" stroke="none"/>` +
    `<path d="M140 ${y - 4} L178 54 M248 ${y - 4} L226 54 M356 ${y - 4} L252 54" class="fx-wire fx-hb"/>`;
  const anim =
    `<circle r="4" class="fx-dot"><animateMotion dur="4.4s" repeatCount="indefinite" keyPoints="0;1;1" keyTimes="0;0.42;1" calcMode="linear"><mpath href="#cwp"/></animateMotion>` +
    `<animate attributeName="opacity" values="1;1;0;0" keyTimes="0;0.42;0.43;1" dur="4.4s" repeatCount="indefinite"/></circle>` +
    `<circle r="4" class="fx-dot fx-ack"><animateMotion dur="4.4s" repeatCount="indefinite" keyPoints="0;0;1;1" keyTimes="0;0.5;0.92;1" calcMode="linear"><mpath href="#cap"/></animateMotion>` +
    `<animate attributeName="opacity" values="0;0;1;1;0" keyTimes="0;0.49;0.5;0.92;0.93" dur="4.4s" repeatCount="indefinite"/></circle>` +
    `<text class="fx-sub fx-accent-text fx-fsync" x="356" y="${y + 58}" text-anchor="middle">fsync · seal<animate attributeName="opacity" values="0;0;1;1;0;0" keyTimes="0;0.4;0.43;0.55;0.6;1" dur="4.4s" repeatCount="indefinite"/></text>`;
  const caps =
    `<circle cx="14" cy="196" r="3.6" class="fx-dot"/><text class="fx-sub fx-left" x="24" y="199">write</text>` +
    `<circle cx="74" cy="196" r="3.6" class="fx-dot fx-ack"/><text class="fx-sub fx-left" x="84" y="199">ack</text>` +
    `<path d="M128 196 h18" class="fx-wire fx-hb"/><text class="fx-sub fx-left" x="152" y="199">${t.lang === "fr" ? "heartbeat 10 s · timeout 15 s" : "heartbeat 10 s · timeout 15 s"}</text>` +
    `<text class="fx-cap" x="10" y="218">64 MiB chunks · 1 MiB blocks · CRC32 · RF = 3</text>`;
  return svg("0 0 404 226", nodes + wires + caps + anim, t.caption);
}

export function figPipeline(t) {
  const fr = t.lang === "fr";
  const n =
    box(10, 20, 108, 46, "8 sources", "RSS · SEO · CRM") +
    box(146, 20, 108, 46, fr ? "score 0–1" : "score 0–1", fr ? "vs. clients cibles" : "vs. ICPs") +
    box(282, 20, 108, 46, fr ? "idées" : "ideas", fr ? "hebdo / tenant" : "weekly / tenant") +
    box(282, 110, 108, 46, fr ? "plan" : "plan", fr ? "par canal" : "per channel") +
    box(146, 110, 108, 46, fr ? "brouillon" : "draft", fr ? "sous-agent" : "sub-agent") +
    box(10, 110, 108, 46, fr ? "relecture" : "review", fr ? "commentaires" : "comments");
  const p = `<path id="pp" d="M118 43 H146 M254 43 H282 M336 66 V110 M282 133 H254 M146 133 H118" class="fx-wire" marker-end="url(#ah)"/>` +
    `<path id="ppm" d="M118 43 H282 M336 66 V110 M282 133 H118" fill="none" stroke="none"/>` +
    `<path d="M64 156 C64 182 200 182 200 156" class="fx-wire fx-dash" marker-end="url(#ah)"/>` +
    `<text class="fx-sub" x="132" y="190" text-anchor="middle">${fr ? "les commentaires relancent la rédaction" : "comments feed redrafts"}</text>`;
  const d = `<circle r="3.6" class="fx-dot"><animateMotion dur="5s" repeatCount="indefinite"><mpath href="#ppm"/></animateMotion></circle>`;
  const cap = `<text class="fx-cap" x="10" y="216">${fr ? "tenant_id filtré à la frontière d’accès aux données" : "tenant_id enforced at the data-access boundary"}</text>`;
  return svg("0 0 400 222", n + p + d + cap, t.caption);
}

export function figObserve(t) {
  const fr = t.lang === "fr";
  const n =
    box(10, 20, 100, 46, fr ? "navigateur" : "browser", "Next.js") +
    box(150, 20, 100, 46, "API routes", "Next.js") +
    box(290, 20, 100, 46, "backend", fr ? "existant" : "existing", "fx-ghost") +
    box(150, 112, 100, 40, "PostgreSQL", "Drizzle") +
    box(290, 112, 100, 40, "Tinybird", "events") +
    box(10, 112, 100, 40, "PostHog", "OTLP");
  const w =
    `<path id="o1" d="M110 43 H150 M250 43 H290" class="fx-wire" marker-end="url(#ah)"/>` +
    `<path d="M200 66 V112 M340 66 V112" class="fx-wire" marker-end="url(#ah)"/>` +
    `<path id="ot" d="M170 66 C150 92 110 92 80 112" class="fx-wire fx-dash fx-otel" marker-end="url(#ah)"/>` +
    `<path d="M50 66 V112" class="fx-wire fx-dash fx-otel" marker-end="url(#ah)"/>` +
    `<path id="o1m" d="M110 43 H290" fill="none" stroke="none"/>`;
  const d = dot("o1m", "3s") + dot("ot", "3s", "-1.2s");
  const cap = `<text class="fx-cap" x="10" y="186">${fr ? "traces · logs · erreurs · session replay" : "traces · logs · errors · session replay"}</text>` +
    `<text class="fx-cap" x="10" y="204">prod · preview · local (Docker)</text>`;
  return svg("0 0 400 214", n + w + d + cap, t.caption);
}

export const figures = { memory: figMemory, chain: figChain, pipeline: figPipeline, observe: figObserve };

// Small line glyphs for compact project rows (24x24).
export const glyphs = {
  agent: `<circle cx="12" cy="9" r="4"/><path d="M5 20c1.5-3.5 4-5 7-5s5.5 1.5 7 5"/><path d="M12 2v3"/>`,
  chain: `<rect x="2.5" y="8" width="8" height="8" rx="2"/><rect x="13.5" y="8" width="8" height="8" rx="2"/><path d="M10.5 12h3"/>`,
  clock: `<circle cx="12" cy="12" r="8.5"/><path d="M12 7v5l3.5 2"/>`,
  sun: `<circle cx="12" cy="12" r="4"/><path d="M12 2.5v2.5M12 19v2.5M2.5 12H5M19 12h2.5M5.3 5.3l1.8 1.8M16.9 16.9l1.8 1.8M5.3 18.7l1.8-1.8M16.9 7.1l1.8-1.8"/>`,
  pulse: `<path d="M2.5 12h4l2.5-6 4 12 2.5-6h6"/>`,
  gauge: `<path d="M4 17a8 8 0 1 1 16 0"/><path d="M12 17l4-5"/>`,
  ledger: `<rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 8h8M8 12h8M8 16h5"/>`,
  cart: `<path d="M3 4h2.5l2 11h10.5l2-8H7"/><circle cx="9.5" cy="19.5" r="1.3"/><circle cx="17" cy="19.5" r="1.3"/>`,
  memory: `<ellipse cx="12" cy="6" rx="7.5" ry="2.8"/><path d="M4.5 6v12c0 1.5 3.4 2.8 7.5 2.8s7.5-1.3 7.5-2.8V6M4.5 12c0 1.5 3.4 2.8 7.5 2.8s7.5-1.3 7.5-2.8"/>`,
  replicas: `<rect x="2.5" y="9" width="5" height="6" rx="1"/><rect x="9.5" y="9" width="5" height="6" rx="1"/><rect x="16.5" y="9" width="5" height="6" rx="1"/><path d="M7.5 12h2M14.5 12h2"/>`,
  pipeline: `<circle cx="5" cy="6" r="2.2"/><circle cx="12" cy="12" r="2.2"/><circle cx="19" cy="18" r="2.2"/><path d="M6.6 7.6l3.8 2.8M13.6 13.6l3.8 2.8"/>`,
  leaf: `<path d="M5 19C5 10 10 5 20 4c-1 10-6 15-15 15z"/><path d="M5 19l8-8"/>`,
};
