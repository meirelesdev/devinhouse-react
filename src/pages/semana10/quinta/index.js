import { Content } from "../../../components/ContentDay"
import Header from "../../../components/Header"

const Semana10Quinta = () => {
    const items = [
        { refs: "/", title: "Voltar Home", class: "active" },
        { refs: "/semana10", title: "Voltar Incio Semana", class: "active" },
    ]
    return (
        <main className="container">
            <Header items={items} />
            <h1>Aula do Dia: Quinta</h1>
            <Content>
                <p>CSS-in-JS</p>
                <p>Styled components</p>
                <p>Material Complementar</p>
            </Content>
        </main>
    )
}
export default Semana10Quinta