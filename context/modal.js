const modal = document.getElementById('modal');
const modalBody = document.getElementById('modalBody');
const modalBox = modal.querySelector('.modal-box');
let lastFocus = null;

let currentModal = null;
function renderModal(id) {
  const base = DETAILS[id];
  if (!base) return false;
  const de = lang === 'de' ? DETAILS_DE[id] : null;
  const d = de ? { ...base, ...de } : base;
  const ui = lang === 'de' ? DE : UI_EN;
  modalBody.innerHTML =
    `<h3 id="modalTitle">${d.title}</h3><div class="m-sub">${d.sub}</div><div class="m-when">${d.when}</div>` +
    `<p class="m-intro">${d.intro}</p><h4>${ui.ui_highlights}</h4><ul>${d.points.map(p => `<li>${p}</li>`).join('')}</ul>` +
    (d.tech.length ? `<h4>${ui.ui_tech}</h4><div class="chips">${d.tech.map(t => `<span>${t}</span>`).join('')}</div>` : '');
  return true;
}
function openModal(id) {
  if (!renderModal(id)) return;
  currentModal = id;
  lastFocus = document.activeElement;
  modal.hidden = false;
  document.body.style.overflow = 'hidden';
  modalBox.scrollTop = 0;
  modalBox.focus();
  if (hasGsap && !reduceMotion) {
    gsap.fromTo(modalBox, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.3, ease: 'power2.out' });
  }
}
function closeModal() {
  modal.hidden = true;
  currentModal = null;
  document.body.style.overflow = '';
  if (lastFocus) lastFocus.focus();
}
document.addEventListener('click', e => {
  if (e.target.closest('[data-close]')) return closeModal();
  if (e.target.closest('.modal-box')) return;
  const item = e.target.closest('[data-modal]');
  if (item && !e.target.closest('a')) openModal(item.dataset.modal);
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && !modal.hidden) closeModal();
  if ((e.key === 'Enter' || e.key === ' ') && e.target.matches('[data-modal]')) {
    e.preventDefault();
    openModal(e.target.dataset.modal);
  }
});
