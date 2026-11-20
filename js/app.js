(function () {
  'use strict';

  const CFG = window.ADVENT_CONFIG;
  const LAYOUT = window.ADVENT_LAYOUT;
  const BIG = window.ADVENT_BIG;
  const DAYS = window.ADVENT_DAYS;
  const ART = window.ADVENT_ART;
  const TIME = window.ADVENT_TIME;

  const grid = document.getElementById('grid');
  const toast = document.getElementById('toast');
  const live = document.getElementById('live');

  if (!grid) {
    console.error('Адвент-календар: не знайдено елемент #grid.');
    return;
  }

  function currentDate() {
    if (CFG.previewDate == null) return TIME.kyivDate();
    const preview = TIME.parsePreviewDate(CFG.previewDate);
    if (!preview) throw new Error('ADVENT_CONFIG.previewDate має бути датою у форматі YYYY-MM-DD');
    return preview;
  }

  let today = currentDate();
  const storageSuffix = CFG.previewDate == null ? '' : '-preview';
  const storageKey = CFG.storageKey + storageSuffix;
  const legacyStorageKey = 'advent-2026-opened-today' + storageSuffix;

  if (CFG.previewDate != null) {
    const previewIndicator = document.getElementById('preview-indicator');
    if (previewIndicator) {
      previewIndicator.textContent = 'Тестова дата: ' + today.key;
      previewIndicator.hidden = false;
    }
  }

  /* ---------- стан ---------- */
  const openedDays = loadOpened();

  function loadOpened() {
    try {
      const raw = window.localStorage.getItem(storageKey);
      const saved = raw ? JSON.parse(raw) : null;
      const legacyRaw = raw ? null : window.localStorage.getItem(legacyStorageKey);
      const legacy = legacyRaw ? JSON.parse(legacyRaw) : null;
      const value = saved ?? legacy;
      const days = Array.isArray(value) ? value : Number.isInteger(value?.day) ? [value.day] : [];
      const validDays = days.filter(day => Number.isInteger(day) && day >= 1 && day <= DAYS.length);
      if (!raw && validDays.length) window.localStorage.setItem(storageKey, JSON.stringify(validDays));
      return new Set(validDays);
    } catch (e) { return new Set(); }
  }
  function saveOpened() {
    try { window.localStorage.setItem(storageKey, JSON.stringify([...openedDays].sort((a, b) => a - b))); }
    catch (e) { /* ignore */ }
  }

  function isLocked(day) {
    return !TIME.isUnlocked(day, today, CFG.year, CFG.month);
  }

  function refreshDate() {
    const current = currentDate();
    if (current.key === today.key) return;
    today = current;
    Array.prototype.forEach.call(grid.children, sync);
  }

  /* ---------- розмітка ---------- */
  function el(tag, cls, html) {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;   // лише для наших власних SVG-рядків з art.js
    return n;
  }

  function buildFace(d) {
    const face = el('div', 'face');
    if (ART.top[d.top]) face.insertAdjacentHTML('beforeend', ART.top[d.top]);
    if (ART.bottom[d.bottom]) face.insertAdjacentHTML('beforeend', ART.bottom[d.bottom]);
    const num = el('div', 'face-num');
    num.textContent = String(d.day);
    face.appendChild(num);
    return face;
  }

  function buildLeaf(d, side) {
    const leaf = el('div', 'leaf leaf--' + side);
    leaf.setAttribute('aria-hidden', 'true');
    const front = el('div', 'leaf-front');
    front.appendChild(buildFace(d));
    front.appendChild(el('span', 'seam'));
    front.appendChild(el('span', 'knob'));
    leaf.appendChild(front);
    leaf.appendChild(el('div', 'leaf-back'));
    return leaf;
  }

  function buildInside(d) {
    const inside = el('div', 'inside');
    inside.setAttribute('aria-hidden', 'true');
    const content = el('div', 'inside-content');

    const task = d.task || { type: 'text', text: '' };
    if (task.type === 'image') {
      const fig = el('span', 'inside-figure');
      if (task.src) {
        const img = document.createElement('img');
        img.src = task.src;
        img.alt = task.text || '';
        img.loading = 'lazy';
        fig.appendChild(img);
      } else if (task.pic && ART.pics[task.pic]) {
        fig.insertAdjacentHTML('beforeend', ART.pics[task.pic]);
      }
      content.appendChild(fig);
    }
    const text = el('div', 'inside-text');
    text.innerHTML = task.text || ''; // task.text — довірений HTML із локального data.js
    text.querySelectorAll('a[href]').forEach(link => {
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
    });
    content.appendChild(text);

    inside.appendChild(content);
    return inside;
  }

  function buildCell(d) {
    const L = LAYOUT[d.day];
    const big = BIG.indexOf(d.day) !== -1;
    const cell = el('div', 'cell day-' + d.day);
    if (big) cell.classList.add('is-big');
    if (L[1] > 1) cell.classList.add('is-wide');
    if (d.task && d.task.type === 'image') cell.classList.add('is-image');
    cell.style.gridColumn = L[0] + ' / span ' + L[1];
    cell.style.gridRow = L[2] + ' / span ' + L[3];
    cell.dataset.day = d.day;

    const trigger = el('button', 'cell-trigger');
    trigger.type = 'button';
    trigger.addEventListener('click', function () { openDay(d.day, cell); });
    cell.appendChild(buildInside(d));
    cell.appendChild(buildLeaf(d, 'left'));
    cell.appendChild(buildLeaf(d, 'right'));
    cell.appendChild(trigger);
    return cell;
  }

  /* ---------- поведінка ---------- */
  function sync(cell) {
    const day = Number(cell.dataset.day);
    const locked = isLocked(day);
    const open = openedDays.has(day) && !locked;
    const isTodayOpen = open && today.year === CFG.year && today.month === CFG.month && today.day === day;
    cell.classList.toggle('is-open', open);
    cell.classList.toggle('is-today-open', isTodayOpen);
    cell.classList.toggle('is-locked', locked && !open);
    const inside = cell.querySelector('.inside');
    inside.setAttribute('aria-hidden', open ? 'false' : 'true');
    inside.inert = !open;
    const trigger = cell.querySelector('.cell-trigger');
    trigger.hidden = open;
    trigger.setAttribute('aria-label', locked ? day + ' грудня — ще закрито' : 'Відчинити ' + day + ' грудня');
  }

  function openDay(day, cell) {
    refreshDate();
    if (isLocked(day)) {
      cell.classList.remove('is-shaking');
      void cell.offsetWidth;                 // перезапуск анімації
      cell.classList.add('is-shaking');
      showToast('Ще рано — це віконце відкриється ' + day + ' грудня ' + CFG.year + ' о 00:00 за Києвом');
      return;
    }
    if (openedDays.has(day)) return;
    openedDays.add(day);
    saveOpened();
    sync(cell);
    if (live) live.textContent = day + ' грудня: ' + cell.querySelector('.inside-text').textContent;
  }

  let toastTimer;
  function showToast(msg) {
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add('is-visible');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toast.classList.remove('is-visible'); }, 2200);
  }

  /* ---------- старт ---------- */
  DAYS.forEach(function (d) {
    const cell = buildCell(d);
    sync(cell);
    grid.appendChild(cell);
  });
  window.setInterval(refreshDate, 10000);
  document.addEventListener('visibilitychange', refreshDate);
})();
