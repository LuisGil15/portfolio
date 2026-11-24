const root = document.documentElement;
const preference = matchMedia('(prefers-reduced-motion: reduce)');
const toggle = document.querySelector<HTMLButtonElement>('[data-motion-toggle]');
let paused = false;
try { paused = localStorage.getItem('site-motion:portfolio') === 'paused'; } catch {}
const activeAnimations = new Set<Animation>();
const observed = new Set<Element>();
const elementAnimations = new WeakMap<Element, Animation>();
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
  elementAnimations.get(element)?.cancel();
  const animation = element.animate(frames, { duration, delay, fill:'backwards', easing:'cubic-bezier(.16,1,.3,1)' });
  elementAnimations.set(element, animation);
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
// Entrance re-arms after the hero leaves view, including visits that start at a deep link.
const hero = document.querySelector<HTMLElement>('.hero-content');
let heroArmed = true, heroVisible = false;
function playHeroEntrance() {
  if (!hero || !motionAllowed()) return;
  heroArmed = false;
  hero.querySelectorAll('.hero-title-line > span, .hero-title-line > em').forEach((line,index) => {
    animate(line, [
      {opacity:0,transform:'translateY(105%)',filter:'blur(6px)'},
      {opacity:1,transform:'translateY(0)',filter:'blur(0px)'},
    ], 1100, index*140);
  });
  const description = hero.querySelector('.hero-description');
  if (description) animate(description,[{opacity:0,transform:'translateY(22px)'},{opacity:1,transform:'translateY(0)'}],800,420);
  hero.querySelectorAll('.hero-actions a').forEach((action,index) => {
    animate(action,[{opacity:0,transform:'translateY(18px)'},{opacity:1,transform:'translateY(0)'}],700,560+index*90);
  });
}
if (hero) {
  new IntersectionObserver(entries => {
    const entry = entries[0];
    heroVisible = entry.isIntersecting && entry.intersectionRatio >= .35;
    if (!entry.isIntersecting) heroArmed = true;
    if (heroVisible && heroArmed) playHeroEntrance();
  }, {threshold:[0,.35]}).observe(hero);
}
document.querySelectorAll('a[href="#home"]').forEach(link => link.addEventListener('click', () => {
  heroArmed = true;
  if (heroVisible) playHeroEntrance();
}));
const reveal = new IntersectionObserver(entries => {
  for (const entry of entries) {
    if (!entry.isIntersecting) { observed.delete(entry.target); continue; }
    if (observed.has(entry.target)) continue;
    if (!entry.target.getBoundingClientRect().height) continue;
    observed.add(entry.target);
    const timeline = entry.target.classList.contains('timeline-entry');
    const project = entry.target.classList.contains('project');
    animate(entry.target, [
      {opacity:.35,transform:timeline ? 'translateX(24px)' : project ? 'translateY(28px)' : 'translateY(14px)'},
      {opacity:1,transform:'translate(0,0)'},
    ], timeline ? 650 : project ? 750 : 550);
  }
}, { threshold:.08, rootMargin:'0px 0px -25px 0px' });
document.querySelectorAll('.project, .timeline-entry, .work-toolbar h2, #stack-title, .experience-intro, .about h2, .portfolio-contact h2').forEach(element => reveal.observe(element));
