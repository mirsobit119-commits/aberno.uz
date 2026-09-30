/* =========================================================
   ABERNO — umumiy skriptlar
   ========================================================= */
(function () {
  "use strict";

  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

  /* ---------- Mobil menyu ---------- */
  const burger = $(".burger");
  const nav = $(".nav");
  if (burger && nav) {
    burger.addEventListener("click", () => {
      const open = nav.classList.toggle("is-open");
      burger.classList.toggle("is-open", open);
      burger.setAttribute("aria-expanded", String(open));
    });
    $$("a", nav).forEach((a) =>
      a.addEventListener("click", () => {
        nav.classList.remove("is-open");
        burger.classList.remove("is-open");
        burger.setAttribute("aria-expanded", "false");
      })
    );
  }

  /* ---------- Faol menyu bandi ---------- */
  const page = location.pathname.split("/").pop() || "index.html";
  $$(".nav a").forEach((a) => {
    if (a.getAttribute("href") === page) a.classList.add("is-active");
  });

  /* ---------- Header soya + yuqoriga tugmasi ---------- */
  const header = $(".header");
  const toTop = $(".to-top");
  const onScroll = () => {
    const y = window.scrollY;
    if (header) header.classList.toggle("is-scrolled", y > 10);
    if (toTop) toTop.classList.toggle("is-visible", y > 600);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
  if (toTop) toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

  /* ---------- Scroll animatsiya ---------- */
  const reveals = $$(".reveal");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.12 }
    );
    reveals.forEach((el) => io.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add("is-visible"));
  }

  /* ---------- Raqamlar animatsiyasi ---------- */
  const counters = $$("[data-count]");
  const animate = (el) => {
    const target = parseFloat(el.dataset.count);
    const duration = 1600;
    const start = performance.now();
    const step = (now) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased).toLocaleString("ru-RU");
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };
  if ("IntersectionObserver" in window) {
    const co = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            animate(e.target);
            co.unobserve(e.target);
          }
        }),
      { threshold: 0.5 }
    );
    counters.forEach((el) => co.observe(el));
  } else {
    counters.forEach((el) => (el.textContent = el.dataset.count));
  }

  /* ---------- Mahsulot filtri ---------- */
  const filters = $$(".filter");
  const products = $$(".product");
  const applyFilter = (cat) => {
    filters.forEach((f) => f.classList.toggle("is-active", f.dataset.filter === cat));
    products.forEach((p) => {
      const show = cat === "all" || p.dataset.cat === cat || (cat === "export" && p.dataset.export === "true");
      p.classList.toggle("is-hidden", !show);
    });
  };
  if (filters.length) {
    filters.forEach((f) => f.addEventListener("click", () => applyFilter(f.dataset.filter)));
    // products.html#food kabi havolalar uchun (sahifa ichida bosilganda ham)
    const fromHash = () => {
      const hash = location.hash.replace("#", "");
      if (hash && filters.some((f) => f.dataset.filter === hash)) applyFilter(hash);
    };
    fromHash();
    window.addEventListener("hashchange", fromHash);
  }

  /* ---------- Viloyatlar (dilerlar) ---------- */
  const regions = $$(".region");
  regions.forEach((r) => {
    r.addEventListener("click", () => r.classList.toggle("is-open"));
    r.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        r.classList.toggle("is-open");
      }
    });
  });
  const regionSearch = $("#regionSearch");
  if (regionSearch) {
    regionSearch.addEventListener("input", () => {
      const q = regionSearch.value.trim().toLowerCase();
      regions.forEach((r) => {
        r.style.display = r.textContent.toLowerCase().includes(q) ? "" : "none";
      });
    });
  }

  /* ---------- Aloqa formasi ---------- */
  const form = $("#contactForm");
  if (form) {
    // URL orqali mavzuni oldindan tanlash: contact.html?topic=dealer
    const topic = new URLSearchParams(location.search).get("topic");
    const topicSelect = $("#topic", form);
    if (topic && topicSelect && $(`option[value="${topic}"]`, topicSelect)) topicSelect.value = topic;

    const phoneRe = /^[+\d][\d\s()-]{8,}$/;
    const validate = (field) => {
      const input = $("input, select, textarea", field);
      if (!input || !input.required) return true;
      let ok = input.value.trim() !== "";
      if (ok && input.type === "tel") ok = phoneRe.test(input.value.trim());
      if (ok && input.type === "email") ok = /^\S+@\S+\.\S+$/.test(input.value.trim());
      field.classList.toggle("has-error", !ok);
      return ok;
    };

    $$(".field", form).forEach((f) => {
      const input = $("input, select, textarea", f);
      if (input) input.addEventListener("blur", () => validate(f));
    });

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const fields = $$(".field", form);
      const valid = fields.map(validate).every(Boolean);
      if (!valid) {
        const firstErr = $(".has-error input, .has-error select, .has-error textarea", form);
        if (firstErr) firstErr.focus();
        return;
      }
      // TODO: backend yoki Telegram bot ulanganda shu yerda so'rov yuboriladi
      const success = $(".form__success", form);
      if (success) {
        success.classList.add("is-visible");
        success.scrollIntoView({ behavior: "smooth", block: "center" });
      }
      form.reset();
    });
  }

  /* ---------- Joriy yil ---------- */
  $$("[data-year]").forEach((el) => (el.textContent = new Date().getFullYear()));
})();
