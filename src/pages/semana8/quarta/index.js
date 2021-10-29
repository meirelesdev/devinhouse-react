import Main from "../../../components/Main"

const Semana8Quarta = () => {
    const items = [
        { refs: "/semana8/quarta/exercicios", title: "Exercicios Da Semana", class: "active" },
        { refs: "", title: "Voltar Home", class: "active" },
        { refs: "/semana8", title: "Voltar Incio Semana", class: "active" },
    ]
    return (
        <Main title="Aula do Dia: Quarta" content={true} items={items} >
            <p>O que é React ?</p>
            <p>Componentes</p>
            <p>Iniciando o Projeto - <strong>Geometrizando</strong>.</p>
        </Main>
    )
}
export default Semana8Quarta