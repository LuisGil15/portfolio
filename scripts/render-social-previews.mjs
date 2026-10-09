import { execFileSync } from 'node:child_process';
import { mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, extname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const sourceDir = join(projectRoot, 'public/images/social');
const temporaryDir = mkdtempSync(join(tmpdir(), 'portfolio-social-previews-'));
const cards = ['portfolio', 'tavi', 'minitools'];
const mediaTypes = new Map([
  ['.png', 'image/png'],
  ['.jpg', 'image/jpeg'],
  ['.jpeg', 'image/jpeg'],
]);

try {
  for (const card of cards) {
    const sourcePath = join(sourceDir, `${card}.svg`);
    let source = readFileSync(sourcePath, 'utf8');
    source = source.replace(/((?:xlink:)?href)="([^"#]+\.(?:png|jpe?g))"/gi, (_, attribute, reference) => {
      const assetPath = resolve(dirname(sourcePath), reference);
      const mediaType = mediaTypes.get(extname(assetPath).toLowerCase());
      if (!mediaType) throw new Error(`Unsupported preview asset: ${assetPath}`);
      const encoded = readFileSync(assetPath).toString('base64');
      return `${attribute}="data:${mediaType};base64,${encoded}"`;
    });

    const embeddedPath = join(temporaryDir, `${card}.svg`);
    writeFileSync(embeddedPath, source);
    execFileSync('/usr/bin/sips', [
      '-s', 'format', 'png',
      embeddedPath,
      '--out', join(sourceDir, `${card}.png`),
    ], { stdio: 'inherit' });
  }
} finally {
  rmSync(temporaryDir, { recursive: true, force: true });
}
