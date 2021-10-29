import Main from "../../../components/Main"

const Semana8Quinta = () => {
    const items = [
        { refs: "", title: "Voltar Home", class: "active" },
        { refs: "/semana8", title: "Voltar Incio Semana", class: "active" },
    ]
    return (
        <Main title="Aula do Dia: Quinta" content={true} items={items} >
            <p>Componentes e props</p>
            <p>Continuando com - <strong>Geometrizando</strong>.</p>
        </Main>
    )
}
export default Semana8Quinta