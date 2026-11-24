const root = document.documentElement;
const preference = matchMedia('(prefers-reduced-motion: reduce)');
const activeAnimations = new Set<Animation>();
const observed = new Set<Element>();
const elementAnimations = new WeakMap<Element, Animation>();
function bootPending() { return root.dataset.boot==='loading'; }
function motionAllowed() { return !preference.matches && !bootPending(); }
function syncMotion() {
  root.dataset.motion = motionAllowed() ? 'running' : 'paused';
  if (preference.matches) {
    activeAnimations.forEach(animation => animation.finish());
    document.querySelectorAll<HTMLElement>('[data-reveal-state]').forEach(element => { element.dataset.revealState='visible'; });
  }
}
function animate(element: Element, frames: Keyframe[], duration: number, delay = 0, easing = 'cubic-bezier(.16,1,.3,1)') {
  if (!motionAllowed() || !('animate' in element)) return;
  elementAnimations.get(element)?.cancel();
  const animation = element.animate(frames, { duration, delay, fill:'backwards', easing });
  elementAnimations.set(element, animation);
  activeAnimations.add(animation);
  animation.finished.then(() => activeAnimations.delete(animation), () => activeAnimations.delete(animation));
  return animation;
}
syncMotion();
preference.addEventListener('change', syncMotion);
document.addEventListener('proposal-language', syncMotion);
// Entrance re-arms after the hero leaves view, including visits that start at a deep link.
const hero = document.querySelector<HTMLElement>('.hero-content');
let heroArmed = root.dataset.bootInstant!=='true', heroVisible = false;
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
// Observe fixed layout boxes. Only opacity animates on a group; movement stays
// inside it, so scrolling cannot look like a card or timeline layout correction.
type RevealKind = 'project'|'timeline'|'heading'|'copy'|'form'|'logos';
const revealGroups = new Map<HTMLElement,RevealKind>();
function addGroups(selector:string,kind:RevealKind) {
  document.querySelectorAll<HTMLElement>(selector).forEach(element => revealGroups.set(element,kind));
}
addGroups('.project','project');
addGroups('.timeline-entry,.academic-timeline','timeline');
addGroups('.work-toolbar h2,#stack-title,.experience-intro h2,.academic-section h2,.about h2,.personal-reflection h3,.portfolio-contact h2','heading');
addGroups('.experience-contact,.github-line,.portfolio-contact>a','copy');
addGroups('.contact-form','form');
addGroups('.skills-window','logos');
function revealContent(element:Element,delay=0,distance=18) {
  animate(element,[{opacity:0,transform:`translateY(${distance}px)`},{opacity:1,transform:'translateY(0)'}],560,delay,'cubic-bezier(.22,.8,.25,1)');
}
function finishGroup(element:HTMLElement) {
  elementAnimations.get(element)?.finish();
  element.querySelectorAll('*').forEach(child => elementAnimations.get(child)?.finish());
  element.dataset.revealState='visible';
}
// Split only display headings, keeping spaces and complete accessible text.
// Rebuild from the current translated content after a language switch.
function headingWords(element:HTMLElement) {
  if (!element.querySelector('.motion-word')) {
    const fragment=document.createDocumentFragment();
    for (const token of (element.textContent ?? '').split(/(\s+)/)) {
      if (!token.trim()) { fragment.append(document.createTextNode(token)); continue; }
      const mask=document.createElement('span'); mask.className='motion-word';
      const word=document.createElement('span'); word.textContent=token;
      mask.append(word); fragment.append(mask);
    }
    element.replaceChildren(fragment);
  }
  return element.querySelectorAll('.motion-word>span');
}
function playHeading(element:HTMLElement) {
  if (element.closest('.work-toolbar,.portfolio-contact')) {
    headingWords(element).forEach((word,index)=>animate(word,[
      {opacity:0,transform:'translateY(105%)'},
      {opacity:1,transform:'translateY(0)'},
    ],640,Math.min(index*55,220),'cubic-bezier(.22,.8,.25,1)'));
    return animate(element,[{opacity:1},{opacity:1}],860);
  }
  if (element.closest('.experience-intro,.academic-section')) return animate(element,[
    {clipPath:'inset(0 100% 0 0)'},{clipPath:'inset(0 0% 0 0)'},
  ],700,0,'cubic-bezier(.22,.8,.25,1)');
  if (element.id==='stack-title') return animate(element,[
    {opacity:0,transform:'translateX(24px)'},{opacity:1,transform:'translateX(0)'},
  ],620);
  return animate(element,[{opacity:0},{opacity:1}],380);
}
function playGroup(element:HTMLElement,kind:RevealKind) {
  if (bootPending()) return;
  observed.add(element);
  element.dataset.revealState='visible';
  if (!motionAllowed() || element.contains(document.activeElement)) return;
  element.dataset.revealState='running';
  const fade = kind==='logos'
    ? animate(element,[{opacity:0,clipPath:'inset(0 46% 0 46%)'},{opacity:1,clipPath:'inset(0 0% 0 0%)'}],760,0,'cubic-bezier(.22,.8,.25,1)')
    : kind==='heading'
    ? playHeading(element)
    : animate(element,[{opacity:0},{opacity:1}],kind==='project' ? 640 : 560,0,'cubic-bezier(.22,.8,.25,1)');
  if (kind==='project') {
    [...element.children].filter(child => !child.hasAttribute('hidden')).forEach((child,index) => {
      if (child.matches('.tavi-art,.minitools-art,.task-preview,.project-heading,.own-project-heading')) {
        animate(child,[{opacity:0,clipPath:'inset(0 100% 0 0)'},{opacity:1,clipPath:'inset(0 0% 0 0)'}],700,Math.min(index*70,140));
      } else if (child.matches('h3')) {
        animate(child,[{opacity:0,transform:'translateX(-18px)'},{opacity:1,transform:'translateX(0)'}],560,80);
      } else if (child.matches('.tavi-copy,.minitools-copy')) {
        [...child.children].forEach(part=>{
          if (part.matches('h3')) animate(part,[{opacity:0,transform:'translateX(-18px)'},{opacity:1,transform:'translateX(0)'}],560,80);
          else animate(part,[{opacity:0},{opacity:1}],420,100);
        });
      }
      else animate(child,[{opacity:0},{opacity:1}],420,Math.min(index*40,140));
    });
  } else if (kind==='timeline') {
    const date=element.querySelector('.timeline-period');
    const logo=element.querySelector('.company-logo,.academic-mark');
    const title=element.querySelector('.timeline-heading>div:last-child,.academic-record>div:last-child');
    if (date) animate(date,[{opacity:0},{opacity:1}],420);
    if (logo) animate(logo,[{clipPath:'inset(0 0 100% 0)'},{clipPath:'inset(0 0 0% 0)'}],620);
    if (title) revealContent(title,100,16);
    element.querySelectorAll('article>p,article>details').forEach((child,index) => {
      animate(child,[{opacity:0},{opacity:1}],560,140+Math.min(index*65,130));
    });
  } else if (kind==='form') {
    element.querySelectorAll('.contact-field').forEach((field,index) => revealContent(field,Math.min(index*65,195),16));
  }
  fade?.finished.then(()=>{ if (element.dataset.revealState==='running') element.dataset.revealState='visible'; },()=>{});
}
// The lower viewport band is a preparation zone: the entrance remains visible to the
// visitor rather than completing while only a few pixels are on screen.
const reveal = new IntersectionObserver(entries => {
  for (const entry of entries) {
    const target=entry.target as HTMLElement;
    if (!entry.isIntersecting || observed.has(target) || !target.getBoundingClientRect().height) continue;
    playGroup(target,revealGroups.get(target)!);
  }
}, {threshold:0,rootMargin:`0px 0px -${Math.min(120,Math.max(64,Math.round(innerHeight*.14)))}px 0px`});
// Replay only after clearing a separate outer boundary. Opacity/clip-path do
// not change the observed box, and child transforms cannot retrigger it.
const resetReveal = new IntersectionObserver(entries => {
  for (const entry of entries) {
    const target=entry.target as HTMLElement;
    if (entry.isIntersecting || target.contains(document.activeElement)) continue;
    finishGroup(target);
    observed.delete(target);
    target.dataset.revealState=motionAllowed() || bootPending() ? 'queued' : 'visible';
  }
}, {rootMargin:'280px'});
revealGroups.forEach((_,element) => {
  const bounds=element.getBoundingClientRect();
  if (!bootPending() && bounds.top<innerHeight && bounds.bottom>0) {
    observed.add(element);
    element.dataset.revealState='visible';
  } else element.dataset.revealState=motionAllowed() || bootPending() ? 'queued' : 'visible';
  resetReveal.observe(element);
  reveal.observe(element);
});
// A field or deep-linked section must always be usable immediately on focus.
document.addEventListener('focusin',event => {
  if (!(event.target instanceof Element)) return;
  const group=event.target.closest<HTMLElement>('[data-reveal-state]');
  if (group) { finishGroup(group); observed.add(group); }
});
// Filters are frequent feedback: a brief fade, never a repeating card entrance.
document.addEventListener('portfolio-filter',event => {
  const keyboard=(event as CustomEvent<{keyboard:boolean}>).detail.keyboard;
  document.querySelectorAll<HTMLElement>('.project:not([hidden])').forEach(project => {
    finishGroup(project);
    const bounds=project.getBoundingClientRect();
    if (bounds.top>=innerHeight || bounds.bottom<=0) {
      observed.delete(project);
      project.dataset.revealState=motionAllowed() ? 'queued' : 'visible';
      reveal.unobserve(project); reveal.observe(project);
      return;
    }
    observed.add(project);
    if (!keyboard) animate(project,[{opacity:.45},{opacity:1}],200);
  });
});

// The terminal owns the first entrance; hash navigation still uses normal replay.
document.addEventListener('portfolio-ready',event => {
  syncMotion();
  const instant=(event as CustomEvent<{instant:boolean}>).detail.instant;
  if (instant) heroArmed=false;
  else if (heroArmed && heroVisible) playHeroEntrance();
  revealGroups.forEach((kind,element) => {
    const bounds=element.getBoundingClientRect();
    if (bounds.top>=innerHeight || bounds.bottom<=0 || observed.has(element)) return;
    if (instant) { finishGroup(element); observed.add(element); }
    else playGroup(element,kind);
  });
});
