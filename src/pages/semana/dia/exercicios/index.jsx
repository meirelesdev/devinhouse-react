import { useParams, Link } from "react-router-dom"

const Exercicios = (props) => {
    const { id, dia } = useParams()
    return (
        <main>
            
            <section>
                <h1>
                    Pagina de exercicios da semana {id} dia {dia} ainda em construção.
                </h1>
                <div>
                    {props.children}
                </div>
            </section>
        </main>
    )
}

export default Exercicios