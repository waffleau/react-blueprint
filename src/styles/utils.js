// @flow

import Color from 'color';

export function darken(hex: string, amount: number) {
  return Color(hex)
    .darken(amount)
    .hex();
}

export function desaturate(hex: string, amount: number) {
  return Color(hex)
    .desaturate(amount)
    .hex();
}

export function lighten(hex: string, amount: number) {
  return Color(hex)
    .lighten(amount)
    .hex();
}

export default {
  desaturate,
  darken,
  lighten,
};
