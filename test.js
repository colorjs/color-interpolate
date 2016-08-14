const assert = require('assert');
const interpolate = require('./');

let bw = interpolate(['black', 'white']);

assert.equal(bw(0), 'rgb(0,0,0)');
assert.equal(bw(1), 'rgb(255,255,255)');
assert.equal(bw(.5), 'rgb(128,128,128)');


let palette = interpolate(['red', 'gray', 'green']);

assert.equal(palette(0), 'rgb(255,0,0)');
assert.equal(palette(1), 'rgb(0,128,0)');
assert.equal(palette(.5), 'rgb(128,128,128)');