/* =====================================================================
   Maricota Decór — JavaScript (sem dependências)
   ===================================================================== */

/* ---------------------------------------------------------------------
   ⚙️  CONFIGURAÇÃO — edite APENAS esta parte para atualizar seus contatos
   --------------------------------------------------------------------- */
const CONFIG = {
  // Número do WhatsApp com código do país e DDD, só números.
  // ⚠️ TROQUE pelo número REAL da Maricota (ex.: "5511987654321").
  whatsapp: "5511999999999",

  // Mensagem que já vem escrita quando o cliente abre o WhatsApp.
  // {produto} é substituído pelo produto de interesse.
  mensagemPadrao: "Olá! Vim pelo site da Maricota Decór e gostaria de um orçamento de {produto}. 🦋",

  email: "mh@maricotadecor.com.br",
};

/* --------------------------------------------------------------------- */

(function () {
  "use strict";

  const $  = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

  /* ---------- Link do WhatsApp ---------- */
  function whatsappURL(produto) {
    const texto = CONFIG.mensagemPadrao.replace("{produto}", produto || "seus produtos");
    return `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(texto)}`;
  }

  // Aplica o href correto em todos os elementos [data-wa]
  $$("[data-wa]").forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      const produto = el.getAttribute("data-produto") || "";
      window.open(whatsappURL(produto), "_blank", "noopener");
    });
  });

  if (CONFIG.whatsapp === "5511999999999") {
    console.warn("[Maricota] Configure o número real do WhatsApp em assets/js/main.js (CONFIG.whatsapp).");
  }

  /* ---------- Menu mobile ---------- */
  const toggle = $("[data-nav-toggle]");
  const menu = $("[data-nav-menu]");

  function closeMenu() {
    if (!menu) return;
    menu.classList.remove("is-open");
    document.body.classList.remove("nav-open");
    toggle.setAttribute("aria-expanded", "false");
  }
  function openMenu() {
    menu.classList.add("is-open");
    document.body.classList.add("nav-open");
    toggle.setAttribute("aria-expanded", "true");
  }
  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      const open = toggle.getAttribute("aria-expanded") === "true";
      open ? closeMenu() : openMenu();
    });
    // Fecha ao clicar num link do menu
    $$("a", menu).forEach((a) => a.addEventListener("click", closeMenu));
    // Fecha no clique fora (overlay) e no Esc
    document.addEventListener("click", (e) => {
      if (document.body.classList.contains("nav-open") &&
          !menu.contains(e.target) && !toggle.contains(e.target)) {
        closeMenu();
      }
    });
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeMenu(); });
  }

  /* ---------- Header encolhe ao rolar ---------- */
  const header = $("[data-header]");
  if (header) {
    const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ---------- Animação de entrada (reveal) ---------- */
  const revealEls = $$(".reveal");
  if ("IntersectionObserver" in window && revealEls.length) {
    const io = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          // pequeno atraso escalonado entre irmãos
          const delay = Math.min(i * 60, 240);
          setTimeout(() => entry.target.classList.add("is-visible"), delay);
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("is-visible"));
  }

  /* ---------- Ano no rodapé ---------- */
  const yearEl = $("[data-year]");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Formulário → WhatsApp ---------- */
  const form = $("[data-form]");
  if (form) {
    const hint = $("[data-form-hint]");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const nome = form.nome.value.trim();
      const interesse = form.interesse.value;
      const mensagem = form.mensagem.value.trim();

      if (!nome) {
        showHint("Por favor, escreva o seu nome. 🙂", "is-error");
        form.nome.focus();
        return;
      }
      let texto = `Olá! Meu nome é ${nome}. Vim pelo site da Maricota Decór`;
      texto += interesse ? ` e tenho interesse em ${interesse}.` : ".";
      if (mensagem) texto += ` ${mensagem}`;

      const url = `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(texto)}`;
      window.open(url, "_blank", "noopener");
      showHint("Tudo certo! Abrimos o WhatsApp com a sua mensagem. ✅", "is-ok");
      form.reset();
    });

    function showHint(msg, cls) {
      if (!hint) return;
      hint.textContent = msg;
      hint.className = "form-hint " + cls;
      hint.hidden = false;
    }
  }

  /* ---------- Lightbox da galeria ---------- */
  const lightbox = $("[data-lightbox]");
  if (lightbox) {
    const items = $$("[data-gallery] .gallery-item");
    const imgEl = $("[data-lightbox-img]", lightbox);
    let index = 0;
    let lastFocused = null;

    const sources = items.map((it) => ({
      src: it.getAttribute("data-full"),
      alt: ($("img", it) || {}).alt || "Imagem ampliada",
    }));

    function render() {
      imgEl.src = sources[index].src;
      imgEl.alt = sources[index].alt;
    }
    function open(i) {
      index = i;
      lastFocused = document.activeElement;
      render();
      lightbox.hidden = false;
      lightbox.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
      $("[data-lightbox-close]", lightbox).focus();
    }
    function close() {
      lightbox.hidden = true;
      lightbox.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
      if (lastFocused) lastFocused.focus();
    }
    function move(step) {
      index = (index + step + sources.length) % sources.length;
      render();
    }

    items.forEach((it, i) => it.addEventListener("click", () => open(i)));
    $$("[data-lightbox-close]", lightbox).forEach((b) => b.addEventListener("click", close));
    $("[data-lightbox-prev]", lightbox).addEventListener("click", () => move(-1));
    $("[data-lightbox-next]", lightbox).addEventListener("click", () => move(1));

    document.addEventListener("keydown", (e) => {
      if (lightbox.hidden) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") move(-1);
      if (e.key === "ArrowRight") move(1);
    });
  }
})();
