import { DefaultTheme } from 'styled-components';

const colors = {
  black: '#000000',
  white: '#FFFFFF',
  primary: '#E8E8E8',
};

const theme: DefaultTheme = {
  colors,
};

export type Theme = typeof theme;

export default theme;
