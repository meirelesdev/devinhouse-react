import Main from '../../components/Main';
import { content } from '../../data/conteudo-semanas-aulas'
import { getMenuSemanas } from '../../services/functions'

const Home = () => {
  const semanas = Object.keys(content.conteudo)
  const menu = getMenuSemanas(semanas)
  return (
    <Main title="Aulas ReacJS" items={menu} >
      <p>A partir da Semana 8 com ReactJS.</p>
      <p>Nesta Etapa do curso iniciamos o Aprindizado e desenvolvimento de atividade em ReacJS</p>
    </Main>
  )
}

export default Home;
