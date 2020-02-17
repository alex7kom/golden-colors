declare module 'golden-colors' {
  export function getHsvGolden(s: number, v: number): WebColor;

  export function getHsvSimple(s: number, v: number): WebColor;

  export function getNaive(): any;

  export interface WebColor {
    r: number;
    g: number;
    b: number;

    new(r: number, g: number, b: number): WebColor;

    toRgb(): [number, number, number];

    toRgbString(): string;

    toHexString(): string;

    toString(): string;

    toJSON(): string;
  }
}
