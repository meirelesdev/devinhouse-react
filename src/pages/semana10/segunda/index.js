import { Content } from "../../../components/ContentDay"
import Header from "../../../components/Header"

const Semana10Segunda = () => {
    const items = [
        { refs: "/semana10/segunda/exercicios", title: "Exercicios Da Semana", class: "active" },
        { refs: "", title: "Voltar Home", class: "active" },
        { refs: "/semana10", title: "Voltar Incio Semana", class: "active" },
    ]
    return (
        <main className="container">
            <Header items={items} />
            <h1>Aula do Dia: Segunda</h1>
            <Content>
                    <p>Como funcionam as rotas de navegação com React</p>
                    <p>Utilizando a lib React-Router-Dom</p>
                    <p>Criando nossas próprias rotas</p>
                    <p>Elaborando nossa própria rota customizada</p>
                    <p>Entendendo como funciona o UseHistory, UseParams, UseLocation</p>
                    <p>Outros componentes que utilizaremos (Link, Redirect)</p>
            </Content>
        </main>
    )
}
export default Semana10Segunda