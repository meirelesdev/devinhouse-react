import { Content } from "../../../components/ContentDay"
import Header from "../../../components/header"

const Semana9Terca = () => {
    const items = [
        { refs: "/", title: "Voltar Home", class: "active" },
        { refs: "/semana9/", title: "Voltar Incio Semana", class: "active" },
    ]
    return (
        <main className="container">
            <Header items={items} />
            <h1>Aula do Dia: Terça</h1>
            <Content>
                    <p>Hook: useEffect</p>
                    <p>Hook: useRef</p>
            </Content>
        </main>
    )
}
export default Semana9Terca