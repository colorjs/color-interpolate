export default function interpolate(
	palette: (string | number)[]
): (index: number, mix?: (a: number, b: number, t: number) => number) => string;
