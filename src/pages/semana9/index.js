import Header from '../../components/header'

function Semana9(props) {
  const items = [
    { refs: "semana9/segunda", title: "Segunda" },
    { refs: "semana9/terca", title: "Terça" },
    { refs: "semana9/quarta", title: "Quarta" },
    { refs: "semana9/quinta", title: "Quinta" },
    { refs: "semana9/sexta", title: "Sexta" },
  ]
  return(
    <div className="container">
      <Header items={items} />
        <h1>Semana 9</h1>
    </div>
  )  
}

export default Semana9