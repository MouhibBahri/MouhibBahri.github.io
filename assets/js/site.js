(() => {
  const d = document.documentElement;
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const store = (k, v) => { try { localStorage.setItem(k, v); } catch (e) {} };
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const lang = d.lang || "en";
  const side = $(".side");

  // ---------- theme
  const syncMeta = () => $$('meta[name="theme-color"]').forEach((m) => m.setAttribute("content", getComputedStyle(d).getPropertyValue("--bg").trim()));
  $$(".theme").forEach((b) => b.addEventListener("click", () => {
    const next = d.dataset.theme === "dark" ? "light" : "dark";
    d.dataset.theme = next; store("theme", next); syncMeta();
  }));
  matchMedia("(prefers-color-scheme: dark)").addEventListener?.("change", (e) => {
    let saved = null; try { saved = localStorage.getItem("theme"); } catch (_) {}
    if (!saved) { d.dataset.theme = e.matches ? "dark" : "light"; syncMeta(); }
  });

  // ---------- active section (also used by the language switch)
  let current = "top";
  const links = $$("[data-nav]");
  const sections = $$("main > section[id]");
  const markActive = () => {
    const probe = innerHeight * 0.35;
    let id = "top";
    for (const s of sections) if (s.getBoundingClientRect().top <= probe) id = s.id;
    if (id !== current) { current = id; links.forEach((l) => l.classList.toggle("active", l.dataset.nav === id)); }
  };

  // ---------- language: remember choice, keep the section
  $$(".lang a").forEach((a) => a.addEventListener("click", (e) => {
    store("lang", a.dataset.lang);
    e.preventDefault();
    if (a.hasAttribute("aria-current")) return;
    location.href = a.getAttribute("href") + location.search + (current !== "top" ? "#" + current : "");
  }));

  // ---------- mobile: menu + search toggles
  const menuBtn = $(".menu-btn"), searchBtn = $(".search-btn");
  const setMenu = (open) => { side.classList.toggle("open", open); menuBtn?.setAttribute("aria-expanded", String(open)); if (open) setSearch(false); };
  const setSearch = (open) => {
    side.classList.toggle("searching", open); searchBtn?.setAttribute("aria-expanded", String(open));
    if (open) { side.classList.remove("open"); menuBtn?.setAttribute("aria-expanded", "false"); setTimeout(() => $("#q")?.focus(), 30); }
  };
  menuBtn?.addEventListener("click", () => setMenu(!side.classList.contains("open")));
  searchBtn?.addEventListener("click", () => setSearch(!side.classList.contains("searching")));
  $(".nav")?.addEventListener("click", (e) => { if (e.target.closest("a")) setMenu(false); });
  addEventListener("resize", () => { if (innerWidth >= 1100) { setMenu(false); side.classList.remove("searching"); } });

  // ---------- scroll: progress + active nav
  const bar = $(".progress span");
  let ticking = false;
  addEventListener("scroll", () => {
    if (ticking) return; ticking = true;
    requestAnimationFrame(() => {
      const h = d.scrollHeight - innerHeight;
      bar?.style.setProperty("--p", h > 0 ? Math.min(1, scrollY / h) : 0);
      markActive(); ticking = false;
    });
  }, { passive: true });
  markActive();

  // ---------- reveal
  const io = "IntersectionObserver" in window && !reduce
    ? new IntersectionObserver((es) => es.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } }), { rootMargin: "0px 0px -6% 0px", threshold: 0.05 })
    : null;
  $$(".reveal").forEach((el) => (io ? io.observe(el) : el.classList.add("in")));

  // ---------- count-up numbers
  const fmt = (n) => n.toLocaleString(lang === "fr" ? "fr-FR" : "en-US").replace(/ /g, " ");
  const countUp = (el) => {
    const n = +el.dataset.n, pre = el.dataset.pre || "", suf = el.dataset.suf || "";
    const t0 = performance.now(), dur = 1100 + Math.min(n, 1200) * 0.4;
    const tick = (t) => {
      const k = Math.min(1, (t - t0) / dur), e = 1 - Math.pow(1 - k, 3);
      el.textContent = pre + fmt(Math.round(n * e)) + suf;
      if (k < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };
  if ("IntersectionObserver" in window && !reduce) {
    const cio = new IntersectionObserver((es) => es.forEach((en) => { if (en.isIntersecting) { countUp(en.target); cio.unobserve(en.target); } }), { threshold: 0.6 });
    $$(".count").forEach((el) => cio.observe(el));
  }

  // ---------- figures: pause off-screen
  const pause = (svg, p) => { svg.classList.toggle("paused", p); try { p ? svg.pauseAnimations() : svg.unpauseAnimations(); } catch (e) {} };
  const figs = $$("svg.fx, svg.orbit");
  if (reduce) figs.forEach((s) => pause(s, true));
  else if ("IntersectionObserver" in window) {
    const fio = new IntersectionObserver((es) => es.forEach((en) => pause(en.target, !en.isIntersecting)));
    figs.forEach((s) => fio.observe(s));
  }

  // ---------- highlights / how it works toggles
  $$(".toggle[aria-controls]").forEach((btn) => {
    const list = document.getElementById(btn.getAttribute("aria-controls"));
    if (!list) return;
    btn.hidden = false; list.hidden = true;
    btn.addEventListener("click", () => {
      const open = btn.getAttribute("aria-expanded") !== "true";
      btn.setAttribute("aria-expanded", String(open)); list.hidden = !open;
    });
  });

  // ---------- copy email
  $$("[data-copy]").forEach((btn) => btn.addEventListener("click", async () => {
    const label = $("span", btn);
    try { await navigator.clipboard.writeText(btn.dataset.copy); }
    catch (e) { const ta = Object.assign(document.createElement("textarea"), { value: btn.dataset.copy }); document.body.append(ta); ta.select(); document.execCommand("copy"); ta.remove(); }
    btn.classList.add("done"); if (label) label.textContent = btn.dataset.done;
    setTimeout(() => { btn.classList.remove("done"); if (label) label.textContent = btn.dataset.label; }, 1800);
  }));

  // ---------- skill search: fuzzy autocomplete + sticky finder
  const q = $("#q"), list = $("#q-list"), finder = $(".finder");
  if (!q || !list || !finder) return;
  let index = [], msg = {};
  try { index = JSON.parse($("#skill-index").textContent); msg = JSON.parse($("#i18n").textContent); } catch (e) {}
  const norm = (s) => s.toLowerCase().trim();
  const escH = (s) => s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  // score + matched character positions
  const match = (query, name) => {
    const n = name.toLowerCase();
    if (!query) return null;
    let i = n.indexOf(query);
    if (i === 0) return { s: 1000 - n.length, at: [...Array(query.length).keys()] };
    if (i > 0) {
      const wordStart = /[\s./(-]/.test(n[i - 1]);
      return { s: (wordStart ? 800 : 650) - i - n.length, at: [...Array(query.length).keys()].map((k) => k + i) };
    }
    const at = []; let j = 0, gaps = 0, last = -1;
    for (let k = 0; k < n.length && j < query.length; k++) {
      if (n[k] === query[j]) { if (last >= 0) gaps += k - last - 1; at.push(k); last = k; j++; }
    }
    if (j < query.length) return null;
    return { s: 400 - gaps * 8 - n.length, at };
  };
  const mark = (name, at) => { const set = new Set(at); return [...name].map((c, k) => set.has(k) ? `<b>${escH(c)}</b>` : escH(c)).join(""); };

  let results = [], sel = -1;
  const renderList = () => {
    const query = norm(q.value);
    if (!query) { list.hidden = true; q.setAttribute("aria-expanded", "false"); return; }
    results = index.map((it) => ({ it, m: match(query, it.name) })).filter((r) => r.m)
      .sort((a, b) => b.m.s - a.m.s || b.it.n - a.it.n).slice(0, 8);
    sel = results.length ? 0 : -1;
    list.innerHTML = results.length
      ? results.map((r, k) => `<li role="option" id="opt-${k}" aria-selected="${k === sel}" data-k="${k}"><span>${mark(r.it.name, r.m.at)}</span><span class="n">${r.it.n ? r.it.n + " " + ((r.it.n === 1 ? msg.match : msg.matches) || "") : (msg.inSkills || "")}</span></li>`).join("")
      : `<li class="empty" role="option" aria-disabled="true">${msg.none || "No match"}</li>`;
    list.hidden = false; q.setAttribute("aria-expanded", "true");
    q.setAttribute("aria-activedescendant", sel >= 0 ? "opt-0" : "");
  };
  const moveSel = (dir) => {
    if (!results.length) return;
    sel = (sel + dir + results.length) % results.length;
    $$("li", list).forEach((li, k) => li.setAttribute("aria-selected", String(k === sel)));
    q.setAttribute("aria-activedescendant", "opt-" + sel);
    $(`#opt-${sel}`)?.scrollIntoView({ block: "nearest" });
  };

  let hits = [], pos = 0, term = "";
  const clear = () => {
    $$(".hit").forEach((el) => el.classList.remove("hit", "current"));
    $$(".tags li.match").forEach((el) => el.classList.remove("match"));
    hits = []; finder.hidden = true;
  };
  const go = (k) => {
    if (!hits.length) return;
    pos = (k + hits.length) % hits.length;
    hits.forEach((h, i) => h.classList.toggle("current", i === pos));
    const el = hits[pos];
    el.classList.add("in");
    const bar = innerWidth < 1100 ? side.offsetHeight : 0;
    const room = innerHeight - bar;
    const r = el.getBoundingClientRect();
    const top = r.height > room * 0.85 ? r.top - bar - 16 : r.top - bar - (room - r.height) / 2;
    scrollTo({ top: scrollY + top, behavior: reduce ? "auto" : "smooth" });
    $(".finder-pos").textContent = `${pos + 1} / ${hits.length}`;
  };
  const pick = (item) => {
    clear();
    term = item.name;
    const key = norm(item.name);
    const all = $$("[data-skills]");
    const has = (el) => el.dataset.skills.split("|").includes(key);
    hits = all.filter((el) => !el.classList.contains("skill") && has(el));
    if (!hits.length) hits = all.filter((el) => el.classList.contains("skill") && has(el));
    hits.forEach((el) => { el.classList.add("hit"); $$(`.tags li[data-skill="${CSS.escape(key)}"]`, el).forEach((li) => li.classList.add("match")); });
    $(".finder-term").textContent = term;
    finder.hidden = !hits.length;
    list.hidden = true; q.setAttribute("aria-expanded", "false");
    q.value = item.name; q.blur();
    side.classList.remove("searching"); searchBtn?.setAttribute("aria-expanded", "false");
    go(0);
  };

  q.addEventListener("input", renderList);
  q.addEventListener("focus", () => { if (q.value) renderList(); });
  q.addEventListener("keydown", (e) => {
    if (e.key === "ArrowDown") { e.preventDefault(); moveSel(1); }
    else if (e.key === "ArrowUp") { e.preventDefault(); moveSel(-1); }
    else if (e.key === "Enter") { e.preventDefault(); if (results[sel]) pick(results[sel].it); }
    else if (e.key === "Escape") { list.hidden = true; q.blur(); side.classList.remove("searching"); }
  });
  list.addEventListener("mousedown", (e) => { const li = e.target.closest("li[data-k]"); if (li) { e.preventDefault(); pick(results[+li.dataset.k].it); } });
  document.addEventListener("click", (e) => { if (!e.target.closest(".search")) { list.hidden = true; q.setAttribute("aria-expanded", "false"); } });
  $(".finder-next").addEventListener("click", () => go(pos + 1));
  $(".finder-prev").addEventListener("click", () => go(pos - 1));
  $(".finder-clear").addEventListener("click", () => { clear(); q.value = ""; });
  document.addEventListener("keydown", (e) => {
    const typing = /input|textarea/i.test(document.activeElement?.tagName || "");
    if (e.key === "/" && !typing) { e.preventDefault(); if (innerWidth < 1100) setSearch(true); else q.focus(); }
    else if (e.key === "Escape" && !typing) { if (!finder.hidden) { clear(); q.value = ""; } setMenu(false); }
  });
})();
