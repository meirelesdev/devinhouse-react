import Header from '../../components/header'

function Semana8(props) {
  const items = [
    { refs: "semana8/segunda", title: "Segunda", class: "active" },
    { refs: "semana8/terca", title: "Terça", class: "active" },
    { refs: "semana8/quarta", title: "Quarta", class: "active" },
    { refs: "semana8/quinta", title: "Quinta", class: "active" },
    { refs: "semana8/sexta", title: "Sexta", class: "active" },
  ]
  return(
    <div className="container">
      <Header items={items} />
        <h1>Semana 8</h1>
    </div>
  )  
}

export default Semana8