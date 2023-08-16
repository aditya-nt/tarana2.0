import { Provider } from 'react-redux';
import { AuthProvider } from '@/contexts/AuthContext';
import AppRouter from '@/routes/AppRouter';
import store from '@/store/store';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { GlobalStyles } from '@/styles/globalStyles';
import { useThemeContext } from '@/contexts/ThemeContext';

const queryClient = new QueryClient();

function App() {
  const { themeStyle } = useThemeContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <AuthProvider>
          <GlobalStyles theme={themeStyle} />
          <AppRouter />
        </AuthProvider>
      </Provider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
