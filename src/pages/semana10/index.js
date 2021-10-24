import Header from '../../components/header'

function Semana10(props) {
  const items = [
    { refs: "/semana10/segunda", title: "Segunda" },
    { refs: "/semana10/terca", title: "Terça" },
    { refs: "/semana10/quarta", title: "Quarta" },
    { refs: "/semana10/quinta", title: "Quinta" },
    { refs: "/semana10/sexta", title: "Sexta" },
  ]
  return(
    <main className="container">
      <Header items={items} />
        <h1>Semana 10</h1>
    </main>
  )  
}

export default Semana10