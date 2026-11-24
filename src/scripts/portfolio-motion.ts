const root = document.documentElement;
const preference = matchMedia('(prefers-reduced-motion: reduce)');
const activeAnimations = new Set<Animation>();
const observed = new Set<Element>();
const elementAnimations = new WeakMap<Element, Animation>();
function motionAllowed() { return !preference.matches; }
function syncMotion() {
  root.dataset.motion = motionAllowed() ? 'running' : 'paused';
  if (!motionAllowed()) activeAnimations.forEach(animation => animation.finish());
}
function animate(element: Element, frames: Keyframe[], duration: number, delay = 0, easing = 'cubic-bezier(.16,1,.3,1)') {
  if (!motionAllowed() || !('animate' in element)) return;
  elementAnimations.get(element)?.cancel();
  const animation = element.animate(frames, { duration, delay, fill:'backwards', easing });
  elementAnimations.set(element, animation);
  activeAnimations.add(animation);
  animation.finished.then(() => activeAnimations.delete(animation), () => activeAnimations.delete(animation));
}
syncMotion();
preference.addEventListener('change', syncMotion);
document.addEventListener('proposal-language', syncMotion);
// Entrance re-arms after the hero leaves view, including visits that start at a deep link.
const hero = document.querySelector<HTMLElement>('.hero-content');
let heroArmed = true, heroVisible = false;
function playHeroEntrance() {
  if (!hero || !motionAllowed()) return;
  heroArmed = false;
  hero.querySelectorAll('.hero-greeting > span').forEach((part,index) => {
    animate(part,[{opacity:0,transform:'translateY(8px)'},{opacity:1,transform:'translateY(0)'}],450,index*120);
  });
  hero.querySelectorAll('.hero-title-line > span, .hero-title-line > em').forEach((line,index) => {
    animate(line, [
      {opacity:0,transform:'translateY(105%)',filter:'blur(6px)'},
      {opacity:1,transform:'translateY(0)',filter:'blur(0px)'},
    ], 1100, index*140);
  });
  // Each character keeps its layout width while visibility steps forward.
  hero.querySelectorAll('.type-char').forEach((character,index) => {
    animate(character,[{opacity:0},{opacity:1}],1,700+index*85);
  });
  const typed = hero.querySelector<HTMLElement>('.typed-specialty');
  const cursor = typed?.querySelector('.typing-cursor');
  if (typed && cursor) {
    const characters = [...typed.querySelectorAll<HTMLElement>('.type-char')];
    const origin = typed.getBoundingClientRect().left;
    const typingDuration = characters.length*85;
    const total = typingDuration+600;
    const position = (index:number) => index ? characters[index-1].getBoundingClientRect().right-origin : 0;
    const frames:Keyframe[] = [{offset:0,transform:'translateX(0)',opacity:0,easing:'steps(1,end)'}];
    characters.forEach((_,index) => frames.push({
      offset:(index*85+1)/total, transform:`translateX(${position(index+1)}px)`,
      opacity:index%4===3 ? 0 : 1, easing:'steps(1,end)',
    }));
    const end = `translateX(${position(characters.length)}px)`;
    [150,300,450,600].forEach((time,index) => frames.push({offset:(typingDuration+time)/total,transform:end,opacity:index%2 ? 0 : 1,easing:'steps(1,end)'}));
    animate(cursor,frames,total,700,'linear');
  }
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
    if (!entry.isIntersecting) continue;
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
// Re-arm only after clearing an outer zone, so transformed edges cannot
// oscillate between hidden/visible and restart an in-flight entrance.
const resetReveal = new IntersectionObserver(entries => {
  for (const entry of entries) {
    if (!entry.isIntersecting) observed.delete(entry.target);
  }
}, {rootMargin:'200px'});
document.querySelectorAll('.project, .timeline-entry, .work-toolbar h2, #stack-title, .experience-intro, .about h2, .portfolio-contact h2').forEach(element => { resetReveal.observe(element); reveal.observe(element); });
