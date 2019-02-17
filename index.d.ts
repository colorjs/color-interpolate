declare module "color-interpolate" {
    function interpolate(palette: string[]): (index: number) => string

    export = interpolate
}
