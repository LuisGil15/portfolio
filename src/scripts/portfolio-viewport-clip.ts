// Retain native document scrolling. A pinned overflow clip must follow the
// compositor, not a JS scroll callback, while Safari scrolls asynchronously.
const viewport = document.querySelector<HTMLElement>('.portfolio-viewport');
const boundary = document.querySelector<HTMLElement>('.portfolio-paint-boundary');
const needsClip = CSS.supports('-webkit-touch-callout', 'none') ||
  new URLSearchParams(location.search).get('safari-clip-test') === '1';
if (viewport && boundary && needsClip) {
  const spacer = document.querySelector('.portfolio-header-spacer');
  if (CSS.supports('animation-timeline', 'scroll(root block)') && CSS.supports('animation-range', '0px 1000px')) {
    viewport.dataset.safariClip = 'native';
    boundary.dataset.nativeClip = '';
    const measure = () => {
      // The same pixel span drives both the keyframe distance and attachment range.
      // Use the full document height so the range cannot clamp before page end.
      const distance = Math.max(1, document.documentElement.scrollHeight);
      boundary.style.setProperty('--portfolio-scroll-distance', `${distance}px`);
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(viewport);
    if (spacer) observer.observe(spacer);
    window.addEventListener('resize', measure);
    window.addEventListener('pageshow', measure);
    window.visualViewport?.addEventListener('resize', measure);
  } else if (CSS.supports('clip-path', 'inset(1px 0 0)')) {
    // Older-engine fallback. The header's visible height provides a guard band.
    viewport.dataset.safariClip = 'fallback';
    let frame = 0;
    const paint = () => {
      frame = 0;
      viewport.style.setProperty('--portfolio-clip-top', `${Math.max(0, window.scrollY)}px`);
    };
    const queue = () => { if (!frame) frame = requestAnimationFrame(paint); };
    paint();
    window.addEventListener('scroll', queue, {passive:true});
    window.addEventListener('pageshow', paint);
  }
}
