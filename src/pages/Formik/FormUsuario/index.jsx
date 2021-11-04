import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import { Formik, Field, ErrorMessage } from "formik";

import { Button } from "../../../ComponentsFormik/Button";
import { Container } from "../../../ComponentsFormik/Container";
import { Form, FormFieldset, FormFooter } from "../../../ComponentsFormik/Form";
import { Paper } from "../../../ComponentsFormik/Paper";
import { SelectInput } from "../../../ComponentsFormik/SelectInput";
import { TextInput } from "../../../ComponentsFormik/TextInput";
import { getAllTechs } from "../../../services/api";
import { PageDefault } from "../../../ComponentsFormik/templates/PageDefault";

function isValidDate(message) {
  return this.test("isValidDate", message, function (value) {
    const { path, createError } = this;
    const dateRegEx =
      /^(?:(?:31(\/)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;

    if (!value) {
      return true;
    }

    console.log(value);
    console.log(!dateRegEx.test(value));
    if (!dateRegEx.test(value)) {
      return createError({ path, message: message ?? "Invalid date format" });
    }

    return true;
  });
}
Yup.addMethod(Yup.string, "isValidDate", isValidDate);

export function FormUsuario(props) {
  const [tecnologias, setTecnologias] = useState([]);

  useEffect(() => {
    getAllTechs().then((techs) => setTecnologias(mapTechsToOptions(techs)));
  }, []);

  const handleCreateUser = (valores) => {
    console.log("Submeteu");
    console.table(valores);
    // saveNewUser(valores).then(() => props.history.push("/usuarios"));
  };

  return (
    <PageDefault>
      <Container>
        <Paper>
          <h2>Cadastrar usuário</h2>
          <Formik validationSchema={userValidationSchema} initialValues={userInitialValues} onSubmit={handleCreateUser}>
            {(formProps) => {
              const { handleSubmit } = formProps;
              return (
                <Form>
                  <Field component={TextInput} name="nome" label="Nome:" />
                  <ErrorMessage name="nome" />
                  <Field component={TextInput} name="apelido" label="Apelido:" />
                  <ErrorMessage name="apelido" />
                  <Field component={TextInput} name="dataNascimento" label="Data de nascimento:" />
                  <ErrorMessage name="dataNascimento" />
                  <Field component={TextInput} name="profissao" label="Profissão:" />
                  <ErrorMessage name="profissao" />
                  <Field component={SelectInput} label="Tecnologia:" name="tecnologiaId" options={tecnologias} />
                  <FormFieldset>
                    <legend>Endereço</legend>
                    <Field component={TextInput} name="endereco.logradouro" label="Logradouro:" />
                    <ErrorMessage name="endereco.logradouro" />
                    <Field component={TextInput} name="endereco.numero" label="Número:" />
                    <ErrorMessage name="endereco.numero" />
                    <Field component={TextInput} name="endereco.bairro" label="Bairro:" />
                    <ErrorMessage name="endereco.bairro" />
                    <Field component={TextInput} name="endereco.cidade" label="Cidade:" />
                    <ErrorMessage name="endereco.cidade" />
                    <Field component={TextInput} name="endereco.uf" label="UF:" />
                    <ErrorMessage name="endereco.uf" />
                    <Field component={TextInput} name="endereco.cep" label="CEP:" />
                    <ErrorMessage name="endereco.cep" />
                  </FormFieldset>
                  <Field component={TextInput} TextInput type="textarea" name="observacoes" label="Observações:" />
                  <ErrorMessage name="observacoes" />
                  <FormFooter>
                    <Button variant="success" title="Salvar" onClick={handleSubmit} />
                    <Button variant="warning" title="Limpar" onClick={() => {}} />
                  </FormFooter>
                </Form>
              );
            }}
          </Formik>
        </Paper>
      </Container>
    </PageDefault>
  );
}

function mapTechsToOptions(techs) {
  return techs.map((tech) => ({ label: tech.titulo, value: tech.id }));
}

const userInitialValues = {
  nome: "",
  apelido: "",
  dataNascimento: "",
  profissao: "",
  tecnologiaId: "",
  endereco: { logradouro: "", numero: "", bairro: "", cidade: "", uf: "", cep: "" },
  observacoes: "",
};

const userValidationSchema = Yup.object().shape({
  nome: Yup.string().required("Campo obrigatório"),
  apelido: Yup.string().required("Campo obrigatório"),
  dataNascimento: Yup.string().isValidDate("Informe uma data válida").required("Campo obrigatório"),
  endereco: Yup.object().shape({
    logradouro: Yup.string().required("Campo obrigatório"),
    numero: Yup.string().required("Campo obrigatório"),
    bairro: Yup.string().required("Campo obrigatório"),
    cidade: Yup.string().required("Campo obrigatório"),
    uf: Yup.string().required("Campo obrigatório"),
    cep: Yup.string().required("Campo obrigatório"),
  }),
  observacoes: Yup.string().required("Campo obrigatório"),
});
