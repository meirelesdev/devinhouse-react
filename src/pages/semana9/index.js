import Header from '../../components/header'

function Semana9() {
  const items = [
    { refs: "/semana9/segunda/", title: "Segunda", class:"active" },
    { refs: "/semana9/terca/", title: "Terça", class:"active" },
    { refs: "/semana9/quarta/", title: "Quarta", class:"active" },
    { refs: "/semana9/quinta/", title: "Quinta", class:"active" },
    { refs: "/semana9/sexta/", title: "Sexta" , class:"active" },
  ]
  return(
    <main className="container">
      <Header items={items} />
        <h1>Semana 9</h1>
    </main>
  )  
}

export default Semana9