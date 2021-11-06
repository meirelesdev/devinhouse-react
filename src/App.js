import './App.css';
import { BrowserRouter } from 'react-router-dom'
import Routes from './routes';

const App = props => {
  return (
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
  );
}

export default App;
