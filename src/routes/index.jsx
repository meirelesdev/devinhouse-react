import { Switch, Route } from 'react-router-dom'
import Home from '../pages/home'
import Semana8 from '../pages/semana8';
import Semana8Quarta from '../pages/semana8/quarta';
import Semana9 from '../pages/semana9';
import Semana10 from '../pages/semana10';
import Semana8Quinta from '../pages/semana8/quinta';
import Semana8Sexta from '../pages/semana8/sexta';
import Semana8QuartaExercicios from '../pages/semana8/quarta/Exercicios';
import Semana9Segunda from '../pages/semana9/segunda';
import Semana9SegundaExercicios from '../pages/semana9/segunda/Exercicios';
import Semana10SegundaExercicios from '../pages/semana10/segunda/Exercicios';
import Semana9Terca from '../pages/semana9/terca';
import Semana9Quarta from '../pages/semana9/quarta';
import Semana9Quinta from '../pages/semana9/quinta';
import Semana9Sexta from '../pages/semana9/sexta';
import Semana10Segunda from '../pages/semana10/segunda';
import Semana10Terca from '../pages/semana10/terca';
import Semana10Quarta from '../pages/semana10/quarta';
import Semana10Quinta from '../pages/semana10/quinta';
import Semana from '../pages/semana';
import Dia from '../pages/semana/dia';
import Exercicios from '../pages/semana/dia/exercicios';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/semana/:id" component={Semana} />
      <Route exact path="/semana/:id/:dia" component={Dia} />
      <Route exact path="/semana/:id/:dia/exercicios" component={Exercicios} />
      <Route path="/semana8/quarta/exercicios" component={Semana8QuartaExercicios} />
      <Route path="/semana8/quarta" component={Semana8Quarta} />
      <Route path="/semana8/quinta" component={Semana8Quinta} />
      <Route path="/semana8/sexta" component={Semana8Sexta} />
      <Route path="/semana8" component={Semana8} />
      <Route path="/semana9/segunda/exercicios" component={Semana9SegundaExercicios} />
      <Route path="/semana9/segunda" component={Semana9Segunda} />
      <Route path="/semana9/terca" component={Semana9Terca} />
      <Route path="/semana9/quarta" component={Semana9Quarta} />
      <Route path="/semana9/quinta" component={Semana9Quinta} />
      <Route path="/semana9/sexta" component={Semana9Sexta} />
      <Route path="/semana9" component={Semana9} />
      <Route path="/semana10/segunda/exercicios" component={Semana10SegundaExercicios} />
      <Route path="/semana10/segunda" component={Semana10Segunda} />
      <Route path="/semana10/terca" component={Semana10Terca} />
      <Route path="/semana10/quarta" component={Semana10Quarta} />
      <Route path="/semana10/quinta" component={Semana10Quinta} />
      <Route path="/semana10" component={Semana10} />
      <Route path="*" component={() => <div className="not-found"><h1>Pagina não Encontrada</h1></div>} />
    </Switch>
  )
}
export default Routes;