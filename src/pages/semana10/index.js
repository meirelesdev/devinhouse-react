import Main from '../../components/Main'

function Semana10(props) {
  const items = [
    { refs: "/semana10/segunda", title: "Segunda", class: "active" },
    { refs: "/semana10/terca", title: "Terça", class: "active" },
    { refs: "/semana10/quarta", title: "Quarta", class: "active" },
    { refs: "/semana10/quinta", title: "Quinta", class: "active" },
    { refs: "/semana10/sexta", title: "Sexta" },
  ]
  return (
    <Main items={items} title="Conteudo da Semana 10">
      <ul>
        <li>Como funcionam as rotas de navegação com React</li>
        <li>Utilizando a lib React-Router-Dom</li>
        <li>Criando nossas próprias rotas</li>
        <li>Elaborando nossa própria rota customizada</li>
        <li>Entendendo como funciona o UseHistory, UseParams, UseLocation</li>
        <li>Outros componentes que utilizaremos</li>
        <li>Desafio, criar um projeto que utilize todos estes conceitos</li>
        <li>Revisando a aula anterior sobre rotas da aplicação</li>
        <li>Conceitos de estados em outras telas</li>
        <li>Como funciona o useContext</li>
        <li>Aprendendo na prática utilizando o useContext</li>
        <li>Consumindo api e combinando com useContext</li>
        <li>Desafio, criar um projeto que utilize todos estes conceitos</li>
        <li>Revisando a aula anterior sobre useContext</li>
        <li>Como funciona o useReducer</li>
        <li>Aprendendo na prática utilizando o useReducer criando uma aplicação darkMode simples</li>
        <li>CSS-in-JS</li>
        <li>Styled components</li>
      </ul>
    </Main>
  )
}

export default Semana10


