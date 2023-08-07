/** @type {import('tailwindcss').Config} */

import { fontFamily as _fontFamily } from "tailwindcss/defaultTheme";

export const content = ['./components/**/*.tsx', './pages/**/*.tsx'];
export const theme = {
  extend: {
    fontFamily: {
      dosis: ["Dosis", ..._fontFamily.sans],
      amaticsc: ["Amatic SC", ..._fontFamily.sans],
    },
    colors: {
      'accent-1': '#FAFAFA',
      'accent-2': '#EAEAEA',
      'accent-7': '#333',
      success: '#0070f3',
      cyan: '#79FFE1',
      fiolet: '#8670B3',
      szary: '#e3e3e3',
      tlo: '#282828',
      'purple-mountains-majesty': {
        '50': '#f8f7fb',
        '100': '#f1f0f7',
        '200': '#e4e3f1',
        '300': '#d0cce6',
        '400': '#b6aed7',
        '500': '#9c8dc5',
        '600': '#8670b3',
        '700': '#7660a1',
        '800': '#635087',
        '900': '#52436f',
        '950': '#352b4a',
      },
      'mercury': {
        '50': '#f7f7f7',
        '100': '#ededed',
        '200': '#e3e3e3',
        '300': '#c8c8c8',
        '400': '#adadad',
        '500': '#999999',
        '600': '#888888',
        '700': '#7b7b7b',
        '800': '#676767',
        '900': '#545454',
        '950': '#363636',
      },

    },
    spacing: {
      28: '7rem',
    },
    letterSpacing: {
      tighter: '-.04em',
    },
    lineHeight: {
      tight: 1.2,
    },
    fontSize: {
      '5xl': '2.5rem',
      '6xl': '2.75rem',
      '7xl': '4.5rem',
      '8xl': '6.25rem',
    },
    boxShadow: {
      sm: '0 5px 10px rgba(0, 0, 0, 0.12)',
      md: '0 8px 30px rgba(0, 0, 0, 0.12)',
    },
  },
};
export const plugins = [
  require('@tailwindcss/forms'),
];
