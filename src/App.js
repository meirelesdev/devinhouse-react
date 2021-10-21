
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './pages/home'
import Semana8 from './pages/semana8';
import Semana9 from './pages/semana9';
import Semana10 from './pages/semana10';

function App() {
  

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/semana8" component={Semana8} />
        <Route path="/semana9" component={Semana9} />
        <Route path="/semana10" component={Semana10} />
      </Switch>
      <hr />
      <footer>
        Todos os direitos reservados
      </footer>
    </BrowserRouter>
  );
}

export default App;
