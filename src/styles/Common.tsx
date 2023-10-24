
type FontPropsType = {
    family?: string,
    weight?: number,
    lineHeight?: number,
    Fmin?: number,
    Fmax?: number,
}
export const fontStyle = ({family, weight, lineHeight, Fmax, Fmin}: FontPropsType) => `
font-family: ${family || "Roboto"};
font-weight: ${weight || 400};
line-height: ${lineHeight || 1.2};
font-size: calc( (100vw - 360px)/(1440 - 360) * (${Fmax} - ${Fmin}) + ${Fmin}px );
`