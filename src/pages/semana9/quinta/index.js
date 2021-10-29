import Main from "../../../components/Main"

const Semana9Quinta = () => {
    const items = [
        { refs: "", title: "Voltar Home", class: "active" },
        { refs: "/semana9", title: "Voltar Incio Semana", class: "active" },
    ]
    return (
        <Main items={items} title="Aula do Dia: Quinta">
            <p>Eventos React x DOM</p>
            <p>Components controlados X não Controlados</p>
        </Main>

    )
}
export default Semana9Quinta