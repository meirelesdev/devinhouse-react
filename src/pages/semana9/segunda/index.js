import { Content } from "../../../components/ContentDay"
import Header from "../../../components/header"

const Semana9Segunda = () => {
    const items = [
        { refs: "/semana9/segunda/exercicios", title: "Exercicios Da Semana", class: "active" },
        { refs: "", title: "Voltar Home", class: "active" },
        { refs: "/semana9", title: "Voltar Incio Semana", class: "active" },
    ]
    return (
        <main className="container">
            <Header items={items} />
            <h1>Aula do Dia: Segunda</h1>
            <Content>
                    <p>Estado e setState</p>
                    <p>Componentes funcionais</p>
                    <p>Introdução à hooks: useState</p>
            </Content>
        </main>
    )
}
export default Semana9Segunda