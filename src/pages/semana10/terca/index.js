import { Content } from "../../../components/ContentDay"
import Header from "../../../components/Header"
import Main from "../../../components/Main"

const Semana10Terca = () => {
    const items = [
        { refs: "/", title: "Voltar Home", class: "active" },
        { refs: "/semana10", title: "Voltar Incio Semana", class: "active" },
    ]
    return (
        <Main items={items} title="Aula do Dia: Terça">
            <p>Revisando a aula anterior sobre rotas da aplicação</p>
            <p>Conceitos de estados em outras telas</p>
            <p>Como funciona o useContext</p>
            <p>Aprendendo na prática utilizando o useContext</p>
            <p>Consumindo api e combinando com useContext</p>
            <p>Desafio, criar um projeto que utilize todos estes conceitos</p>
        </Main>
    )
}
export default Semana10Terca