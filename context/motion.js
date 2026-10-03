const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const hasGsap = typeof gsap !== 'undefined';

/* ---------- background trains ---------- */
if (hasGsap && !reduceMotion) {
  gsap.registerPlugin(MotionPathPlugin);
  document.querySelectorAll('.train').forEach((t, i) => {
    gsap.to(t, {
      motionPath: { path: t.dataset.route, align: t.dataset.route, alignOrigin: [0.5, 0.5] },
      duration: parseFloat(t.dataset.dur),
      repeat: -1,
      ease: 'none',
      delay: i * -6
    });
  });
  // draw the routes on load
  document.querySelectorAll('.route').forEach((p, i) => {
    const len = p.getTotalLength();
    gsap.fromTo(p,
      { strokeDasharray: len, strokeDashoffset: len },
      { strokeDashoffset: 0, duration: 2.2, delay: 0.15 * i, ease: 'power2.out' }
    );
  });
  // card entrance
  gsap.from('.card', { y: 26, opacity: 0, duration: 0.9, ease: 'power3.out', delay: 0.3 });
  gsap.from('.station', { y: 14, opacity: 0, duration: 0.5, stagger: 0.07, ease: 'power2.out', delay: 0.7 });
} else if (reduceMotion) {
  document.querySelectorAll('.train').forEach(t => t.remove());
}
