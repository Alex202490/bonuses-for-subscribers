(() => {
  const config = window.SITE_CONFIG || {};
  document.querySelectorAll("[data-link]").forEach((el) => {
    const key = el.dataset.link;
    const href = config.links && config.links[key];
    if (href) el.href = href;
  });
  const promo = document.getElementById("promoCode");
  if (promo && config.promoCode) promo.textContent = config.promoCode;
  const copy = document.getElementById("copyPromo");
  const hint = document.getElementById("copyHint");
  if (copy) copy.addEventListener("click", async () => {
    const code = (config.promoCode || promo?.textContent || "").trim();
    try {
      await navigator.clipboard.writeText(code);
      copy.textContent = "Скопировано ✓";
      if (hint) hint.textContent = "Код скопирован. Теперь перейдите на сайт и используйте его при регистрации.";
      setTimeout(() => copy.textContent = "Скопировать", 1800);
    } catch {
      copy.textContent = code;
    }
  });
  document.querySelectorAll('a[href^="#"]').forEach(a => a.addEventListener("click", e => {
    const target = document.querySelector(a.getAttribute("href"));
    if (target) { e.preventDefault(); target.scrollIntoView({behavior:"smooth"}); }
  }));
})();