import Main from "../../../components/Main"

const Semana9Sexta = () => {
    const items = [
        { refs: "", title: "Voltar Home", class: "active" },
        { refs: "/semana9", title: "Voltar Incio Semana", class: "active" },
    ]
    return (
        <Main items={items} title="Aula do Dia: Sexta">
            <p>Conversa com Ex-Alunos DevinHouse</p>
            <p>Revisão e Tira-Duvidas</p>
        </Main>
    )
}
export default Semana9Sexta