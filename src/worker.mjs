export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.hostname === 'luisgil.org') {
      url.protocol = 'https:';
      url.hostname = 'luisgil.dev';
      url.port = '';
      return Response.redirect(url.href, 301);
    }
    return env.ASSETS.fetch(request);
  },
};
