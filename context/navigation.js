/* ---------- station navigation ---------- */
const stations = document.querySelectorAll('.station');
const titleEl = document.getElementById('panelTitle');
const codeEl  = document.getElementById('stopCode');
let current = 'about';
let busy = false;

function activate(target, code, label) {
  if (busy || target === current) return;
  const oldPanel = document.getElementById('panel-' + current);
  const newPanel = document.getElementById('panel-' + target);

  stations.forEach(s => s.setAttribute('aria-selected', s.dataset.target === target));

  const swap = () => {
    oldPanel.hidden = true;
    newPanel.hidden = false;
    titleEl.textContent = label;
    codeEl.textContent = code;
    current = target;
  };

  if (hasGsap && !reduceMotion) {
    busy = true;
    gsap.timeline({ onComplete: () => { busy = false; } })
      .to(oldPanel, { opacity: 0, y: 8, duration: 0.22, ease: 'power1.in' })
      .add(swap)
      .fromTo([titleEl, codeEl], { opacity: 0, y: -6 }, { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' })
      .fromTo(newPanel, { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.35, ease: 'power2.out' }, '<');
  } else {
    swap();
  }
}

stations.forEach(btn => {
  btn.addEventListener('click', () =>
    activate(btn.dataset.target, btn.dataset.code, btn.textContent.trim())
  );
});

/* arrow-key navigation along the line */
document.querySelector('.linebar').addEventListener('keydown', e => {
  if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
  const list = [...stations];
  const idx = list.findIndex(s => s.getAttribute('aria-selected') === 'true');
  const next = list[(idx + (e.key === 'ArrowRight' ? 1 : -1) + list.length) % list.length];
  next.focus();
  next.click();
});

/* ---------- scroll / swipe between tabs ----------
   Scrolling inside a panel works as usual; once you hit the top or bottom edge
   and keep going, the next/previous tab opens. */
function goStep(dir) {
  const list = [...stations];
  const idx = list.findIndex(s => s.getAttribute('aria-selected') === 'true');
  const next = list[idx + dir];            // no wrap-around at the ends
  if (next) next.click();
}

function atEdge(dir) {
  const panel = document.getElementById('panel-' + current);
  const max = panel.scrollHeight - panel.clientHeight;
  return dir > 0 ? panel.scrollTop >= max - 2 : panel.scrollTop <= 2;
}

const modalIsOpen = () => !document.getElementById('modal').hidden;
let lastStep = 0;

window.addEventListener('wheel', e => {
  if (modalIsOpen() || busy || Math.abs(e.deltaY) < 12) return;
  const dir = e.deltaY > 0 ? 1 : -1;
  if (!atEdge(dir)) return;
  const now = Date.now();
  if (now - lastStep < 900) return;        // one tab per gesture
  lastStep = now;
  goStep(dir);
}, { passive: true });

let touchY = null;
window.addEventListener('touchstart', e => { touchY = e.touches[0].clientY; }, { passive: true });
window.addEventListener('touchend', e => {
  if (touchY === null || modalIsOpen() || busy) return;
  const dy = touchY - e.changedTouches[0].clientY;
  touchY = null;
  if (Math.abs(dy) < 60) return;
  const dir = dy > 0 ? 1 : -1;
  if (atEdge(dir)) goStep(dir);
}, { passive: true });
