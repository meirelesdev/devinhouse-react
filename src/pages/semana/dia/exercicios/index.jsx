import { useParams } from "react-router"

const Exercicios = props => {
    const { id, dia } = useParams()
    const menu = [{resf:'teste', title:'teste'}]
    return (
        <h1>Tela para mostrar os exercicios da semana</h1>
    )
}

export default Exercicios