import { Content } from "../../../components/ContentDay"
import Header from "../../../components/header"

const Semana9Quarta = () => {
    const items = [
        { refs: "", title: "Voltar Home", class: "active" },
        { refs: "/semana9", title: "Voltar Incio Semana", class: "active" },
    ]
    return (
        <main className="container">
            <Header items={items} />
            <h1>Aula do Dia: Quarta</h1>
            <Content>
                    <p>Usar hooks no sistema Pokemon</p>
                    <p>Transformar o Housebook em app React</p>
            </Content>
        </main>
    )
}
export default Semana9Quarta