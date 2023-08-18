import { createGlobalStyle } from 'styled-components';

interface Theme {
  bodyBackgroundColor: string;
  componentBackgroundColor: string;
  borderColor: string;
  textColor: string;
}

export const lightTheme: Theme = {
  bodyBackgroundColor: 'white',
  componentBackgroundColor: 'transparent',
  borderColor: 'black',
  textColor: 'black',
};

export const darkTheme: Theme = {
  bodyBackgroundColor: 'black',
  componentBackgroundColor: 'transparent',
  borderColor: 'white',
  textColor: 'white',
};

export const dreamTheme: Theme = {
  bodyBackgroundColor: 'pink',
  componentBackgroundColor: 'transparent',
  borderColor: 'black',
  textColor: 'black',
};

export const GlobalStyles = createGlobalStyle<{ theme: Theme }>`
  body {
    background-color: ${({ theme }) => {
      return theme.bodyBackgroundColor;
    }};
    color: ${({ theme }) => theme.textColor};
  }
`;
