import { Switch, Route } from 'react-router-dom'
import Home from '../pages/home'
import Semana from '../pages/semana';
import Dia from '../pages/semana/dia';
import Exercicios from '../pages/semana/dia/exercicios';
import ValidacaoForm from '../projetos/validacaoForm'
import FormikProjeto from '../projetos/formik'
import DrapDrop from '../projetos/dragdrop'

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/semana/:id" component={Semana} />
      <Route exact path="/semana/:id/:dia" component={Dia} />
      <Route exact path="/semana/:id/:dia/exercicios" component={Exercicios} />
      <Route path="/projetos/validacaoform" component={ValidacaoForm}/>
      <Route path="/projetos/formik" component={FormikProjeto}/>
      <Route path="/projetos/dragdrop" component={DrapDrop}/>
      <Route path="*" component={() => <div className="not-found"><h1>Pagina não Encontrada</h1></div>} />
    </Switch>
  )
}
export default Routes;