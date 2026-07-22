/**
 * @module  color-interpolate
 * Pick color from palette by index
 */

import rgba from 'color-rgba';

const lerp = (start, stop, step) => start * (1 - step) + stop * step;

export default function interpolate(palette) {
	palette = palette.map((c) => {
		const values = rgba(c);
		if (!values.length) throw Error(`${c} is not a color`);
		return values;
	});

	return (t, mix) => {
		mix = mix || lerp;
		t = Math.min(Math.max(t, 0), 1);

		const idx = (palette.length - 1) * t,
			lIdx = Math.floor(idx),
			rIdx = Math.ceil(idx);

		t = idx - lIdx;

		const lColor = palette[lIdx], rColor = palette[rIdx];

		const result = lColor.map((v, i) => {
			v = mix(v, rColor[i], t);
			if (i < 3) v = Math.round(v);
			return v;
		});

		if (result[3] === 1) {
			return 'rgb(' + result.slice(0, 3) + ')';
		}
		return 'rgba(' + result + ')';
	};
}
