import { useState } from "react";

import { TextInput } from '../../../ComponentsFormik/TextInput'
import { PageDefault } from '../../../ComponentsFormik/templates/PageDefault'
import { Container } from '../../../ComponentsFormik/Container'
import { Paper } from '../../../ComponentsFormik/Paper'
import { Button } from '../../../ComponentsFormik/Button'
import { Form } from '../../../ComponentsFormik/Form'
import { FormFooter } from '../../../ComponentsFormik/Form'
import { saveNewTech } from "../../../services/api";

export function FormTecnologia(props) {
  const [tecnologia, setTecnologia] = useState({});

  const handleSetValue = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    if (name && value) {
      setTecnologia((u) => ({ ...u, [name]: value }));
    }
  };

  const handleSubmit = () => {
    const parsedLinks = [];
    if (tecnologia.links) {
      parsedLinks.push(tecnologia.links);
    }
    saveNewTech({ ...tecnologia, links: parsedLinks }).then(() => {
      props.history.push("/tecnologias");
    });
  };

  return (
    <PageDefault>
      <Container>
        <Paper>
          <h2>Cadastrar tecnologia</h2>
          <Form>
            <TextInput onChange={handleSetValue} name="titulo" label="Título:" />
            <TextInput onChange={handleSetValue} name="logo" label="Logo:" />
            <TextInput onChange={handleSetValue} name="descricao" label="Descrição:" type="textarea" />
            <TextInput onChange={handleSetValue} name="links" label="Link:" />
            <FormFooter>
              <Button variant="success" title="Salvar" onClick={handleSubmit} />
              {/* <Button variant="warning" title="Limpar" /> */}
            </FormFooter>
          </Form>
        </Paper>
      </Container>
    </PageDefault>
  );
}
