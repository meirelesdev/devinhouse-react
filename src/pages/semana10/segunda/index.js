import Main from "../../../components/Main"

const Semana10Segunda = () => {
    const items = [
        { refs: "/semana10/segunda/exercicios", title: "Exercicios Da Semana", class: "active" },
        { refs: "", title: "Voltar Home", class: "active" },
        { refs: "/semana10", title: "Voltar Incio Semana", class: "active" },
    ]
    return (
        <Main items={items} title="Aula do Dia: Segunda" content={true}>
            <p>Como funcionam as rotas de navegação com React</p>
            <p>Utilizando a lib React-Router-Dom</p>
            <p>Criando nossas próprias rotas</p>
            <p>Elaborando nossa própria rota customizada</p>
            <p>Entendendo como funciona o UseHistory, UseParams, UseLocation</p>
            <p>Outros componentes que utilizaremos (Link, Redirect)</p>
        </Main>
    )
}
export default Semana10Segunda