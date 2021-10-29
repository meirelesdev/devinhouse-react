import Main from '../../components/Main'

function Semana9() {
  const items = [
    { refs: "/semana9/segunda", title: "Segunda", class: "active" },
    { refs: "/semana9/terca", title: "Terça", class: "active" },
    { refs: "/semana9/quarta", title: "Quarta", class: "active" },
    { refs: "/semana9/quinta", title: "Quinta", class: "active" },
    { refs: "/semana9/sexta", title: "Sexta", class: "active" },
  ]
  return (
    <Main items={items} title="Conteudo da Semana 9">
      <ul>
        <li>Estado e setState</li>
        <li>Componentes funcionais</li>
        <li>Introdução à hooks: useState</li>
        <li>Hook: useEffect</li>
        <li>Hook: useRef</li>
        <li>Usar hooks no sistema Pokemon</li>
        <li>Transformar o Housebook em app React</li>
        <li>Eventos React x DOM</li>
        <li>Components controlados X não Controlados</li>
      </ul>
    </Main>
  )
}

export default Semana9