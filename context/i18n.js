const i18nEls = [...document.querySelectorAll('[data-i18n]')];
i18nEls.forEach(el => { el.dataset.en = el.innerHTML; });
const langBtn = document.getElementById('langBtn');
let lang = 'en';
try { lang = localStorage.getItem('lang') === 'de' ? 'de' : 'en'; } catch (e) {}

function applyLang(l) {
  lang = l;
  const ui = l === 'de' ? DE : UI_EN;
  i18nEls.forEach(el => {
    const k = el.dataset.i18n;
    el.innerHTML = l === 'de' && DE[k] !== undefined ? DE[k] : el.dataset.en;
  });
  document.documentElement.lang = l;
  document.title = ui.title;
  langBtn.textContent = l === 'de' ? 'EN' : 'DE';
  langBtn.setAttribute('aria-label', ui.btn_label);
  langBtn.title = ui.btn_title;
  modal.querySelector('.modal-close').setAttribute('aria-label', ui.ui_close);
  const sel = document.querySelector('.station[aria-selected="true"]');
  if (sel) titleEl.textContent = sel.textContent.trim();
  if (!modal.hidden && currentModal) renderModal(currentModal);
  try { localStorage.setItem('lang', l); } catch (e) {}
}
langBtn.addEventListener('click', () => applyLang(lang === 'de' ? 'en' : 'de'));
if (lang === 'de') applyLang('de');
