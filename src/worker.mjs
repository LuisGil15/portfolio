export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === '/apps/tavi' || url.pathname.startsWith('/apps/tavi/')) {
      url.protocol = 'https:';
      url.hostname = 'tavi.com.mx';
      url.port = '';
      url.pathname = url.pathname.slice('/apps/tavi'.length) || '/';
      return Response.redirect(url.href, 301);
    }
    if (url.hostname === 'luisgil.org') {
      url.protocol = 'https:';
      url.hostname = 'luisgil.dev';
      url.port = '';
      return Response.redirect(url.href, 301);
    }
    return env.ASSETS.fetch(request);
  },
};
