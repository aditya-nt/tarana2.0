import { createTheme } from '@mui/material/styles';

export const LAYOUT_CONSTANTS = {
  TOP_SPACE: '68px',
  SIDEBAR_WIDTH: '198px',
  INPUT_HEIGHT: '48px',
  SM_DIALOG: '587px',
  MD_DIALOG: '686px',
  LG_DIALOG: '777px',
  XL_DIALOG: '1172px',
  TRANSITION: 'all 0.3s ease-in-out',
  BORDER_TRANSITION: 'border 0.2s ease-in-out',
  PRIMARY_FONT: 'Inter, sans-serif',
};

export const fontSizes = ['1rem', '1.5rem'];
export const spacings = [0, 4, 8, 12, 16, 24, 32, 40, 48, 56, 64, 74];

const GAANA_PRIMARY = '#233243';
const GAANA_SECONDARY = '#65BFBA';
const GAANA_PLACEHOLDER = '#000';

export const colors = {
  primary: GAANA_PRIMARY,
  secondary: GAANA_SECONDARY,
  placeholder: GAANA_PLACEHOLDER,
  border: '#D0D5DD',
  white: '#fff',
  black: '#000',
};

export const borderRadius = {
  xSmall: '3px',
  small: '4px',
  medium: '5px',
  large: '6px',
  xlarge: '12px',
  circle: '50%',
};

export const mediaSizes = {
  phone: 600,
  tablet: 900,
  desktop: 1200,
  large: 1800,
};

export const styledTheme = {
  colors,
  fontSize: fontSizes,
  space: spacings,
  breakpoints: [600, 900, 1200, 1800],
  borderRadius: [borderRadius.xSmall, borderRadius.small, borderRadius.medium, borderRadius.large],
  shadows: [
    `0 0 1px 0 rgba(0,25,40,0.08)`,
    `0 2px 4px rgba(0,0,0,.15)`,
    `0 0 1px 0 rgba(0,25,40,0.08), 0 2px 3px 0 rgba(0,25,40,0.16)`,
    `0 0 2px 0 rgba(0,25,40,0.04), 0 2px 2px 0 rgba(0,25,40,0.04), 0 4px 4px 0 rgba(0,25,40,0.10)`,
    `0 0 8px 0 rgba(0,25,40,0.12), 0 4px 24px 0 rgba(0,25,40,0.07)`,
    `0 16px 24px 2px rgba(0,0,0,0.14), 0 6px 30px 5px rgba(0,0,0,0.12), 0 8px 10px -7px rgba(0,0,0,0.2)`,
    `0 24px 38px 3px rgba(0,0,0,0.14), 0 9px 46px 8px rgba(0,0,0,0.12), 0 11px 15px -7px rgba(0,0,0,0.2)`,
  ],
  borders: [`1px solid ${colors.primary}`, `1px solid ${colors.primary}`],
  letterSpacings: ['0.11rem', '0.11rem', '0.11rem'],
};

export const materialOverrideTheme = createTheme({
  palette: {
    primary: {
      main: colors.primary,
      contrastText: colors.white,
    },
    secondary: {
      main: colors.secondary,
      contrastText: colors.white,
    },
    background: {
      paper: colors.white,
    },
    text: {
      primary: colors.black,
      secondary: colors.gray2,
    },
  },
  shape: {
    borderRadius: borderRadius.large,
  },
  typography: {
    fontFamily: LAYOUT_CONSTANTS.PRIMARY_FONT,
    fontWeightBold: 700,
    fontWeightMedium: 600,
    fontWeightRegular: 400,
    fontSize: 14,
    htmlFontSize: 16,
  },
});
