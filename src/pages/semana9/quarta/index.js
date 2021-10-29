import Main from "../../../components/Main"

const Semana9Quarta = () => {
    const items = [
        { refs: "", title: "Voltar Home", class: "active" },
        { refs: "/semana9", title: "Voltar Incio Semana", class: "active" },
    ]
    return (
        <Main items={items} content={true} title="Aula do Dia: Quarta">
            <p>Usar hooks no sistema Pokemon</p>
            <p>Transformar o Housebook em app React</p>
        </Main>
    )
}
export default Semana9Quarta