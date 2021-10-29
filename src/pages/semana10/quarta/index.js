import { Content } from "../../../components/ContentDay"
import Header from "../../../components/Header"

const Semana10Quarta = () => {
    const items = [
        { refs: "/", title: "Voltar Home", class: "active" },
        { refs: "/semana10", title: "Voltar Incio Semana", class: "active" },
    ]
    return (
        <main className="container">
            <Header items={items} />
            <h1>Aula do Dia: Quarta</h1>
            <Content>
                <p>Revisando a aula anterior sobre useContext</p>
                <p>Como funciona o useReducer</p>
                <p>Aprendendo na prática utilizando o useReducer criando uma aplicação darkMode simples</p>
            </Content>
        </main>
    )
}
export default Semana10Quarta