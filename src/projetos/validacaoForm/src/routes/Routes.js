import { Route } from "react-router-dom";
import { Home } from '../pages/Home'
import { ListaUsuarios } from '../pages/ListaUsuarios'
import { FormUsuario } from '../pages/FormUsuario'
import { ListaTecnologias } from '../pages/ListaTecnologias'
import { FormTecnologia } from '../pages/FormTecnologia'

function RoutesApp() {
    return (
        <>
            <Route exact={true} path='/projetos/validacaoform' component={Home} />
            <Route exact={true} path='/projetos/validacaoform/usuarios' component={ListaUsuarios} />
            <Route exact={true} path='/projetos/validacaoform/usuarios/novo' component={FormUsuario} />
            <Route exact={true} path='/projetos/validacaoform/tecnologias' component={ListaTecnologias} />
            <Route exact={true} path='/projetos/validacaoform/tecnologias/novo' component={FormTecnologia} />
        </>
    );
}
export default function FormikRoutes() {
    return (
        <RoutesApp />
    );
}