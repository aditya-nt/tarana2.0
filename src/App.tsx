import store from "./store";
import { Provider } from "react-redux";
import { AuthProvider } from "./contexts/AuthContext";
import AppRouter from "./routes/AppRouter";
function App() {
  return (
    <Provider store={store}>
      <AuthProvider>
        <AppRouter/>
      </AuthProvider>
    </Provider>
  );
}

export default App;
