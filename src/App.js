import './App.css';
import {ThemeProvider} from '@material-ui/core/styles';
import AppRoutes from './AppRoutes';
import 'fontsource-roboto';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
        <AppRoutes/>
    </ThemeProvider>
  );
}

export default App;
