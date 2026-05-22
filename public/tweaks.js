/* Babiology — vanilla Tweaks panel.
   Toggles palette + typeface; persists via localStorage so it survives
   navigating between pages. Hooks the host iframe toolbar toggle. */
(function () {
  const KEY = "babiology.tweaks.v1";
  const DEFAULTS = {
    palette: "rose",       // rose | mauve | sage | plum-dark
    typeface: "serif-display", // serif-display | sans-display
    density: "comfortable" // comfortable | airy
  };

  const load = () => {
    try { return Object.assign({}, DEFAULTS, JSON.parse(localStorage.getItem(KEY) || "{}")); }
    catch { return { ...DEFAULTS }; }
  };
  const save = (s) => localStorage.setItem(KEY, JSON.stringify(s));

  let state = load();

  const apply = () => {
    document.documentElement.setAttribute("data-palette", state.palette);
    document.documentElement.setAttribute("data-typeface", state.typeface);
    document.documentElement.setAttribute("data-density", state.density);
    document.documentElement.style.setProperty(
      "--content-pad",
      state.density === "airy" ? "96px" : "64px"
    );
  };
  apply();

  const PALETTES = [
    { id: "rose",      label: "Sakura Sky",     swatches: ["#FFFFFF", "#FFB7C5", "#6EC1E4", "#FFAB91"] },
    { id: "mauve",     label: "Electric Lilac", swatches: ["#FFFFFF", "#7C4DFF", "#FF4081", "#00BCD4"] },
    { id: "sage",      label: "Citrus Sky",     swatches: ["#FFFFFF", "#00B0FF", "#FF8A33", "#66BB6A"] },
    { id: "plum-dark", label: "Berry Mint",     swatches: ["#FFFFFF", "#E91E63", "#00E5A0", "#FFC107"] }
  ];

  const html = `
    <div class="tw-panel" hidden>
      <div class="tw-head">
        <div>
          <div class="tw-eyebrow">Tweaks</div>
          <div class="tw-title">在线调整 · 实时预览</div>
        </div>
        <button class="tw-x" aria-label="Close">×</button>
      </div>

      <div class="tw-section">
        <div class="tw-label">配色 Palette</div>
        <div class="tw-grid">
          ${PALETTES.map(p => `
            <button class="tw-swatch" data-palette="${p.id}">
              <div class="tw-swatch-grid">
                ${p.swatches.map(c => `<span style="background:${c}"></span>`).join("")}
              </div>
              <div class="tw-swatch-label">${p.label}</div>
            </button>
          `).join("")}
        </div>
      </div>

      <div class="tw-section">
        <div class="tw-label">显示字体 Display</div>
        <div class="tw-seg">
          <button data-typeface="serif-display"><span>Aa</span><i>Serif</i></button>
          <button data-typeface="sans-display"><span style="font-family: var(--font-text)">Aa</span><i>Sans</i></button>
        </div>
      </div>

      <div class="tw-section">
        <div class="tw-label">密度 Density</div>
        <div class="tw-seg tw-seg-2">
          <button data-density="comfortable">Comfortable</button>
          <button data-density="airy">Airy</button>
        </div>
      </div>

      <div class="tw-foot">配色与字体已同步至所有页面</div>
    </div>
    <button class="tw-fab" hidden aria-label="Tweaks">
      <span class="tw-fab-dot"></span> Tweaks
    </button>
  `;

  const css = `
    .tw-panel, .tw-fab {
      position: fixed; bottom: 24px; right: 24px; z-index: 100;
      font-family: var(--font-text);
    }
    .tw-fab {
      display: inline-flex; align-items: center; gap: 10px;
      background: var(--plum-ink); color: var(--cream);
      border: 0; padding: 12px 18px; border-radius: 999px;
      font-size: 12px; letter-spacing: .14em; text-transform: uppercase;
      box-shadow: 0 12px 32px rgba(74,35,71,0.18);
    }
    .tw-fab-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--rose); }
    .tw-panel {
      width: 340px; background: #FAF5F1; color: #2B1A30;
      border: 1px solid #E2D4D0; border-radius: 6px;
      box-shadow: 0 24px 60px rgba(74,35,71,0.18);
      padding: 22px; overflow: hidden;
    }
    .tw-head { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 22px; }
    .tw-eyebrow { font-family: var(--font-mono); font-size: 10px; letter-spacing: .18em; text-transform: uppercase; color: #9C6F8E; margin-bottom: 6px; }
    .tw-title { font-family: var(--font-display); font-size: 22px; line-height: 1.1; letter-spacing: -0.012em; }
    .tw-x { background: transparent; border: 0; font-size: 26px; color: #6E5A6A; line-height: 1; }
    .tw-section { padding-top: 18px; border-top: 1px solid #ECDFDB; margin-top: 14px; }
    .tw-section:first-of-type { border-top: 0; padding-top: 0; margin-top: 0; }
    .tw-label { font-family: var(--font-mono); font-size: 10px; letter-spacing: .18em; text-transform: uppercase; color: #6E5A6A; margin-bottom: 12px; }
    .tw-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
    .tw-swatch {
      background: #fff; border: 1px solid #E2D4D0; border-radius: 4px;
      padding: 10px; text-align: left; cursor: pointer;
      transition: border-color .2s, transform .2s;
    }
    .tw-swatch:hover { border-color: #9C6F8E; }
    .tw-swatch.is-on { border-color: #4A2347; box-shadow: 0 0 0 2px #4A2347 inset; }
    .tw-swatch-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 2px; margin-bottom: 8px; height: 28px; }
    .tw-swatch-grid span { display: block; border-radius: 2px; }
    .tw-swatch-label { font-size: 11px; letter-spacing: .04em; color: #2B1A30; }

    .tw-seg { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; }
    .tw-seg-2 button { padding: 10px 8px; font-size: 12px; letter-spacing: .04em; }
    .tw-seg button {
      background: #fff; border: 1px solid #E2D4D0; border-radius: 4px;
      padding: 12px 8px; cursor: pointer; color: #2B1A30;
      display: flex; flex-direction: column; align-items: center; gap: 4px;
    }
    .tw-seg button:hover { border-color: #9C6F8E; }
    .tw-seg button.is-on { border-color: #4A2347; box-shadow: 0 0 0 2px #4A2347 inset; }
    .tw-seg button span { font-family: var(--font-display); font-size: 22px; line-height: 1; }
    .tw-seg button i { font-style: normal; font-family: var(--font-mono); font-size: 10px; letter-spacing: .12em; text-transform: uppercase; color: #6E5A6A; }

    .tw-foot { margin-top: 18px; font-family: var(--font-mono); font-size: 10px; letter-spacing: .12em; text-transform: uppercase; color: #9C6F8E; }
  `;

  // mount
  const styleEl = document.createElement("style");
  styleEl.textContent = css;
  document.head.appendChild(styleEl);
  const wrap = document.createElement("div");
  wrap.innerHTML = html;
  document.body.appendChild(wrap);

  const panel = wrap.querySelector(".tw-panel");
  const fab   = wrap.querySelector(".tw-fab");

  const reflect = () => {
    panel.querySelectorAll(".tw-swatch").forEach(b => {
      b.classList.toggle("is-on", b.dataset.palette === state.palette);
    });
    panel.querySelectorAll(".tw-seg button[data-typeface]").forEach(b => {
      b.classList.toggle("is-on", b.dataset.typeface === state.typeface);
    });
    panel.querySelectorAll(".tw-seg button[data-density]").forEach(b => {
      b.classList.toggle("is-on", b.dataset.density === state.density);
    });
  };
  reflect();

  panel.addEventListener("click", (e) => {
    const t = e.target.closest("[data-palette], [data-typeface], [data-density]");
    if (!t) return;
    if (t.dataset.palette)  state.palette  = t.dataset.palette;
    if (t.dataset.typeface) state.typeface = t.dataset.typeface;
    if (t.dataset.density)  state.density  = t.dataset.density;
    save(state); apply(); reflect();
  });

  const close = () => {
    panel.hidden = true;
    fab.hidden = false;
    try { window.parent.postMessage({ type: "__edit_mode_dismissed" }, "*"); } catch {}
  };
  const open = () => { panel.hidden = false; fab.hidden = true; };

  panel.querySelector(".tw-x").addEventListener("click", close);
  fab.addEventListener("click", open);

  // host edit-mode toggle integration
  window.addEventListener("message", (e) => {
    const t = e.data && e.data.type;
    if (t === "__activate_edit_mode") open();
    if (t === "__deactivate_edit_mode") close();
  });

  // default state: hidden panel, hidden fab (host toggle controls it)
  panel.hidden = true;
  fab.hidden = false; // show fab so user knows tweaks exist

  try { window.parent.postMessage({ type: "__edit_mode_available" }, "*"); } catch {}
})();
