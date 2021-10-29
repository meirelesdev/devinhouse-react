import Main from "../../../components/Main"

const Semana10Quinta = () => {
    const items = [
        { refs: "/", title: "Voltar Home", class: "active" },
        { refs: "/semana10", title: "Voltar Incio Semana", class: "active" },
    ]
    return (
            <Main title="Aula do Dia: Quinta" content={true} items={items} >
                <p>CSS-in-JS</p>
                <p>Styled components</p>
                <p>Material Complementar</p>
            </Main>
    )
}
export default Semana10Quinta