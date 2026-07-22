
import assert from 'assert';
import interpolate from './index.js';

let bw = interpolate(['black', 'white']);

assert.equal(bw(0), 'rgb(0,0,0)');
assert.equal(bw(1), 'rgb(255,255,255)');
assert.equal(bw(.5), 'rgb(128,128,128)');
assert.equal(bw(.25), 'rgb(64,64,64)');


let palette = interpolate(['red', 'gray', 'green']);

assert.equal(palette(0), 'rgb(255,0,0)');
assert.equal(palette(1), 'rgb(0,128,0)');
assert.equal(palette(.5), 'rgb(128,128,128)');

// any css color 4 string interpolates now (reference: colorjs.io red)
let modern = interpolate(['oklch(0.62796 0.25768 29.234)', 'color(display-p3 0 0 1)']);
assert.equal(modern(0), 'rgb(255,0,0)');

// hsl palettes convert through color-rgba, not a broken array call
let sky = interpolate(['hsl(200, 100%, 50%)', 'white']);
assert.equal(sky(0), 'rgb(0,170,255)');

assert.throws(() => interpolate(['definitely-not-a-color']));
