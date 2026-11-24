import assert from 'node:assert/strict';
import worker from '../src/worker.mjs';

let assetRequests = 0;
const env = { ASSETS: { fetch: async () => { assetRequests++; return new Response('asset'); } } };
for (const path of ['/', '/es/', '/apps/tavi/?source=portfolio&lang=es', '/images/portrait.png']) {
  const response = await worker.fetch(new Request(`https://luisgil.org${path}`), env);
  assert.equal(response.status, 301);
  assert.equal(response.headers.get('location'), `https://luisgil.dev${path}`);
}
assert.equal(assetRequests, 0);
for (const host of ['luisgil.dev', 'portfolio.perezsk815.workers.dev', 'localhost']) {
  const response = await worker.fetch(new Request(`https://${host}/es/`), env);
  assert.equal(response.status, 200);
  assert.equal(await response.text(), 'asset');
}
assert.equal(assetRequests, 3);
console.log('Permanent redirect preserves paths and queries; primary domain serves assets without a loop.');
