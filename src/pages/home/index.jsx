
import Main from '../../components/Main';

function Home() { 
  const items = [
    { refs: "/semana8", title: "Semana 8", class: "active" },
    { refs: "/semana9", title: "Semana 9", class: "active" },
    { refs: "/semana10", title: "Semana 10", class: "active" }
  ]
  return (
    <Main title="Aulas ReacJS" items={items} >
        <p>Nesta Etapa do curso iniciamos o Aprindizado e desenvolvimento de atividade em ReacJS</p>
    </Main>
  )
}

export default Home;
