import sharp from 'sharp';
import opentype from 'opentype.js';
import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));
const fontfile = `${root}public/fonts/proposals/sora.ttf`;
const font = opentype.parse(await readFile(fontfile));
const colors = { ground:'#080b10', ink:'#dce5f3', muted:'#9daac0', green:'#9ece6a', cyan:'#7dcfff' };
const layers = [];
function text(content, size, left, top, color=colors.ink, stroke=0) {
  const bounds=font.getPath(content,0,0,size).getBoundingBox();
  const path=font.getPath(content,left-bounds.x1,top-bounds.y1,size);
  if (path.getBoundingBox().x2>1200 || path.getBoundingBox().y2>630) throw new Error('Social card text overflows');
  layers.push(`<path d="${path.toPathData(2)}" fill="${color}" stroke="${color}" stroke-width="${stroke}"/>`);
  return font.getAdvanceWidth(content,size);
}
text('>_',30,64,38);
text('Luis Gil.',70,64,125,colors.ink,1);
text('Software',56,64,238);
const braceWidth=text('{',56,64,307,colors.cyan);
const developerWidth=text('Developer',56,64+braceWidth,307,colors.green);
text('}',56,64+braceWidth+developerWidth,307,colors.cyan);
text('Engineer',56,64,376);
text('Backend / Web / Native',22,67,469,colors.muted);
text('luisgil.dev',24,64,555);
const portrait = await sharp(`${root}public/images/profile/luis-gil-cutout.webp`).png().toBuffer();
const dots=[];
for(let row=0;row<21;row++) for(let col=0;col<116;col++) {
  const depth=row/20, x=col/115*1260-30;
  const wave=Math.sin(col*.065+depth*3.8+.8)*28+Math.sin(col*.12-depth*2.5)*14;
  const y=505+depth*125+wave*(1-depth*.45);
  const alpha=(.06+depth*.28)*(Math.sin(col/115*Math.PI)*.75+.25);
  dots.push(`<circle cx="${x.toFixed(2)}" cy="${y.toFixed(2)}" r="${(.5+depth*.7).toFixed(2)}" opacity="${alpha.toFixed(3)}"/>`);
}
const svg=`<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630" role="img" aria-label="Luis Gil — Software Developer Engineer">
<defs>
 <linearGradient id="portrait-bottom" x2="0" y2="1"><stop offset="0" stop-color="white"/><stop offset=".58" stop-color="white"/><stop offset="1" stop-color="black"/></linearGradient>
 <linearGradient id="portrait-left"><stop stop-color="black"/><stop offset=".3" stop-color="white"/></linearGradient>
 <linearGradient id="wave-fade" x2="0" y2="1"><stop stop-color="white"/><stop offset="1" stop-color="black"/></linearGradient>
 <mask id="bottom"><rect width="1200" height="740" fill="url(#portrait-bottom)"/></mask>
 <mask id="left"><rect width="740" height="740" fill="url(#portrait-left)"/></mask>
 <mask id="wave"><rect y="440" width="1200" height="190" fill="url(#wave-fade)"/></mask>
</defs>
<rect width="1200" height="630" fill="${colors.ground}"/>
<g transform="translate(580 22)" opacity=".68" mask="url(#bottom)"><g mask="url(#left)"><image width="740" height="740" href="data:image/png;base64,${portrait.toString('base64')}"/></g></g>
<g fill="${colors.cyan}" mask="url(#wave)">${dots.join('')}</g>
${layers.join('\n')}
</svg>`;
await writeFile(`${root}public/images/social/portfolio.svg`,svg);
const png = await sharp(Buffer.from(svg)).png({compressionLevel:9}).toBuffer();
await Promise.all(['portfolio.png','portfolio-2026.png'].map(name=>writeFile(`${root}public/images/social/${name}`,png)));
console.log(`Portfolio social preview: 1200×630, ${Math.round(png.length/1024)} KiB`);
