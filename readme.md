# color-interpolate [![stable](http://badges.github.io/stability-badges/dist/stable.svg)](http://github.com/badges/stability-badges)

For a given palette, return color by any float index. Useful for interpolating colormaps, color palettes or even gradients.

## Usage

[![npm install color-interpolate](https://nodei.co/npm/color-interpolate.png?mini=true)](https://npmjs.org/package/color-interpolate/)

```js
const interpolate = require('color-interpolate');

let colormap = interpolate(['black', 'gray', 'white']);
let black = colormap(0); // 'rgb(0, 0, 0)'
let white = colormap(1); // 'rgb(255, 255, 255)'
let gray = colormap(.5); // 'rgb(128, 128, 128)'
```

## API

<details><summary>**`const interpolate = require('color-interpolate');`**</summary>

`interpolate` is a color interpolator constructor.

</details>
<details><summary>**`let palette = interpolate(colors);`**</summary>

Create interpolator from a list of colors. Colors can be in any format: css color string, array with rgb channel values, object with `r`, `g`, `b` or `h`, `s`, `l` channel values or even a number, see [color-parse](https://github.com/dfcreative/color-parse) for reference.

Example:

```js
const palettes = require('nice-color-palettes');
const interpolate = require('color-interpolate');

//pick random palette
let palette = interpolate(palettes[32]);

let activeColor = palette(.2); // 'rgb(51, 23 47)'
let background = palette(1); // 'rgb(255, 255, 255)'
let foreground = palette(0); // 'rgb(0, 0, 0)'
```

</details>
<details><summary>**`let color = palette(index, fb?);`**</summary>

Get interpolated color from palette by `index` value within `0..1` range. Pass optional `fn` interpolation function, by default [lerp](https://npmjs.org/package/lerp) is used, but [smoothstep](https://npmjs.org/package/smoothstep) can be used as an alternative.

</details>

## Credits

Thanks to **[@mattdesl](https://github.com/mattdesl/)** for [interpolation](https://github.com/mattdesl/interpolation) functions and **[@mikkoh](https://github.com/mikkoh/)** for API insight in [interpolation-arrays](https://github.com/jam3/interpolation-arrays).

## In the wild

> [settings-panel](https://github.com/dfcreative/settings-panel)<br/>
> [gl-waveform](https://github.com/audio-lab/gl-waveform)<br/>
> [gl-spectrogram](https://github.com/audio-lab/gl-spectrogram)<br/>
> [gl-spectrum](https://github.com/audio-lab/gl-spectrum)<br/>

## Related

> [colormap](https://github.com/bpostlethwaite/colormap) — collection of beautiful colormaps, a good source for palettes.<br/>
> [nice-color-palettes](https://github.com/jam3/nice-color-palettes) — collection of beautiful color palettes from colourlovers.<br/>
> [color-alpha](https://github.com/dfcreative/color-alpha) — change alpha of a color string.
