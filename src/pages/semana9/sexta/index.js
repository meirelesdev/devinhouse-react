import { Content } from "../../../components/ContentDay"
import Header from "../../../components/header"

const Semana9Sexta = () => {
    const items = [
        { refs: "/", title: "Voltar Home", class: "active" },
        { refs: "/semana9/", title: "Voltar Incio Semana", class: "active" },
    ]
    return (
        <main className="container">
            <Header items={items} />
            <h1>Aula do Dia: Sexta</h1>
            <Content>
                    <p>Conversa com Ex-Alunos DevinHouse</p>
                    <p>Revisão e Tira-Duvidas</p>
            </Content>
        </main>
    )
}
export default Semana9Sexta