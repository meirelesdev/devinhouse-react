import { Route } from "react-router-dom";
import { Home } from '../pages/Home'
import { ListaUsuarios } from '../pages/ListaUsuarios'
import { FormUsuario } from '../pages/FormUsuario'
import { ListaTecnologias } from '../pages/ListaTecnologias'
import { FormTecnologia } from '../pages/FormTecnologia'

function RoutesApp() {
    return (
        <>
            <Route exact={true} path='/projetos/formik' component={Home} />
            <Route exact={true} path='/projetos/formik/usuarios' component={ListaUsuarios} />
            <Route exact={true} path='/projetos/formik/usuarios/novo' component={FormUsuario} />
            <Route exact={true} path='/projetos/formik/tecnologias' component={ListaTecnologias} />
            <Route exact={true} path='/projetos/formik/tecnologias/novo' component={FormTecnologia} />
        </>
    );
}
export default function FormikRoutes() {
    return (
        <RoutesApp />
    );
}