
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
        <Route exact path="/"  component={Home} />
        <Route path="/semana8/quarta/exercicios/" component={Semana8QuartaExercicios} />
        <Route path="/semana8/quarta/" component={Semana8Quarta} />
        <Route path="/semana8/" component={Semana8} />
        <Route path="/semana8/quinta/" component={Semana8Quinta} />
        <Route path="/semana8/sexta/"  component={Semana8Sexta} />
        <Route path="/semana9/segunda/exercicios/"  component={Semana9SegundaExercicios} />
        <Route path="/semana9/segunda/"  component={Semana9Segunda} />
        <Route path="/semana9/terca/" component={Semana9Terca} />
        <Route path="/semana9/quarta/" component={Semana9Quarta} />
        <Route path="/semana9/quinta/" component={Semana9Quinta} />
        <Route path="/semana9/sexta/"  component={Semana9Sexta} />
        <Route path="/semana9/" component={Semana9} />
        <Route path="/semana10/"  component={Semana10} />
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
