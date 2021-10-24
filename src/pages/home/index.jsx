
import Header from '../../components/header/index'

function Home() { 
  const items = [
    { refs: "/semana8", title: "Semana 8", class: "active" },
    { refs: "/semana9", title: "Semana 9", class: "active" },
    { refs: "/semana10", title: "Semana 10", class: "active" }
  ]
  return (
    <main className="container">
      <Header items={items} />
        <h1>Aulas ReacJS</h1>
        <p>Nesta Etapa do curso iniciamos o Aprindizado e desenvolvimento de atividade em ReacJS</p>
    </main>
  );
}

export default Home;
