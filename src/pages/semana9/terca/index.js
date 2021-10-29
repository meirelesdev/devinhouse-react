import Main from "../../../components/Main"

const Semana9Terca = () => {
    const items = [
        { refs: "", title: "Voltar Home", class: "active" },
        { refs: "/semana9", title: "Voltar Incio Semana", class: "active" },
    ]
    return (
        <Main items={items} content={true} title="Aula do Dia: Terça">
            <p>Hook: useEffect</p>
            <p>Hook: useRef</p>
        </Main>
    )
}
export default Semana9Terca