import React from "react";
import "./styles/main.css";

import { Button } from "./components/Button";
import { Divider } from "./components/Divider";
import { FormHeader } from "./components/Form/FormHeader";
import { TextInput } from "./components/TextInput";
import * as C from './components/Form/FormFooter.styles'
import { Main } from './components/Main/Main.styles'

export default function App() {
  return (
    <Main>
      <FormHeader 
          titulo="Um formulário simples" 
          subtitulo="criado para aula de styled-components" />
      <Divider />
      <form 
        className="form"
        onSubmit={(e) => e.preventDefault()}>
        <TextInput titulo="Nome" nome="nome" />
        <TextInput titulo="Sobrenome" nome="sobrenome" />
        <C.FormFooter>
          <Button cor="#7209b7" titulo="Salvar" onClick={() => {}} />
          <Button cor="#fca311" titulo="Cancelar" onClick={() => {}} />
        </C.FormFooter>
      </form>
    </Main>
  );
}
