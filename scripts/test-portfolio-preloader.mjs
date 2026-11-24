import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';

// Test the inline early-exit lifecycle without rendering or external dependencies.
const component=fs.readFileSync(new URL('../src/components/portfolio/PortfolioPreloader.astro',import.meta.url),'utf8');
const source=component.match(/<script is:inline>([\s\S]*?)<\/script>/)[1];
function setup({reduced=false,hash=''}={}) {
  const root={dataset:{}},screen={hidden:true,addEventListener(){}},surface={inert:false};
  const listeners=new Map(),events=[],timers=[];
  const document={documentElement:root,readyState:'loading',getElementById:()=>screen,querySelectorAll:()=>[surface],
    addEventListener:(name,callback)=>listeners.set(name,callback),removeEventListener:name=>listeners.delete(name),dispatchEvent:event=>events.push(event)};
  vm.runInNewContext(source,{document,location:{hash},matchMedia:()=>({matches:reduced,addEventListener(){}}),
    window:{addEventListener(){}},CustomEvent:class { constructor(type,options){this.type=type;this.detail=options.detail;} },
    setTimeout:(callback,duration)=>{const timer={callback,duration,cancelled:false};timers.push(timer);return timer;},
    clearTimeout:timer=>{timer.cancelled=true;}});
  return {root,screen,surface,listeners,events,timers};
}
function released(state) {
  assert.equal(state.root.dataset.boot,'ready');
  assert.equal(state.screen.hidden,true);
  assert.equal(state.surface.inert,false);
  assert.equal(state.events.filter(event=>event.type==='portfolio-ready').length,1);
  assert.equal(state.events[0].detail.instant,true);
}
released(setup({reduced:true}));
released(setup({hash:'#contact-form'}));
const stalled=setup();
assert.equal(stalled.root.dataset.boot,'loading');
assert.equal(stalled.screen.hidden,false);
assert.equal(stalled.timers[0].duration,4000);
stalled.timers[0].callback();
released(stalled);
const keyboard=setup();
let prevented=false;
keyboard.listeners.get('keydown')({key:'Escape',preventDefault(){prevented=true;}});
assert.equal(prevented,true);
released(keyboard);
console.log('Reduced-motion bypass, deep-link bypass, stalled-load failsafe and keyboard skip passed.');
