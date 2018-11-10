# color-interpolate [![stable](http://badges.github.io/stability-badges/dist/stable.svg)](http://github.com/badges/stability-badges)

For a given palette, return color by any float index. Useful for interpolating colormaps, color palettes or gradients.

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

### `let palette = require('color-interpolate')(colors)`

Create interpolator from a list of `colors`. Colors can be in any format: CSS color string, array with RGB channel values, object with `r`, `g`, `b` or `h`, `s`, `l` channel values or even a number, see [color-parse](https://github.com/dy/color-parse) for reference.

### `let color = palette(index, fn?)`

Get interpolated color from palette by `index` value within `0..1` range. Pass optional `fn` interpolation function, by default [lerp](https://npmjs.org/package/lerp) is used, but [smoothstep](https://npmjs.org/package/smoothstep) can be used as an alternative.

Example:

```js
const palettes = require('nice-color-palettes')
const palette = require('color-interpolate')(palettes[32])

let activeColor = palette(.2) // 'rgb(51, 23 47)'
let background = palette(1) // 'rgb(255, 255, 255)'
let foreground = palette(0) // 'rgb(0, 0, 0)'
```

## Credits

Thanks to **[@mattdesl](https://github.com/mattdesl/)** for [interpolation](https://github.com/mattdesl/interpolation) functions and **[@mikkoh](https://github.com/mikkoh/)** for API insight in [interpolation-arrays](https://github.com/jam3/interpolation-arrays).

## Related

> [colormap](https://github.com/bpostlethwaite/colormap) — collection of beautiful colormaps, a good source for palettes.<br/>
> [nice-color-palettes](https://github.com/jam3/nice-color-palettes) — collection of beautiful color palettes from colourlovers.<br/>
> [color-alpha](https://github.com/dy/color-alpha) — change alpha of a color string.<br/>
> [color-spectrum](https://github.com/dy/color-spectrum) — convert spectrum, like FFT result, to color.<br/>
> [color-space](https://github.com/scijs/color-space) — collection of color space transforms, useful for custom interpolation modes.<br/>

© Dmitry Yv. MIT License
