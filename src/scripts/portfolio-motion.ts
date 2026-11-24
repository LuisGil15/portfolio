const root = document.documentElement;
const preference = matchMedia('(prefers-reduced-motion: reduce)');
const toggle = document.querySelector<HTMLButtonElement>('[data-motion-toggle]');
let paused = false;
try { paused = localStorage.getItem('site-motion:portfolio') === 'paused'; } catch {}
const activeAnimations = new Set<Animation>();
const observed = new Set<Element>();
function motionAllowed() { return !paused && !preference.matches; }
function syncMotion() {
  root.dataset.motion = motionAllowed() ? 'running' : 'paused';
  toggle?.setAttribute('aria-pressed', String(paused || preference.matches));
  if (toggle) {
    toggle.disabled = preference.matches;
    const spanish = root.lang === 'es';
    const label = preference.matches
      ? (spanish ? 'Movimiento reducido activado' : 'Reduced motion is enabled')
      : paused ? (spanish ? 'Reanudar animaciones' : 'Resume animations') : (spanish ? 'Pausar animaciones' : 'Pause animations');
    toggle.setAttribute('aria-label', label); toggle.title = label;
  }
  if (!motionAllowed()) activeAnimations.forEach(animation => animation.finish());
}
function animate(element: Element, frames: Keyframe[], duration: number, delay = 0) {
  if (!motionAllowed() || !('animate' in element)) return;
  const animation = element.animate(frames, { duration, delay, easing:'cubic-bezier(.16,1,.3,1)' });
  activeAnimations.add(animation);
  animation.finished.then(() => activeAnimations.delete(animation), () => activeAnimations.delete(animation));
}
syncMotion();
toggle?.addEventListener('click', () => {
  paused = !paused;
  try { localStorage.setItem('site-motion:portfolio', paused ? 'paused' : 'running'); } catch {}
  syncMotion();
});
preference.addEventListener('change', syncMotion);
document.addEventListener('proposal-language', syncMotion);
// No hidden default: if JavaScript or observers fail, every piece of content stays visible.
if (!location.hash || location.hash === '#home') {
  document.querySelectorAll('.portfolio-hero h1 > span, .portfolio-hero h1 > em').forEach((line,index) => {
    animate(line, [{opacity:.35,transform:'translateY(22px)',filter:'blur(4px)'},{opacity:1,transform:'translateY(0)',filter:'blur(0px)'}], 800, index*90);
  });
  const profile = document.querySelector('.identity-art');
  if (profile) animate(profile,[{opacity:.55,transform:'translateY(12px)'},{opacity:1,transform:'translateY(0)'}],700);
}
const reveal = new IntersectionObserver(entries => {
  for (const entry of entries) {
    if (!entry.isIntersecting || observed.has(entry.target)) continue;
    if (!entry.target.getBoundingClientRect().height) continue;
    observed.add(entry.target); reveal.unobserve(entry.target);
    const timeline = entry.target.classList.contains('timeline-entry');
    const project = entry.target.classList.contains('project');
    animate(entry.target, [
      {opacity:.35,transform:timeline ? 'translateX(24px)' : project ? 'translateY(28px)' : 'translateY(14px)'},
      {opacity:1,transform:'translate(0,0)'},
    ], timeline ? 650 : project ? 750 : 550);
  }
}, { threshold:.08, rootMargin:'0px 0px -25px 0px' });
document.querySelectorAll('.project, .timeline-entry, .work-toolbar h2, #stack-title, .experience-intro, .about h2, .portfolio-contact h2').forEach(element => reveal.observe(element));
