import { Slide, ToastContainer } from 'react-toastify';
import { ThemeProvider } from 'styled-components';
import AppRoutes from './routes';
import GlobalCSS from './styles/globalCSS';
import 'react-toastify/dist/ReactToastify.css';
import { theme } from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalCSS />
      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        transition={Slide}
      />
      <AppRoutes />
    </ThemeProvider>
  );
}

export default App;
