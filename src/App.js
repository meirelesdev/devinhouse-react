import './App.css';
import { BrowserRouter } from 'react-router-dom'
import Routes from './routes';
import { AppTheme } from './contexts/app-theme-context';
import { GlobalStyles } from './styles/GlobalStyles';

const App = props => {
  return (
    <AppTheme>
      <GlobalStyles />
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </AppTheme>
  );
}

export default App;
