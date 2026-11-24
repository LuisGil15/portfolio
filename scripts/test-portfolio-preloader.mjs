import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';

// Test the inline lifecycle without rendering or external dependencies.
const component=fs.readFileSync(new URL('../src/components/portfolio/PortfolioPreloader.astro',import.meta.url),'utf8');
const source=component.match(/<script is:inline>([\s\S]*?)<\/script>/)[1];
function setup({reduced=false,hash=''}={}) {
  const screenListeners=new Map(),mediaListeners=new Map(),animations=[];
  const root={dataset:{}},surface={inert:false};
  const screen={hidden:true,addEventListener:(name,callback)=>screenListeners.set(name,callback),animate(frames,options){
    let resolve,reject;
    const animation={frames,options,finished:new Promise((yes,no)=>{resolve=yes;reject=no;}),finish:()=>resolve(),cancel:()=>reject(new Error('Cancelled'))};
    animations.push(animation);return animation;
  }};
  const listeners=new Map(),events=[],timers=[];
  const preference={matches:reduced,addEventListener:(name,callback)=>mediaListeners.set(name,callback)};
  const document={documentElement:root,readyState:'loading',getElementById:()=>screen,querySelectorAll:()=>[surface],
    addEventListener:(name,callback)=>listeners.set(name,callback),removeEventListener:name=>listeners.delete(name),dispatchEvent:event=>events.push(event)};
  vm.runInNewContext(source,{document,location:{hash},matchMedia:()=>preference,
    window:{addEventListener(){}},CustomEvent:class { constructor(type,options){this.type=type;this.detail=options.detail;} },
    setTimeout:(callback,duration)=>{const timer={callback,duration,cancelled:false};timers.push(timer);return timer;},
    clearTimeout:timer=>{if(timer)timer.cancelled=true;}});
  return {root,screen,surface,listeners,screenListeners,mediaListeners,preference,animations,events,timers};
}
function released(state,instant=true) {
  assert.equal(state.root.dataset.boot,'ready');
  assert.equal(state.screen.hidden,true);
  assert.equal(state.surface.inert,false);
  assert.equal(state.events.filter(event=>event.type==='portfolio-ready').length,1);
  assert.equal(state.events[0].detail.instant,instant);
  assert.equal(state.root.dataset.bootInstant,String(instant));
}
released(setup({reduced:true}));
released(setup({hash:'#contact-form'}));
const stalled=setup();
assert.equal(stalled.root.dataset.boot,'loading');
assert.equal(stalled.timers[0].duration,4000);
stalled.timers[0].callback();
released(stalled);
for (const key of ['Escape','Tab']) {
  const keyboard=setup();
  let prevented=false;
  keyboard.listeners.get('keydown')({key,preventDefault(){prevented=true;}});
  assert.equal(prevented,key!=='Tab');
  released(keyboard,false);
}
const pointer=setup();
pointer.screenListeners.get('click')();
pointer.screenListeners.get('click')();
assert.equal(pointer.animations.length,1,'Repeated skip must not restart the fade');
assert.equal(pointer.animations[0].options.duration,700);
assert.equal(pointer.events.length,0,'Hero must wait for the fade to begin');
const handoff=pointer.timers.find(timer=>timer.duration===120);
assert.ok(handoff);
handoff.callback();
assert.equal(pointer.root.dataset.boot,'revealing');
assert.equal(pointer.events[0].detail.instant,false,'Manual skip must start site animations');
pointer.animations[0].finish();
await Promise.resolve();
released(pointer,false);
const interrupted=setup();
interrupted.screenListeners.get('click')();
interrupted.listeners.get('keydown')({key:'Escape',preventDefault(){}});
assert.equal(interrupted.timers.find(timer=>timer.duration===120).cancelled,true);
released(interrupted,false);
const preferenceChange=setup();
preferenceChange.screenListeners.get('click')();
preferenceChange.preference.matches=true;
preferenceChange.mediaListeners.get('change')();
released(preferenceChange,true);
console.log('Skip handoff, repeated/interrupted fade, reduced motion, deep links and failsafe passed.');
