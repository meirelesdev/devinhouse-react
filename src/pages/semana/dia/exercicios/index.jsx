import { useParams } from "react-router"

const Exercicios = () => {
    const { id, dia } = useParams()
    return (
        <div>
            <h1>
                Pagina de exercicios da semana {id} dia {dia} ainda em construção.
            </h1>
        </div>
    )
}

export default Exercicios