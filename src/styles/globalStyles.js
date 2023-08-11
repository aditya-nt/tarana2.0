import { createGlobalStyle, styled, ThemeProvider } from 'styled-components';

// Define your themes
const darkTheme = {
  bodyBackgroundColor: '#000',
  textColor: '#071739',
  buttonColor: '#071739',
  buttonBackground: 'none',
  // Add more theme properties here for dark mode
};

const lightTheme = {
  bodyBackgroundColor: '#fff',
  textColor: '#071739',
  buttonColor: '#071739',
  buttonBackground: 'none',
  // Add more theme properties here for light mode
};

// Create a ThemeProvider to switch between themes
export const ThemeToggle = ({ children, theme }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

// Your GlobalStyles component remains the same

export const Container = styled.div`
  /* Your container styles here */
`;

export const Header = styled.div`
  /* Your header styles here */
`;

export const PlayerContainer = styled.div`
  /* Your player container styles here */
`;

export const AvatarContainer = styled.div`
  /* Your avatar container styles here */
`;

export const ProgressContainer = styled.div`
  /* Your progress container styles here */
`;

export const ControlsContainer = styled.div`
  /* Your controls container styles here */
`;

export const OptionsContainer = styled.div`
  /* Your options container styles here */
`;

export const StyledButton = styled.button`
  color: ${({ theme }) => theme.buttonColor};
  border-radius: 50%;
  margin: 15px;
  font-size: 18px;
  text-align: center;
  transition: 0.2s;
  cursor: pointer;
  border: none;
  background: ${({ theme }) => theme.buttonBackground};

  &:focus {
    outline: none;
  }

  /* Rest of your button styles */
`;

export const StyledImage = styled.img`
  width: auto;
  height: 100%;
  filter: opacity(70%);
`;

// Define more reusable styled-components as needed
