
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './pages/home'
import Semana8 from './pages/semana8';
import Semana8Quarta from './pages/semana8/quarta';
import Semana9 from './pages/semana9';
import Semana10 from './pages/semana10';
import Semana8Quinta from './pages/semana8/quinta';
import Semana8Sexta from './pages/semana8/sexta';
import Semana8QuartaExercicios from './pages/semana8/quarta/Exercicios';
import Semana9Segunda from './pages/semana9/segunda';
import Semana9SegundaExercicios from './pages/semana9/segunda/Exercicios';
import Semana9Terca from './pages/semana9/terca';
import Semana9Quarta from './pages/semana9/quarta';
import Semana9Quinta from './pages/semana9/quinta';
import Semana9Sexta from './pages/semana9/sexta';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" >
          <Home />
        </Route>
        <Route path="/semana8/quarta/exercicios">
          <Semana8QuartaExercicios />
        </Route>
        <Route path="/semana8/quarta">
          <Semana8Quarta />
        </Route>
        <Route path="/semana8">
          <Semana8 />
        </Route>
        <Route path="/semana8/quinta">
          <Semana8Quinta />
        </Route>
        <Route path="/semana8/sexta" >
          <Semana8Sexta />
        </Route>
        <Route path="/semana9/segunda/exercicios" >
          <Semana9SegundaExercicios />
        </Route>
        <Route path="/semana9/segunda" >
          <Semana9Segunda />
        </Route>
        <Route path="/semana9/terca">
          <Semana9Terca />
        </Route>
        <Route path="/semana9/quarta">
          <Semana9Quarta />
        </Route>
        <Route path="/semana9/quinta">
          <Semana9Quinta />
        </Route>
        <Route path="/semana9/sexta" >
          <Semana9Sexta />
        </Route>
        <Route path="/semana9">
          <Semana9 />
        </Route>
        <Route path="/semana10" >
          <Semana10 />
        </Route>
      </Switch>
      <hr />
      <footer>
        <div className="container">
          Todos os direitos reservados
        </div>
      </footer>
    </Router>
  );
}

export default App;
