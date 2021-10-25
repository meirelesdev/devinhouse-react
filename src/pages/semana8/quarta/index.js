import { Content } from "../../../components/ContentDay"
import Header from "../../../components/header"

const Semana8Quarta = () => {
    const items = [
        { refs: "/semana8/quarta/exercicios/", title: "Exercicios Da Semana", class: "active" },
        { refs: "/", title: "Voltar Home", class: "active" },
        { refs: "/semana8/", title: "Voltar Incio Semana", class: "active" },
    ]
    return (
        <main className="container">
            <Header items={items} />
            <h1>Aula do Dia: Quarta</h1>
            <Content>
                    <p>O que é React ?</p>
                    <p>Componentes</p>
                    <p>Iniciando o Projeto - <strong>Geometrizando</strong>.</p>
            </Content>
        </main>
    )
}
export default Semana8Quarta