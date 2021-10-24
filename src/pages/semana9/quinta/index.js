import { Content } from "../../../components/ContentDay"
import Header from "../../../components/header"

const Semana9Quinta = () => {
    const items = [
        { refs: "/", title: "Voltar Home", class: "active" },
        { refs: "/semana9/", title: "Voltar Incio Semana", class: "active" },
    ]
    return (
        <main className="container">
            <Header items={items} />
            <h1>Aula do Dia: Quinta</h1>
            <Content>
                    <p>Eventos React x DOM</p>
                    <p>Components controlados X não Controlados</p>
            </Content>
        </main>
    )
}
export default Semana9Quinta