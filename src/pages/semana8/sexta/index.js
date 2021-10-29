import Main from "../../../components/Main"

const Semana8Sexta = () => {
    const items = [
        { refs: "", title: "Voltar Home", class: "active" },
        { refs: "/semana8", title: "Voltar Incio Semana", class: "active" },
    ]
    return (
        <Main title="Aula do Dia: Sexta" items={items} >
            <p>Componentes e props</p>
            <p>Continuando com - <strong>Geometrizando</strong>.</p>
        </Main>
    )
}
export default Semana8Sexta