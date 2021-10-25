import { Content } from '../../components/ContentDay'
import Header from '../../components/header'

function Semana8(props) {
  const items = [
    { refs: "/semana8/segunda/", title: "Segunda"  },
    { refs: "/semana8/terca/", title: "Terça"},
    { refs: "/semana8/quarta/", title: "Quarta", class: "active" },
    { refs: "/semana8/quinta/", title: "Quinta", class: "active" },
    { refs: "/semana8/sexta/", title: "Sexta", class: "active" },
  ]
  return(
    <main className="container">
      <Header items={items} />
        <h1>Semana 8</h1>
        <Content>
          <p>Neste semana devido ao feriado do dia 12 de outubro e do dia 15 não tivemos aula na segunda e terça.</p>
        </Content>
    </main>
  )  
}

export default Semana8