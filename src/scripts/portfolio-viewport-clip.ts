// Safari can expose the document above the visible viewport under its chrome.
// Clip that already-offscreen content instead of relying on toolbar tint sampling.
const viewport = document.querySelector<HTMLElement>('.portfolio-viewport');
const needsClip = CSS.supports('-webkit-touch-callout', 'none') ||
  new URLSearchParams(location.search).get('safari-clip-test') === '1';
if (viewport && needsClip && CSS.supports('clip-path', 'inset(1px 0 0)')) {
  let origin = 0;
  let frame = 0;
  const paint = () => {
    frame = 0;
    viewport.style.setProperty('--portfolio-clip-top', `${Math.max(0, window.scrollY - origin)}px`);
  };
  const measure = () => {
    origin = viewport.getBoundingClientRect().top + window.scrollY;
    paint();
  };
  const queue = () => { if (!frame) frame = requestAnimationFrame(paint); };
  measure();
  viewport.dataset.safariClip = '';
  window.addEventListener('scroll', queue, {passive:true});
  window.addEventListener('resize', measure);
  window.addEventListener('pageshow', measure);
  window.visualViewport?.addEventListener('resize', measure);
  // Observe the reserved space, after the header observer has updated it.
  const spacer = document.querySelector('.portfolio-header-spacer');
  if (spacer) new ResizeObserver(measure).observe(spacer);
}
