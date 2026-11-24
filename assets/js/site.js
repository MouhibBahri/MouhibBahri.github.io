(() => {
  const d = document.documentElement;
  const store = (k, v) => { try { localStorage.setItem(k, v); } catch (e) {} };

  // Theme toggle
  const themeBtn = document.querySelector(".theme");
  const metaTheme = () => document.querySelectorAll('meta[name="theme-color"]').forEach((m) => m.setAttribute("content", getComputedStyle(d).getPropertyValue("--bg").trim()));
  themeBtn?.addEventListener("click", () => {
    const next = d.dataset.theme === "dark" ? "light" : "dark";
    d.dataset.theme = next;
    store("theme", next);
    metaTheme();
  });
  matchMedia("(prefers-color-scheme: dark)").addEventListener?.("change", (e) => {
    let saved = null; try { saved = localStorage.getItem("theme"); } catch (_) {}
    if (!saved) { d.dataset.theme = e.matches ? "dark" : "light"; metaTheme(); }
  });

  // Language switch: remember the choice and keep the current section
  document.querySelectorAll(".lang a").forEach((a) => {
    a.addEventListener("click", (e) => {
      store("lang", a.dataset.lang);
      if (a.hasAttribute("aria-current")) { e.preventDefault(); return; }
      const sec = currentSection;
      const params = new URLSearchParams(location.search);
      const qs = params.toString() ? "?" + params.toString() : "";
      e.preventDefault();
      location.href = a.getAttribute("href") + qs + (sec && sec !== "top" ? "#" + sec : "");
    });
  });

  // Mobile menu
  const menuBtn = document.querySelector(".menu-btn");
  const sheet = document.getElementById("sheet");
  const setMenu = (open) => {
    if (!sheet || !menuBtn) return;
    sheet.hidden = !open;
    menuBtn.setAttribute("aria-expanded", String(open));
  };
  menuBtn?.addEventListener("click", () => setMenu(sheet.hidden));
  sheet?.addEventListener("click", (e) => { if (e.target.closest("a")) setMenu(false); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") setMenu(false); });
  addEventListener("resize", () => { if (innerWidth > 980) setMenu(false); });

  // Header border + reading progress
  const top = document.querySelector(".top");
  const bar = document.querySelector(".progress span");
  let ticking = false;
  const onScroll = () => {
    const y = scrollY;
    top?.classList.toggle("scrolled", y > 8);
    const h = d.scrollHeight - innerHeight;
    if (bar) bar.style.setProperty("--p", h > 0 ? Math.min(1, y / h) : 0);
    ticking = false;
  };
  addEventListener("scroll", () => { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }, { passive: true });
  onScroll();

  // Active section in nav + rail
  let currentSection = "top";
  const links = document.querySelectorAll("[data-nav]");
  const sections = [...document.querySelectorAll("main > section[id]")];
  const markActive = () => {
    const probe = innerHeight * 0.35;
    let id = "top";
    for (const s of sections) if (s.getBoundingClientRect().top <= probe) id = s.id;
    if (id !== currentSection) {
      currentSection = id;
      links.forEach((l) => l.classList.toggle("active", l.dataset.nav === id));
    }
  };
  addEventListener("scroll", () => requestAnimationFrame(markActive), { passive: true });
  markActive();

  // Reveal on scroll
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && !reduce) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.06 });
    reveals.forEach((el) => io.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add("in"));
  }

  // Figures: pause SMIL + CSS animation off-screen or with reduced motion
  const figs = document.querySelectorAll("svg.fx");
  const pause = (svg, p) => {
    svg.classList.toggle("paused", p);
    try { p ? svg.pauseAnimations() : svg.unpauseAnimations(); } catch (e) {}
  };
  if (reduce) figs.forEach((s) => pause(s, true));
  else if ("IntersectionObserver" in window) {
    const fio = new IntersectionObserver((entries) => entries.forEach((en) => pause(en.target, !en.isIntersecting)));
    figs.forEach((s) => fio.observe(s));
  }

  // Copy email
  document.querySelectorAll("[data-copy]").forEach((btn) => {
    btn.addEventListener("click", async () => {
      const label = btn.querySelector("span");
      try {
        await navigator.clipboard.writeText(btn.dataset.copy);
      } catch (e) {
        const ta = Object.assign(document.createElement("textarea"), { value: btn.dataset.copy });
        document.body.append(ta); ta.select(); document.execCommand("copy"); ta.remove();
      }
      btn.classList.add("done");
      if (label) label.textContent = btn.dataset.done;
      setTimeout(() => { btn.classList.remove("done"); if (label) label.textContent = btn.dataset.label; }, 1800);
    });
  });
})();

// Role highlights: collapsed by default when JS runs, always visible without it
document.querySelectorAll(".toggle[aria-controls]").forEach((btn) => {
  const list = document.getElementById(btn.getAttribute("aria-controls"));
  if (!list) return;
  btn.hidden = false;
  list.hidden = true;
  btn.addEventListener("click", () => {
    const open = btn.getAttribute("aria-expanded") !== "true";
    btn.setAttribute("aria-expanded", String(open));
    list.hidden = !open;
  });
});
