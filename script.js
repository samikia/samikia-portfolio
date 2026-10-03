/* Entry point: loads each part from /context in order.
   Plain scripts share one global scope, so later files can use earlier ones.
   async=false keeps execution in this order (works on file:// too). */
const parts = [
  'motion.js',
  'navigation.js',
  'details-en.js',
  'details-de.js',
  'translations-de.js',
  'modal.js',
  'i18n.js'
];

parts.forEach(name => {
  const s = document.createElement('script');
  s.src = 'context/' + name;
  s.async = false;
  document.body.appendChild(s);
});
