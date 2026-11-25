import * as C from "./content.mjs";
import { figures, glyphs } from "./figures.mjs";

// FONTS=google switches to Google Fonts (used when binary files cannot be pushed).
const GOOGLE = typeof process !== "undefined" && process.env.FONTS === "google";
const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
// French typography: narrow no-break space before high punctuation.
const frTypo = (s) => s.replace(/ ([:;?!])/g, " $1");
const norm = (s) => s.toLowerCase().trim();

export function render(lang) {
  const fr = lang === "fr";
  const T = (o) => {
    if (o == null) return "";
    if (typeof o === "string") return esc(o);
    const v = o[lang] ?? o.en;
    return esc(fr ? frTypo(v) : v);
  };
  const fmt = (n) => n.toLocaleString(fr ? "fr-FR" : "en-US").replace(/ | /g, " ");
  const base = fr ? "../" : "./";

  const icon = {
    github: `<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2z"/></svg>`,
    linkedin: `<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z"/></svg>`,
    mail: `<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3.5 6.5 8.5 6.5 8.5-6.5"/></svg>`,
    sun: `<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.6" class="i-sun"><circle cx="12" cy="12" r="4"/><path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.3 5.3l1.4 1.4M17.3 17.3l1.4 1.4M5.3 18.7l1.4-1.4M17.3 6.7l1.4-1.4"/></svg>`,
    moon: `<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.6" class="i-moon"><path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z"/></svg>`,
    arrow: `<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M5 12h14M13 6l6 6-6 6"/></svg>`,
    ext: `<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" class="i-ext"><path d="M7 17 17 7M9 7h8v8"/></svg>`,
    copy: `<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"/></svg>`,
    menu: `<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M4 8h16M4 16h16"/></svg>`,
    plus: `<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.7" class="i-plus"><path d="M12 5v14M5 12h14"/></svg>`,
    search: `<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.7"><circle cx="11" cy="11" r="6.5"/><path d="m20 20-4.2-4.2"/></svg>`,
    x: `<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M6 6l12 12M18 6 6 18"/></svg>`,
    up: `<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8"><path d="m6 15 6-6 6 6"/></svg>`,
    down: `<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8"><path d="m6 9 6 6 6-6"/></svg>`,
  };
  const glyph = (k) => `<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">${glyphs[k]}</svg>`;
  const tags = (arr, max = 99) => `<ul class="tags">${arr.slice(0, max).map((x) => `<li data-skill="${esc(norm(x))}">${esc(x)}</li>`).join("")}</ul>`;
  const skillAttr = (arr) => esc(arr.map(norm).join("|"));
  const counter = (m) => {
    const shown = `${m.pre ?? ""}${fmt(m.n)}${m.suf ?? ""}`;
    return `<span class="count" data-n="${m.n}" data-pre="${esc(m.pre ?? "")}" data-suf="${esc(m.suf ?? "")}">${esc(shown)}</span>`;
  };
  const ext = (url, label) => `<a class="ext" href="${url}" target="_blank" rel="noopener">${label}${icon.ext}</a>`;

  // ---------- search index (skills that appear in experience/projects, plus the skills section)
  const index = new Map();
  const addSkill = (name, used) => {
    const k = norm(name);
    const cur = index.get(k) || { name, n: 0 };
    cur.n += used ? 1 : 0;
    index.set(k, cur);
  };
  C.experience.forEach((e) => e.tags.forEach((s) => addSkill(s, true)));
  C.featured.forEach((p) => p.tags.forEach((s) => addSkill(s, true)));
  C.more.forEach((p) => p.tags.forEach((s) => addSkill(s, true)));
  C.skills.forEach((g) => (fr && g.itemsFr ? g.itemsFr : g.items).forEach((s) => addSkill(s, false)));
  const indexJson = JSON.stringify([...index.values()].sort((a, b) => b.n - a.n || a.name.localeCompare(b.name)))
    .replace(/</g, "\\u003c");

  // ---------- navigation (one nav: sidebar on desktop, sheet on mobile)
  const navKeys = ["education", "experience", "projects", "skills", "contact"];
  const navLinks = navKeys.map((k) => `<li><a href="#${k}" data-nav="${k}"><span>${C.sections[k].n}</span>${T(C.ui.nav[k])}</a></li>`).join("");

  const secHead = (k) =>
    `<header class="sec-head"><span class="sec-n">${C.sections[k].n}</span><h2 id="${k}-title">${T(C.sections[k].title)}</h2></header>`;

  // ---------- hero
  const orbit = `<svg class="orbit" viewBox="0 0 400 480" aria-hidden="true">
    <ellipse cx="200" cy="240" rx="188" ry="226" class="orbit-ring"/>
    <ellipse cx="200" cy="240" rx="160" ry="196" class="orbit-ring orbit-ring-2"/>
    <circle r="6" class="orbit-dot orbit-dot-a"><animateMotion dur="16s" repeatCount="indefinite" path="M388 240a188 226 0 1 1-376 0a188 226 0 1 1 376 0"/></circle>
    <circle r="4" class="orbit-dot"><animateMotion dur="22s" begin="-9s" repeatCount="indefinite" path="M40 240a160 196 0 1 0 320 0a160 196 0 1 0-320 0"/></circle>
    <circle r="3.5" class="orbit-dot"><animateMotion dur="16s" begin="-8s" repeatCount="indefinite" path="M388 240a188 226 0 1 1-376 0a188 226 0 1 1 376 0"/></circle>
  </svg>`;
  const hero = `
  <section class="hero" id="top" aria-labelledby="hero-name">
    <div class="hero-grid">
      <div class="hero-copy">
        <h1 id="hero-name">Mouhib Bahri</h1>
        <p class="hero-role">${T(C.hero.role)}</p>
        <p class="slogan">${T(C.hero.slogan)}</p>
        <div class="hero-actions">
          <a class="btn btn-primary" href="#contact">${T(C.ui.getInTouch)}${icon.arrow}</a>
          <a class="btn btn-ghost" href="#projects">${T(C.ui.seeProjects)}</a>
        </div>
      </div>
      <div class="portrait">
        ${orbit}
        <picture>
          <source srcset="${base}assets/img/mouhib.webp" type="image/webp">
          <img src="${base}assets/img/mouhib.jpg" width="720" height="900" alt="${T(C.hero.photoAlt)}" fetchpriority="high">
        </picture>
        <p class="status"><span class="pulse" aria-hidden="true"></span>${T(C.hero.status)}</p>
      </div>
    </div>
    <dl class="stats">${C.stats.map((s) => `<div class="stat"><dt>${T(s.l)}</dt><dd>${counter(s)}</dd></div>`).join("")}</dl>
  </section>`;

  // ---------- education
  const E = C.education;
  const education = `
  <section class="section" id="education" aria-labelledby="education-title">
    ${secHead("education")}
    <article class="panel edu reveal">
      <span class="logo" aria-hidden="true">${E.mono}</span>
      <div>
        <h3>${T(E.degree)}</h3>
        <p class="edu-school">${T(E.school)}</p>
        <p class="mono muted">${T(E.dates)}</p>
      </div>
    </article>
  </section>`;

  // ---------- experience
  let hid = 0;
  const xp = (e) => {
    const id = `hl-${++hid}`;
    const vis = e.points.slice(0, e.visible), rest = e.points.slice(e.visible);
    const links = [e.url ? ext(e.url, esc(e.company)) : `<span class="co">${esc(e.company)}</span>`,
      ...(e.extra || []).map((x) => ext(x.url, T(x.label)))].join("");
    return `
      <article class="panel xp reveal" data-skills="${skillAttr(e.tags)}" data-label="${T(e.title)} · ${esc(e.company)}">
        <header class="xp-head">
          <span class="logo" aria-hidden="true">${esc(e.mono)}</span>
          <div class="xp-id">
            <h3>${T(e.title)}</h3>
            <p class="xp-co">${links}<span class="muted">${T(e.place)}</span></p>
          </div>
          <p class="xp-dates mono">${T(e.dates)}</p>
        </header>
        <p class="xp-about">${T(e.about)}</p>
        <dl class="kpis">${e.metrics.map((m) => `<div><dd>${counter(m)}</dd><dt>${T(m.l)}</dt></div>`).join("")}</dl>
        <ul class="points">${vis.map((p) => `<li>${T(p)}</li>`).join("")}</ul>
        ${rest.length ? `<ul class="points points-more" id="${id}">${rest.map((p) => `<li>${T(p)}</li>`).join("")}</ul>
        <button class="toggle" type="button" aria-expanded="false" aria-controls="${id}" hidden>${icon.plus}<span>${T(C.ui.highlights)}</span><span class="n">+${rest.length}</span></button>` : ""}
        ${tags(e.tags, 6)}
      </article>`;
  };
  const experience = `
  <section class="section" id="experience" aria-labelledby="experience-title">
    ${secHead("experience")}
    <div class="xps">${C.experience.map(xp).join("")}</div>
  </section>`;

  // ---------- projects
  const outcome = (p) => {
    const r = p.result;
    if (!r) return "";
    const lead = p.team
      ? `<span class="avatars" aria-hidden="true">${p.team.map((x) => `<span${x === "MB" ? ' class="me"' : ""}>${esc(x)}</span>`).join("")}</span>`
      : `<span class="big">${esc(r.big)}</span>`;
    return `<p class="outcome">${lead}<span class="outcome-t">${T(r.text)}</span></p>`;
  };
  let pid = 0;
  const card = (p, i) => {
    const id = `hw-${++pid}`;
    const fig = figures[p.fig]({ lang, caption: T(p.title) });
    const links = [
      p.repo ? `<a class="ext" href="${p.repo}" target="_blank" rel="noopener">${icon.github}${T(C.ui.repo)}</a>` : "",
      p.site ? ext(p.site.url, esc(p.site.label)) : "",
    ].join("");
    return `
    <article class="card${i === 0 ? " wide" : ""} reveal" id="p-${p.id}" data-skills="${skillAttr(p.tags)}" data-label="${T(p.title)}">
      <figure class="card-fig">${fig}</figure>
      <div class="card-body">
        <h3>${T(p.title)}</h3>
        <p class="meta mono">${p.meta[lang].map(esc).join('<span class="sep" aria-hidden="true">·</span>')}${links ? `<span class="card-links">${links}</span>` : ""}</p>
        <p class="card-line">${T(p.line)}</p>
        <ul class="points points-more" id="${id}">${p.points.map((x) => `<li>${T(x)}</li>`).join("")}</ul>
        <button class="toggle" type="button" aria-expanded="false" aria-controls="${id}" hidden>${icon.plus}<span>${T(C.ui.howItWorks)}</span></button>
        ${outcome(p)}
        ${tags(p.tags, 5)}
      </div>
    </article>`;
  };
  const mini = (p) => `
      <li class="mini reveal" data-skills="${skillAttr(p.tags)}" data-label="${T(p.title)}">
        <span class="logo logo-glyph" aria-hidden="true">${glyph(p.glyph)}</span>
        <h4>${T(p.title)}</h4>
        <p class="mono muted">${T(p.date)}</p>
        <p class="mini-line">${T(p.line)}</p>
        ${tags(p.tags)}
      </li>`;
  const projects = `
  <section class="section" id="projects" aria-labelledby="projects-title">
    ${secHead("projects")}
    <div class="cards">${C.featured.map(card).join("")}</div>
    <h3 class="sub-title">${T(C.ui.moreProjects)}</h3>
    <ul class="minis">${C.more.map(mini).join("")}</ul>
  </section>`;

  // ---------- skills
  const skills = `
  <section class="section" id="skills" aria-labelledby="skills-title">
    ${secHead("skills")}
    <div class="skill-grid">
      ${C.skills.map((g) => {
        const items = fr && g.itemsFr ? g.itemsFr : g.items;
        return `
      <div class="panel skill reveal" data-skills="${skillAttr(items)}" data-label="${T(g.g)}">
        <h3><span class="skill-ic">${glyph(g.icon)}</span>${T(g.g)}</h3>
        ${tags(items)}
      </div>`;
      }).join("")}
    </div>
    <p class="spoken reveal"><span class="skill-ic">${glyph("lang")}</span><span class="spoken-k">${T(C.ui.spoken)}</span>${C.spoken.map((s) => `<span>${T(s.l)} <span class="muted mono">${T(s.v)}</span></span>`).join("")}</p>
  </section>`;

  // ---------- contact
  const contact = `
  <section class="section contact" id="contact" aria-labelledby="contact-title">
    <div class="contact-grid">
      <div>
        <p class="sec-n contact-n">${C.sections.contact.n} · ${T(C.ui.nav.contact)}</p>
        <h2 class="contact-title" id="contact-title">${T(C.contact.title)}</h2>
        <p class="contact-line">${T(C.contact.line)}</p>
      </div>
      <div class="contact-actions">
        <div class="email-box">
          <span class="mono email-k">Email</span>
          <a class="email" href="mailto:${C.site.email}">${C.site.email}</a>
          <div class="email-actions">
            <a class="btn btn-primary" href="mailto:${C.site.email}">${fr ? "Écrire un e-mail" : "Send an email"}${icon.arrow}</a>
            <button class="btn btn-ghost copy" type="button" data-copy="${C.site.email}" data-label="${T(C.ui.copyEmail)}" data-done="${T(C.ui.copied)}">${icon.copy}<span>${T(C.ui.copyEmail)}</span></button>
          </div>
        </div>
        <div class="contact-links">
          <a class="link-card" href="${C.site.linkedin}" target="_blank" rel="noopener">${icon.linkedin}<span>LinkedIn</span><span class="mono">in/mouhib-bahri</span>${icon.ext}</a>
          <a class="link-card" href="${C.site.github}" target="_blank" rel="noopener">${icon.github}<span>GitHub</span><span class="mono">MouhibBahri</span>${icon.ext}</a>
        </div>
      </div>
    </div>
  </section>`;

  const year = new Date().getFullYear();
  const footer = `
  <footer class="foot">
    <span>© ${year} Mouhib Bahri</span>
    <span>${T(C.ui.footer)}</span>
    <a href="#top">${T(C.ui.backToTop)} ↑</a>
  </footer>`;

  const url = C.site.url + (fr ? "/fr/" : "/");
  const S = C.ui.search;
  const head = `<!doctype html>
<html lang="${lang}" data-theme="light">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${T(C.ui.title)}</title>
<meta name="description" content="${T(C.ui.description)}">
<meta name="author" content="Mouhib Bahri">
<link rel="canonical" href="${url}">
<link rel="alternate" hreflang="en" href="${C.site.url}/">
<link rel="alternate" hreflang="fr" href="${C.site.url}/fr/">
<link rel="alternate" hreflang="x-default" href="${C.site.url}/">
<meta property="og:type" content="profile">
<meta property="og:title" content="${T(C.ui.title)}">
<meta property="og:description" content="${T(C.ui.description)}">
<meta property="og:url" content="${url}">
<meta property="og:image" content="${C.site.url}/assets/img/og.png">
<meta property="og:locale" content="${fr ? "fr_FR" : "en_US"}">
<meta name="twitter:card" content="summary_large_image">
<meta name="theme-color" content="#f3f5f0" media="(prefers-color-scheme: light)">
<meta name="theme-color" content="#0c0f0d" media="(prefers-color-scheme: dark)">
<link rel="icon" href="${base}assets/img/favicon.svg" type="image/svg+xml">
${GOOGLE ? `<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=IBM+Plex+Sans:wght@400;500;600&family=Newsreader:ital,opsz,wght@0,6..72,400..600;1,6..72,400..600&display=swap">` : `<link rel="preload" href="${base}assets/fonts/newsreader-latin-wght-normal.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="${base}assets/fonts/ibm-plex-sans-latin-wght-normal.woff2" as="font" type="font/woff2" crossorigin>`}
<script>
(function(){var d=document.documentElement,s=null;d.classList.add("js");try{s=localStorage.getItem("theme")}catch(e){}
d.dataset.theme=s||(matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light");
var p=new URLSearchParams(location.search).get("palette");if(p)d.dataset.palette=p;
${fr ? "" : `try{if(!localStorage.getItem("lang")&&/^fr\\b/i.test(navigator.language||"")&&!/bot|crawl|spider/i.test(navigator.userAgent)){location.replace("fr/"+location.search+location.hash)}}catch(e){}`}
})();
</script>
<link rel="stylesheet" href="${base}assets/css/site.css">
<script type="application/ld+json">${JSON.stringify({
    "@context": "https://schema.org", "@type": "Person", name: "Mouhib Bahri",
    jobTitle: fr ? "Ingénieur logiciel" : "Software Engineer", url, image: C.site.url + "/assets/img/mouhib.jpg",
    email: "mailto:" + C.site.email, sameAs: [C.site.github, C.site.linkedin],
    alumniOf: { "@type": "CollegeOrUniversity", name: "INSAT" },
  })}</script>
</head>`;

  const body = `
<body>
<a class="skip" href="#main">${T(C.ui.skip)}</a>
<div class="progress" aria-hidden="true"><span></span></div>
<header class="side">
  <a class="brand" href="#top" aria-label="Mouhib Bahri"><span class="brand-mark">MB</span><span class="brand-name">Mouhib Bahri</span></a>
  <form class="search" role="search" autocomplete="off" onsubmit="return false">
    <label class="sr" for="q">${T(S.label)}</label>
    <span class="search-ic">${icon.search}</span>
    <input id="q" type="search" placeholder="${T(S.placeholder)}" role="combobox" aria-expanded="false" aria-controls="q-list" aria-autocomplete="list" spellcheck="false">
    <kbd class="search-kbd" aria-hidden="true">/</kbd>
    <ul class="suggest" id="q-list" role="listbox" hidden></ul>
  </form>
  <nav class="nav" id="nav" aria-label="${fr ? "Sections" : "Sections"}"><ol>${navLinks}</ol>
    <div class="nav-tools">
      <div class="lang" role="group" aria-label="${T(C.ui.langLabel)}">
        <a href="${fr ? "../" : "./"}" ${fr ? "" : 'aria-current="true"'} data-lang="en" hreflang="en" lang="en">EN</a>
        <a href="${fr ? "./" : "fr/"}" ${fr ? 'aria-current="true"' : ""} data-lang="fr" hreflang="fr" lang="fr">FR</a>
      </div>
      <button class="icon-btn theme" type="button" aria-label="${T(C.ui.themeToggle)}">${icon.sun}${icon.moon}</button>
      <a class="icon-btn" href="${C.site.github}" target="_blank" rel="noopener" aria-label="GitHub">${icon.github}</a>
      <a class="icon-btn" href="${C.site.linkedin}" target="_blank" rel="noopener" aria-label="LinkedIn">${icon.linkedin}</a>
    </div>
  </nav>
  <div class="tools">
    <div class="lang" role="group" aria-label="${T(C.ui.langLabel)}">
      <a href="${fr ? "../" : "./"}" ${fr ? "" : 'aria-current="true"'} data-lang="en" hreflang="en" lang="en">EN</a>
      <a href="${fr ? "./" : "fr/"}" ${fr ? 'aria-current="true"' : ""} data-lang="fr" hreflang="fr" lang="fr">FR</a>
    </div>
    <button class="icon-btn theme" type="button" aria-label="${T(C.ui.themeToggle)}">${icon.sun}${icon.moon}</button>
    <a class="icon-btn social" href="${C.site.github}" target="_blank" rel="noopener" aria-label="GitHub">${icon.github}</a>
    <a class="icon-btn social" href="${C.site.linkedin}" target="_blank" rel="noopener" aria-label="LinkedIn">${icon.linkedin}</a>
    <button class="icon-btn search-btn" type="button" aria-label="${T(S.open)}" aria-expanded="false">${icon.search}</button>
    <button class="icon-btn menu-btn" type="button" aria-label="${T(C.ui.menu)}" aria-expanded="false" aria-controls="nav">${icon.menu}</button>
  </div>
</header>
<div class="finder" role="region" aria-label="${T(S.label)}" hidden>
  <span class="finder-term"></span>
  <span class="finder-pos mono" aria-live="polite"></span>
  <button class="icon-btn finder-prev" type="button" aria-label="${T(S.prev)}">${icon.up}</button>
  <button class="icon-btn finder-next" type="button" aria-label="${T(S.next)}">${icon.down}</button>
  <button class="icon-btn finder-clear" type="button" aria-label="${T(S.clear)}">${icon.x}</button>
</div>
<script type="application/json" id="skill-index">${indexJson}</script>
<script type="application/json" id="i18n">${JSON.stringify({ none: T(S.none), inSkills: T(S.inSkills), matches: T(S.uses), match: T(S.use) })}</script>
<main id="main">
${hero}
${education}
${experience}
${projects}
${skills}
${contact}
${footer}
</main>
<script src="${base}assets/js/site.js" defer></script>
</body>
</html>
`;
  return head + body;
}

export function render404() {
  return `<!doctype html>
<html lang="en" data-theme="light">
<head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>404 | Mouhib Bahri</title><meta name="robots" content="noindex">
<link rel="icon" href="/assets/img/favicon.svg" type="image/svg+xml">
<script>(function(){var d=document.documentElement,s=null;try{s=localStorage.getItem("theme")}catch(e){}d.dataset.theme=s||(matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light")})();</script>
<link rel="stylesheet" href="/assets/css/site.css">
</head>
<body class="nf">
<main class="nf-main">
  <p class="sec-n">404</p>
  <h1>Page not found.</h1>
  <p lang="fr" class="nf-fr">Page introuvable.</p>
  <p><a class="btn btn-primary" href="/">Back to the homepage</a> <a class="btn btn-ghost" href="/fr/" lang="fr">Accueil en français</a></p>
</main>
</body>
</html>
`;
}
