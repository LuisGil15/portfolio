// Explicit opt-in only: local readings, no telemetry or storage.
if (new URLSearchParams(location.search).get('safari-debug') === '1') {
  const header = document.querySelector<HTMLElement>('.portfolio-topbar');
  if (header) {
    const panel = document.createElement('aside');
    panel.setAttribute('aria-label', 'Diagnóstico Safari');
    panel.style.cssText = 'position:fixed;z-index:110;left:12px;right:12px;bottom:12px;max-width:560px;max-height:44dvh;overflow:auto;padding:14px;background:#121923;color:#dce5f3;border:1px solid #5a6c85;border-radius:12px;font:12px/1.5 ui-monospace,monospace;box-shadow:0 8px 24px #0008';
    const title = document.createElement('strong');
    title.textContent = 'Safari · diagnóstico 2026-11-24-d';
    const output = document.createElement('pre');
    output.style.cssText = 'white-space:pre-wrap;margin:10px 0';
    const close = document.createElement('button');
    close.type = 'button';
    close.textContent = 'Cerrar diagnóstico';
    close.style.cssText = 'min-height:44px;padding:8px 14px;background:#9ece6a;color:#080b10;border:0;border-radius:8px';
    panel.append(title, output, close);
    document.body.append(panel);
    let frame = 0;
    const render = () => {
      frame = 0;
      const rect = header.getBoundingClientRect();
      const style = getComputedStyle(header);
      const vv = window.visualViewport;
      output.textContent = [
        `Extensión: ${style.getPropertyValue('--header-chrome-extension').trim()}`,
        `Header: y=${Math.round(rect.y)}, abajo=${Math.round(rect.bottom)}, alto=${Math.round(rect.height)}`,
        `Fondo: ${style.backgroundColor}; posición: ${style.position}`,
        `Puntero: coarse=${matchMedia('(pointer:coarse)').matches}, fine=${matchMedia('(pointer:fine)').matches}`,
        `Cualquier táctil: ${matchMedia('(any-pointer:coarse)').matches}; puntos táctiles: ${navigator.maxTouchPoints}`,
        `Viewport: ${innerWidth}×${innerHeight}; scroll=${Math.round(scrollY)}`,
        `Visual: y=${vv?.offsetTop ?? 0}, alto=${Math.round(vv?.height ?? innerHeight)}, escala=${vv?.scale ?? 1}`,
        `Recorte: ${document.querySelector('.portfolio-viewport')?.hasAttribute('data-safari-clip') ? document.querySelector<HTMLElement>('.portfolio-viewport')?.dataset.safariClip : 'inactivo'}; ${getComputedStyle(document.querySelector('.portfolio-viewport')!).clipPath}`,
        `Transformación: ${getComputedStyle(document.querySelector('.portfolio-viewport')!).transform}`,
        `Compensación: ${getComputedStyle(document.querySelector('.portfolio-viewport>main')!).transform}`,
        `Espacio reservado: ${Math.round(document.querySelector('.portfolio-header-spacer')?.getBoundingClientRect().height ?? 0)}`,
        navigator.userAgent,
      ].join('\n');
    };
    const update = () => { if (!frame) frame = requestAnimationFrame(render); };
    const observer = new ResizeObserver(update);
    observer.observe(header);
    window.addEventListener('scroll', update, {passive:true});
    window.addEventListener('resize', update);
    window.visualViewport?.addEventListener('resize', update);
    window.visualViewport?.addEventListener('scroll', update);
    close.addEventListener('click', () => {
      panel.remove();
      observer.disconnect();
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
      window.visualViewport?.removeEventListener('resize', update);
      window.visualViewport?.removeEventListener('scroll', update);
    });
    render();
  }
}
