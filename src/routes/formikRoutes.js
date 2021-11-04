import React from "react";
import { Route } from "react-router-dom";

import { FormTecnologia } from "../pages/Formik/FormTecnologia";
import { FormUsuario } from "../pages/Formik/FormUsuario/index";
import { Home } from "../pages/Formik/Home";
import { ListaTecnologias } from "../pages/Formik/ListaTecnologias";
import { ListaUsuarios } from "../pages/Formik/ListaUsuarios";

function RoutesApp() {
    return (
        <>
            <Route exact={true} path='/formik' component={Home} />
            <Route exact={true} path='/formik/usuarios' component={ListaUsuarios} />
            <Route exact={true} path='/formik/usuarios/novo' component={FormUsuario} />
            <Route exact={true} path='/formik/tecnologias' component={ListaTecnologias} />
            <Route exact={true} path='/formik/tecnologias/novo' component={FormTecnologia} />
        </>
    );
}
export default function FormikRoutes() {
    return (
        <RoutesApp />
    );
  }