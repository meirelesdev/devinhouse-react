import Main from "../../../components/Main"

const Semana9Segunda = () => {
    const items = [
        { refs: "/semana9/segunda/exercicios", title: "Exercicios Da Semana", class: "active" },
        { refs: "", title: "Voltar Home", class: "active" },
        { refs: "/semana9", title: "Voltar Incio Semana", class: "active" },
    ]
    return (
        <Main items={items} content={true} title="Aula do Dia: Segunda">
            <p>Estado e setState</p>
            <p>Componentes funcionais</p>
            <p>Introdução à hooks: useState</p>
        </Main>
    )
}
export default Semana9Segunda