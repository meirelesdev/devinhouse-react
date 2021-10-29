import Main from '../../../components/Main'


const Semana10Quarta = () => {
    const items = [
        { refs: "/", title: "Voltar Home", class: "active" },
        { refs: "/semana10", title: "Voltar Incio Semana", class: "active" },
    ]
    return (
        <Main title="Aula do Dia: Quarta" content={true} items={items}>
            <p>Revisando a aula anterior sobre useContext</p>
            <p>Como funciona o useReducer</p>
            <p>Aprendendo na prática utilizando o useReducer criando uma aplicação darkMode simples</p>
        </Main>
    )
}
export default Semana10Quarta