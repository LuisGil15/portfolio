import assert from 'node:assert/strict';
import worker from '../src/worker.mjs';

let assetRequests = 0;
const env = { ASSETS: { fetch: async () => { assetRequests++; return new Response('asset'); } } };
for (const path of ['/', '/es/', '/apps/minitools/?source=portfolio&lang=es', '/images/portrait.png']) {
  const response = await worker.fetch(new Request(`https://luisgil.org${path}`), env);
  assert.equal(response.status, 301);
  assert.equal(response.headers.get('location'), `https://luisgil.dev${path}`);
}
assert.equal(assetRequests, 0);
for (const host of ['luisgil.dev', 'luisgil.org']) {
  for (const suffix of ['', '/', '/privacy/', '/terms/', '/support/?lang=es&source=portfolio', '/changelog/']) {
    const response = await worker.fetch(new Request(`https://${host}/apps/tavi${suffix}`), env);
    assert.equal(response.status, 301);
    assert.equal(response.headers.get('location'), `https://tavi.com.mx${suffix || '/'}`);
  }
}
assert.equal(assetRequests, 0);
for (const host of ['luisgil.dev', 'portfolio.perezsk815.workers.dev', 'localhost']) {
  const response = await worker.fetch(new Request(`https://${host}/es/`), env);
  assert.equal(response.status, 200);
  assert.equal(await response.text(), 'asset');
}
assert.equal(assetRequests, 3);
const unrelated = await worker.fetch(new Request('https://luisgil.dev/apps/tavish/'), env);
assert.equal(unrelated.status, 200);
console.log('Permanent redirect preserves paths and queries; primary domain serves assets without a loop.');
