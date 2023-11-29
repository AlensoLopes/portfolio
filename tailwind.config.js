/** @type {import('tailwindcss').Config} */
import tailwindui from '@headlessui/tailwindcss';
export const content = [
  './src/**/**/*.{js,jsx,ts,tsx}'
];
export const theme = {
  colors: {
    transparent: '#00000000',
    main: {
      0: '#ffffff',
      100: '#dcdcff',
      200: '#b8b8ff',
      300: '#9595ff',
      400: '#7272ff',
      450: '#6161ff',
      480: '#5656ff',
      500: '#4f4fff',
      600: '#3f3fcc',
      700: '#2f2f99',
      800: '#1f1f66',
      900: '#101033',
      1000: '#000000'
    },
    secondary: {
      450: '#3d3d48',
      480: '#30303c',
      500: '#272734'
    },
    tertiary: '#1f1f29',
    background: {
      100: '#10002b',
      200: '#240046',
      300: '#3c096c',
      400: '#5a189a',
      500: '#7b2cbf',
      600: '#9d4edd',
      700: '#c77dff',
      800: '#e0aaff'
    },
    green: {
      0: '#ffffff',
      100: '#d3f3dd',
      200: '#a6e6bb',
      300: '#7ad999',
      400: '#4dcc77',
      450: '#37c666',
      480: '#29c25c',
      500: '#20BF55',
      600: '#1a9944',
      700: '#147333',
      800: '#0d4d22',
      900: '#072711',
      1000: '#000000'
    },
    red: {
      0: '#ffffff',
      100: '#fbd9da',
      200: '#f8b3b5',
      300: '#f48d90',
      400: '#f1686b',
      450: '#ef5558',
      480: '#ee4a4d',
      500: '#ed4245',
      600: '#be3537',
      700: '#8f2829',
      800: '#5f1b1b',
      900: '#300e0e',
      1000: '#000000'
    },
    orange: {
      0: '#ffffff',
      100: '#fae5d3',
      200: '#f5cba7',
      300: '#f0b17b',
      400: '#eb984f',
      450: '#e98b39',
      500: '#e67e22',
      600: '#b8651b',
      700: '#8a4c14',
      800: '#5c330d',
      900: '#2e1a07',
      1000: '#000000'
    },
    yellow: '#FFC561',
    white: '#fff',
    gray: {
      0: '#ffffff',
      100: '#d6d6d8',
      200: '#adadb0',
      300: '#848489',
      400: '#5b5b62',
      440: '#4b4b53',
      480: '#3a3a43',
      500: '#32323b',
      600: '#28282f',
      700: '#1e1e23',
      800: '#141417',
      900: '#0a0a0c',
      1000: '#000000'
    }
  },
  fontFamily: {
    black: ['Poppins-Black', 'sans-serif'],
    bold: ['Poppins-Bold', 'sans-serif'],
    extraBold: ['Poppins-ExtraBold', 'sans-serif'],
    extraLight: ['Poppins-ExtraLight', 'sans-serif'],
    light: ['Poppins-Light', 'sans-serif'],
    medium: ['Poppins-Medium', 'sans-serif'],
    regular: ['Poppins-Regular', 'sans-serif'],
    semiBold: ['Poppins-SemiBold', 'sans-serif'],
    thin: ['Poppins-Thin', 'sans-serif']
  },
  extend: {
    scale: {
      99: '.99',
      101: '1.01',
      102: '1.02'
    },
    invert: {
      70: '.70'
    },
    animation: {
      blob: 'blob 7s infinite'
    },
    keyframes: {
      blob: {
        '0%': {
          transform: 'scale(1)'
        },
        '33%': {
          transform: 'scale(1.1)'
        },
        '66%': {
          transform: 'scale(0.9)'
        }
      }
    },
    backgroundImage: {
      'test': 'url("/src/assets/pictures/Learning-bro.svg")'
    }
  }
};
export const plugins = [
  tailwindui({ prefix: 'ui' })
];
