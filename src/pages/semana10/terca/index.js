import { Content } from "../../../components/ContentDay"
import Header from "../../../components/Header"

const Semana10Terca = () => {
    const items = [
        { refs: "/", title: "Voltar Home", class: "active" },
        { refs: "/semana10", title: "Voltar Incio Semana", class: "active" },
    ]
    return (
        <main className="container">
            <Header items={items} />
            <h1>Aula do Dia: Terça</h1>
            <Content>
                <p>Revisando a aula anterior sobre rotas da aplicação</p>
                <p>Conceitos de estados em outras telas</p>
                <p>Como funciona o useContext</p>
                <p>Aprendendo na prática utilizando o useContext</p>
                <p>Consumindo api e combinando com useContext</p>
                <p>Desafio, criar um projeto que utilize todos estes conceitos</p>
            </Content>
        </main>
    )
}
export default Semana10Terca