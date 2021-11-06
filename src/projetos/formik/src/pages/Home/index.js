import { PageDefault } from '../../components/templates/PageDefault'
import { Container } from '../../components/Container'
import { Paper } from '../../components/Paper'


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
