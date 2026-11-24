import * as C from "./content.mjs";
import { figHero, figures, glyphs } from "./figures.mjs";

// FONTS=google switches to Google Fonts (used when binary files cannot be pushed).
const GOOGLE = typeof process !== "undefined" && process.env.FONTS === "google";
const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
// French typography: narrow no-break space before high punctuation.
const frTypo = (s) => s.replace(/ ([:;?!])/g, " $1");

export function render(lang) {
  const fr = lang === "fr";
  const T = (o) => {
    if (o == null) return "";
    if (typeof o === "string") return esc(o);
    const v = o[lang] ?? o.en;
    return esc(fr ? frTypo(v) : v);
  };
  const base = fr ? "../" : "./";
  const other = fr ? "../" : "fr/";

  const icon = {
    github: `<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2z"/></svg>`,
    linkedin: `<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z"/></svg>`,
    mail: `<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3.5 6.5 8.5 6.5 8.5-6.5"/></svg>`,
    sun: `<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.6" class="i-sun"><circle cx="12" cy="12" r="4"/><path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.3 5.3l1.4 1.4M17.3 17.3l1.4 1.4M5.3 18.7l1.4-1.4M17.3 6.7l1.4-1.4"/></svg>`,
    moon: `<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.6" class="i-moon"><path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z"/></svg>`,
    arrow: `<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M5 12h14M13 6l6 6-6 6"/></svg>`,
    ext: `<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M7 17 17 7M9 7h8v8"/></svg>`,
    copy: `<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"/></svg>`,
    check: `<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2"><path d="m5 12.5 4.5 4.5L19 7.5"/></svg>`,
    menu: `<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M4 8h16M4 16h16"/></svg>`,
    plus: `<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.7" class="i-plus"><path d="M12 5v14M5 12h14"/></svg>`,
  };
  const glyph = (k) => `<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">${glyphs[k]}</svg>`;

  const navKeys = ["about", "experience", "projects", "skills", "education", "contact"];
  const navLinks = navKeys.map((k) => `<a href="#${k}" data-nav="${k}">${T(C.ui.nav[k])}</a>`).join("");
  const rail = navKeys.map((k) => `<a href="#${k}" data-nav="${k}"><span>${C.sections[k].n}</span>${T(C.ui.nav[k])}</a>`).join("");

  const secHead = (k) =>
    `<header class="sec-head"><span class="sec-n">§${C.sections[k].n}</span><h2 id="${k}-title">${T(C.sections[k].title)}</h2></header>`;

  const tags = (arr) => `<ul class="tags">${arr.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>`;

  // ---------- hero ----------
  const heroFig = figHero({
    layers: C.hero.layers.map((l) => ({ label: T(l.label), note: T(l.note) })),
    caption: T(C.hero.figCaption),
  });
  const statsHtml = C.stats.map((s) =>
    `<div class="stat"><dt>${T(s.l)}</dt><dd>${esc(fr && s.vfr ? s.vfr : s.v)}</dd></div>`).join("");

  const hero = `
  <section class="hero" id="top" aria-labelledby="hero-name">
    <div class="hero-grid wrap">
      <div class="hero-copy">
        <p class="status"><span class="pulse" aria-hidden="true"></span>${T(C.hero.status)}</p>
        <h1 id="hero-name">Mouhib Bahri</h1>
        <p class="hero-role">${T(C.hero.role)}</p>
        <p class="hero-pitch">${T(C.hero.pitch)}</p>
        <p class="hero-sub">${T(C.hero.sub)}</p>
        <div class="hero-actions">
          <a class="btn btn-primary" href="#contact">${T(C.ui.getInTouch)}${icon.arrow}</a>
          <a class="btn btn-ghost" href="#projects">${T(C.ui.seeProjects)}</a>
          <span class="hero-social">
            <a class="icon-btn" href="${C.site.github}" target="_blank" rel="noopener" aria-label="GitHub">${icon.github}</a>
            <a class="icon-btn" href="${C.site.linkedin}" target="_blank" rel="noopener" aria-label="LinkedIn">${icon.linkedin}</a>
            <a class="icon-btn" href="mailto:${C.site.email}" aria-label="Email">${icon.mail}</a>
          </span>
        </div>
      </div>
      <figure class="hero-fig fig-card">
        ${heroFig}
        <figcaption>${T(C.hero.figCaption)}</figcaption>
      </figure>
    </div>
    <div class="wrap"><dl class="stats">${statsHtml}</dl></div>
  </section>`;

  // ---------- about ----------
  const about = `
  <section class="section" id="about" aria-labelledby="about-title">
    <div class="wrap">
      ${secHead("about")}
      <div class="about-grid">
        <div class="about-text reveal">
          <p class="lead">${T(C.about.bio)}</p>
          <p>${T(C.about.origin)}</p>
        </div>
        <aside class="about-side reveal">
          <h3 class="mini-title">${T(C.ui.howIWork)}</h3>
          <ol class="work-list">${C.about.work.map((w, i) => `<li><span>0${i + 1}</span>${T(w)}</li>`).join("")}</ol>
          <h3 class="mini-title">${T(C.ui.interests)}</h3>
          ${tags(fr ? C.about.interestsFr : C.about.interests)}
        </aside>
      </div>
    </div>
  </section>`;

  // ---------- experience ----------
  let rid = 0;
  const roleBody = (r) => {
    const id = `hl-${lang}-${++rid}`;
    return `
      <p class="role-sum">${T(r.summary)}</p>
      <div class="role-row">
        <ul class="metrics">${(fr ? r.metricsFr : r.metrics).map((m) => `<li>${esc(m)}</li>`).join("")}</ul>
        <button class="toggle" type="button" aria-expanded="false" aria-controls="${id}" hidden>${icon.plus}<span>${fr ? "Détails" : "Highlights"}</span><span class="count">${r.points.length}</span></button>
      </div>
      <ul class="points" id="${id}">${r.points.map((p) => `<li>${T(p)}</li>`).join("")}</ul>
      ${tags(r.tags)}`;
  };
  const orgCard = (o) => {
    if (o.roles.length === 1) {
      const r = o.roles[0];
      return `
        <article class="org single reveal">
          <header class="org-head">
            <span class="logo" aria-hidden="true">${esc(o.mono)}</span>
            <div class="org-id">
              <h3>${T(r.title)}</h3>
              <p class="mono"><span class="org-name">${esc(o.company)}</span> · ${T(o.place)}</p>
            </div>
            <span class="mono org-span">${T(r.dates)}</span>
          </header>
          <div class="single-body">${roleBody(r)}</div>
        </article>`;
    }
    return `
        <article class="org reveal">
          <header class="org-head">
            <span class="logo" aria-hidden="true">${esc(o.mono)}</span>
            <div class="org-id">
              <h3>${esc(o.company)}</h3>
              <p class="mono">${T(o.place)} · ${o.roles.length} ${fr ? "postes" : "roles"}</p>
            </div>
            <span class="mono org-span">${T(o.span)}</span>
          </header>
          <ol class="roles">${o.roles.map((r) => `
            <li class="role">
              <div class="role-head"><h4>${T(r.title)}</h4><span class="mono dates">${T(r.dates)}</span></div>
              ${roleBody(r)}
            </li>`).join("")}</ol>
        </article>`;
  };
  const exp = `
  <section class="section" id="experience" aria-labelledby="experience-title">
    <div class="wrap">
      ${secHead("experience")}
      <div class="orgs">${C.experience.map(orgCard).join("")}</div>
    </div>
  </section>`;

  // ---------- projects ----------
  const kindBadge = (k) => k === "capstone" ? T(C.ui.capstone) : T(C.ui.companyProject);
  const card = (p, i) => {
    const fig = figures[p.fig]({ lang, caption: T(p.title) });
    const links = [
      p.repo ? `<a class="link" href="${p.repo}" target="_blank" rel="noopener">${icon.github}${T(C.ui.viewRepo)}</a>` : "",
      p.site ? `<a class="link" href="${p.site}" target="_blank" rel="noopener">${icon.ext}2zero.earth</a>` : "",
    ].join("");
    return `
    <article class="card reveal" id="p-${p.id}">
      <figure class="card-fig">
        ${fig}
        <figcaption><span>Fig. ${i + 1}</span></figcaption>
      </figure>
      <div class="card-body">
        <div class="card-top">
          <span class="badge${p.kind === "capstone" ? " badge-open" : ""}">${kindBadge(p.kind)}</span>
          ${links}
        </div>
        <h3>${T(p.title)}</h3>
        <p class="meta mono">${p.meta[lang].map(esc).join('<span aria-hidden="true">·</span>')}</p>
        <p class="card-line">${T(p.line)}</p>
        <details class="more">
          <summary>${icon.plus}<span>${T(C.ui.howItWorks)}</span><span class="count">${p.points.length}</span></summary>
          <ul class="points">${p.points.map((x) => `<li>${T(x)}</li>`).join("")}</ul>
        </details>
        ${p.result ? `<p class="result"><span class="mono">${T(C.ui.result)}</span>${T(p.result)}</p>` : ""}
        ${tags(p.tags)}
      </div>
    </article>`;
  };
  const row = (p) => `
      <li class="mini reveal">
        <div class="mini-head">
          <span class="logo logo-glyph" aria-hidden="true">${glyph(p.glyph)}</span>
          <div>
            <h4>${T(p.title)}</h4>
            <p class="mono">${T(C.kinds[p.kind])} · ${T(p.date)}</p>
          </div>
        </div>
        <p class="mini-line">${T(p.line)}</p>
        ${tags(p.tags)}
      </li>`;
  const projects = `
  <section class="section" id="projects" aria-labelledby="projects-title">
    <div class="wrap">
      ${secHead("projects")}
      <div class="cards">${C.featured.map(card).join("")}</div>
      <h3 class="sub-title">${T(C.ui.moreProjects)}</h3>
      <ul class="minis">${C.more.map(row).join("")}</ul>
    </div>
  </section>`;

  // ---------- skills ----------
  const skills = `
  <section class="section" id="skills" aria-labelledby="skills-title">
    <div class="wrap">
      ${secHead("skills")}
      <div class="skill-grid">
        ${C.skills.map((g) => `
        <div class="skill reveal">
          <h3 class="mini-title">${T(g.g)}</h3>
          ${tags(fr && g.itemsFr ? g.itemsFr : g.items)}
        </div>`).join("")}
        <div class="skill reveal">
          <h3 class="mini-title">${T(C.ui.spoken)}</h3>
          <ul class="spoken">${C.spoken.map((s) => `<li><span>${T(s.l)}</span><span class="mono">${T(s.v)}</span></li>`).join("")}</ul>
        </div>
      </div>
    </div>
  </section>`;

  // ---------- education + achievements ----------
  const edu = `
  <section class="section" id="education" aria-labelledby="education-title">
    <div class="wrap">
      ${secHead("education")}
      <div class="edu-grid">
        <div class="edu reveal">
          <div class="org-head">
            <span class="logo" aria-hidden="true">IN</span>
            <div class="org-id">
              <h3>${T(C.education.degree)}</h3>
              <p class="mono">${T(C.education.school)}</p>
            </div>
          </div>
          <p class="mono dates edu-dates">${T(C.education.dates)}</p>
          <p class="edu-line">${T(C.education.line)}</p>
          <p class="edu-cap"><a href="#p-ddr">${T(C.education.capstone)}</a></p>
          <h3 class="mini-title">${T(C.ui.certifications)}</h3>
          <ul class="certs">${C.education.certs.map((c) => `<li><span>${esc(c.n)}</span>${c.by ? `<span class="mono">${esc(c.by)}</span>` : ""}</li>`).join("")}</ul>
        </div>
        <ol class="awards reveal">
          ${C.achievements.map((a) => `<li><span class="award-v">${esc(a.v)}</span><span class="award-t">${T(a.t)}</span></li>`).join("")}
        </ol>
      </div>
    </div>
  </section>`;

  // ---------- contact ----------
  const contact = `
  <section class="section contact" id="contact" aria-labelledby="contact-title">
    <div class="wrap">
      <div class="contact-grid">
        <div>
          <p class="sec-n contact-n">§${C.sections.contact.n} · ${T(C.ui.nav.contact)}</p>
          <h2 class="contact-title" id="contact-title">${T(C.contact.title)}</h2>
          <p class="contact-line">${T(C.contact.line)}</p>
          <dl class="facts">${C.contact.facts.map((f) => `<div><dt class="mono">${T(f.k)}</dt><dd>${T(f.v)}</dd></div>`).join("")}</dl>
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
    </div>
  </section>`;

  const year = new Date().getFullYear();
  const footer = `
  <footer class="foot">
    <div class="wrap foot-in">
      <span>© ${year} Mouhib Bahri</span>
      <span class="foot-mid">${T(C.ui.footer)}</span>
      <a href="#top">${T(C.ui.backToTop)} ↑</a>
    </div>
  </footer>`;

  const url = C.site.url + (fr ? "/fr/" : "/");
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
<meta property="og:type" content="website">
<meta property="og:title" content="${T(C.ui.title)}">
<meta property="og:description" content="${T(C.ui.description)}">
<meta property="og:url" content="${url}">
<meta property="og:image" content="${C.site.url}/assets/img/og.png">
<meta property="og:locale" content="${fr ? "fr_FR" : "en_US"}">
<meta name="twitter:card" content="summary_large_image">
<meta name="theme-color" content="#f6f4ef" media="(prefers-color-scheme: light)">
<meta name="theme-color" content="#0e0e0d" media="(prefers-color-scheme: dark)">
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
    jobTitle: fr ? "Ingénieur logiciel" : "Software Engineer", url,
    email: "mailto:" + C.site.email, sameAs: [C.site.github, C.site.linkedin],
    alumniOf: { "@type": "CollegeOrUniversity", name: "INSAT" },
  })}</script>
</head>`;

  const body = `
<body>
<a class="skip" href="#main">${T(C.ui.skip)}</a>
<div class="progress" aria-hidden="true"><span></span></div>
<header class="top">
  <div class="wrap top-in">
    <a class="brand" href="#top" aria-label="Mouhib Bahri"><span class="brand-mark">MB</span><span class="brand-name">Mouhib Bahri</span></a>
    <nav class="nav" aria-label="${fr ? "Navigation principale" : "Primary"}">${navLinks}</nav>
    <div class="controls">
      <div class="lang" role="group" aria-label="${T(C.ui.langLabel)}">
        <a href="${fr ? other : "./"}" ${fr ? "" : 'aria-current="true"'} data-lang="en" hreflang="en" lang="en">EN</a>
        <a href="${fr ? "./" : other}" ${fr ? 'aria-current="true"' : ""} data-lang="fr" hreflang="fr" lang="fr">FR</a>
      </div>
      <button class="icon-btn theme" type="button" aria-label="${T(C.ui.themeToggle)}">${icon.sun}${icon.moon}</button>
      <button class="icon-btn menu-btn" type="button" aria-label="${T(C.ui.menu)}" aria-expanded="false" aria-controls="sheet">${icon.menu}</button>
    </div>
  </div>
  <nav class="sheet" id="sheet" aria-label="${fr ? "Navigation mobile" : "Mobile"}" hidden>${rail}</nav>
</header>
<nav class="rail" aria-label="${fr ? "Sections" : "Sections"}">${rail}</nav>
<main id="main">
${hero}
${about}
${exp}
${projects}
${skills}
${edu}
${contact}
</main>
${footer}
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
<main class="nf-main wrap">
  <p class="sec-n">§404</p>
  <h1>Page not found.</h1>
  <p lang="fr" class="nf-fr">Page introuvable.</p>
  <p><a class="btn btn-primary" href="/">Back to the homepage</a> <a class="btn btn-ghost" href="/fr/" lang="fr">Accueil en français</a></p>
</main>
</body>
</html>
`;
}
