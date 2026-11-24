// Keep native details/summary semantics and a working no-script fallback.
// Only the disclosed region changes height; no fixed max-height or timers.
const reduced = matchMedia('(prefers-reduced-motion: reduce)');
const settleAll = new Set<() => void>();
if ('animate' in HTMLElement.prototype) {
  document.querySelectorAll<HTMLDetailsElement>('.portfolio .project details,.portfolio .job-responsibilities,.portfolio .portfolio-faq details').forEach(details => {
    const summary = details.querySelector<HTMLElement>(':scope > summary');
    if (!summary) return;
    const content = document.createElement('div');
    content.className = 'disclosure-content';
    while (summary.nextSibling) content.append(summary.nextSibling);
    details.append(content);
    details.classList.add('motion-disclosure');
    let expanded = details.open;
    let animation: Animation | undefined;
    details.dataset.expanded = String(expanded);
    function settle() {
      const previous = animation;
      animation = undefined;
      details.open = expanded;
      previous?.cancel();
      content.style.removeProperty('overflow');
      details.dataset.expanded = String(expanded);
    }
    settleAll.add(settle);
    summary.addEventListener('click', event => {
      event.preventDefault();
      // Closed native content may still report its intrinsic height.
      const fromHeight = details.open ? content.getBoundingClientRect().height : 0;
      const fromOpacity = details.open ? getComputedStyle(content).opacity : '0';
      expanded = !expanded;
      details.dataset.expanded = String(expanded);
      details.toggleAttribute('data-instant', event.detail === 0 || reduced.matches);
      if (event.detail === 0 || reduced.matches) { settle(); return; }
      animation?.cancel();
      // Keep content rendered until collapse completes, allowing reversals.
      details.open = true;
      const toHeight = expanded ? content.getBoundingClientRect().height : 0;
      content.style.overflow = 'hidden';
      const current = content.animate([
        { height:`${fromHeight}px`, opacity:fromOpacity },
        { height:`${toHeight}px`, opacity:expanded ? 1 : 0 },
      ], { duration:expanded ? 320 : 220, easing:'cubic-bezier(.22,.8,.25,1)', fill:'both' });
      animation = current;
      current.finished.then(() => { if (animation === current) settle(); }, () => {});
    });
    // Native find-in-page and other external toggles remain reflected in the marker.
    details.addEventListener('toggle', () => {
      if (!animation) {
        expanded = details.open;
        details.dataset.expanded = String(expanded);
      }
    });
  });
}
// Responsive changes and translations must never leave a stale measured height.
window.addEventListener('resize', () => settleAll.forEach(settle => settle()));
document.addEventListener('proposal-language', () => settleAll.forEach(settle => settle()));
reduced.addEventListener('change', () => { if (reduced.matches) settleAll.forEach(settle => settle()); });
