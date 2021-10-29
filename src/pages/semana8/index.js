import Main from '../../components/Main'

const Semana8 = props => {
  const items = [
    { refs: "/semana8/segunda", title: "Segunda"  },
    { refs: "/semana8/terca", title: "Terça"},
    { refs: "/semana8/quarta", title: "Quarta", class: "active" },
    { refs: "/semana8/quinta", title: "Quinta", class: "active" },
    { refs: "/semana8/sexta", title: "Sexta", class: "active" },
  ]
  return(
    <Main items={items} title="Conteudo da Semana 8">
       <ul>
        <li>O que é React ?</li>
        <li>Componentes</li>
        <li>niciando o Projeto - Geometrizando.</li>
        <li>Conferindo o ambiente de desenvolvimento</li>
        <li>Componentes e props</li>
        <li>Continuando com Geometrizando</li>
        <li>Revisão do projetos Geometrizando</li>
        <li>PropTypes</li>
        <li>Aplicando propTypes</li>
        <li>Projeto Pokemon</li>
      </ul>
    </Main>
  )  
}

export default Semana8