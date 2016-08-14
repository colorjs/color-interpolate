# color-interpolate [![stable](http://badges.github.io/stability-badges/dist/stable.svg)](http://github.com/badges/stability-badges)

For a given palette, return color by any float index. Useful for colormaps or interpolating color palettes.

## Usage

[![npm install color-interpolate](https://nodei.co/npm/color-interpolate.png?mini=true)](https://npmjs.org/package/color-interpolate/)

```js
const interpolate = require('color-interpolate');

let colormap = interpolate(['black', 'white']);
let black = colormap(0); // 'rgb(0, 0, 0)'
let white = colormap(1); // 'rgb(255, 255, 255)'
let gray = colormap(.5); // 'rgb(128, 128, 128)'
```

## API

<details><summary>**`const interpolate = require('color-interpolate');`**</summary>

`interpolate` is a color interpolator constructor - pass it an array with colors in any format and it will return a function which by any float index will return color, just like a colormap.

</details>
<details><summary>**`let palette = interpolate(colors);`**</summary>

Create interpolator from the palette. Colors is a list of color values in any format: css color string, array with rgb channel values, object with `r`, `g`, `b` or `h`, `s`, `l` channel values or even a number, see [color-parse](https://npmjs.org/color-parse) for the reference.

Example:

```js
const palettes = require('nice-color-palettes');
const interpolate = require('color-interpolate');

let palette = interpolate(palettes[32]);

let activeColor = palette(.2); // 'rgb(51, 23 47)'
let background = palette(1); // 'rgb(255, 255, 255)'
let foreground = palette(0); // 'rgb(0, 0, 0)'
```

</details>
<details><summary>**`let color = palette(index, mix?);`**</summary>

Get interpolated color from palette by `index` value within `0..1` range. Pass optional `mix` function to use custom interpolator, by default [lerp](https://npmjs.org/package/lerp) is used.

</details>

## In the wild

> [settings-panel](https://github.com/dfcreative/settings-panel)<br/>
> [gl-waveform](https://github.com/audio-lab/gl-waveform)<br/>
> [gl-spectrogram](https://github.com/audio-lab/gl-spectrogram)<br/>
> [gl-spectrum](https://github.com/audio-lab/gl-spectrum)<br/>

## Credits

Thanks to [mattdesl](https://github.com/mattdesl/) for [interpolation](https://github.com/mattdesl/interpolation) functions and [mikkoh](https://github.com/mikkoh/) for API insight in [interpolation-arrays](https://github.com/jam3/interpolation-arrays).

## Related

> [colormap](https://github.com/bpostlethwaite/colormap) — collecting of beautiful colormaps for data, a good source for palettes.<br/>
> [nice-color-palettes](https://github.com/jam3/nice-color-palettes) — collection of beautiful color palettes, another good source of palettes.<br/>

