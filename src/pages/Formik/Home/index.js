import { Paper } from "../../../ComponentsFormik/Paper";
import { Container } from "../../../ComponentsFormik/Container";
import { PageDefault } from "../../../ComponentsFormik/templates/PageDefault";

export function Home() {
  return (
    <PageDefault>
      <Container>
        <Paper>
          <h2>Bem vindo</h2>
          Este é um site de exemplo com router, styled-components, formik e yup.
        </Paper>
      </Container>
    </PageDefault>
  );
}
