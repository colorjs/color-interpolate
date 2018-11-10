'use strict'

/**
 * @module  color-interpolate
 * Pick color from palette by index
 */

const parse = require('color-parse');
const hsl = require('color-space/hsl');
const lerp = require('lerp');
const clamp = require('clamp');

module.exports = interpolate;

function interpolate (palette) {
	palette = palette.map(function(c) {
		c = parse(c);
		if (c.space != 'rgb') {
			if (c.space != 'hsl') throw 'c.space' + 'space is not supported.';
			c.values = hsl.rgb(c.values);
		}
		c.values.push(c.alpha);
		return c.values;
	});

	return function(t, mix) {
		mix = mix || lerp;
		t = clamp(t, 0, 1);

		var idx = ( palette.length - 1 ) * t,
			lIdx = Math.floor( idx ),
			rIdx = Math.ceil( idx );

		t = idx - lIdx;

		var lColor = palette[lIdx], rColor = palette[rIdx];

		var result = lColor.map(function(v, i) {
			v = mix(v, rColor[i], t);
			if (i < 3) v = Math.round(v);
			return v;
		});

		if (result[3] === 1) {
			return 'rgb('+result.slice(0,3)+')';
		}
		return 'rgba('+result+')';
	};
}
