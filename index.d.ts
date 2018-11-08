declare module "color-interpolate" {
    function interpolate(palette: string[]): (number) => string

    export = interpolate
}
