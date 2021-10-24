import { Content } from "../../../components/ContentDay"
import Header from "../../../components/header"

const Semana8Quinta = () => {
    const items = [
        { refs: "/", title: "Voltar Home", class: "active" },
        { refs: "/semana8/", title: "Voltar Incio Semana", class: "active" },
    ]
    return (
        <main className="container">
            <Header items={items} />
            <h1>Aula do Dia: Quinta</h1>
            <Content>
                    <p>Componentes e props</p>
                    <p>Continuando com - <strong>Geometrizando</strong>.</p>
            </Content>
        </main>
    )
}
export default Semana8Quinta