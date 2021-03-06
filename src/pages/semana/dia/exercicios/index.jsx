import { useParams, Link } from "react-router-dom"
import Main from "../../../../components/Main"
import { content } from '../../../../data/conteudo-semanas-aulas'


const Exercicios = (props) => {
    const { id } = useParams()
    const { exercicios } = content.conteudo[`semana${id}`]
    return (
        <Main screen="exercicios" items={[]} content={exercicios.length > 0 ? false : true} title={`Lista de exercícios da semana ${id}`}>
            <p className="description-exercicios">Esta página é dedicada a listar os exercíos da semana com um link para a resposta quando concluido.</p>
            <ul className="list-exercicios">
                {exercicios.length > 0 && exercicios.map((ex, i) => (
                    <li key={i}>
                        <Link className={ex.done ? 'active' : 'disabled'} to={ex.url} target={ex.target && ex.target} >{ex.title}
                        </Link>
                        <pre>
                            <code>
                                {ex.description}
                            </code>
                        </pre>
                    </li>
                ))}
            </ul>
        </Main>
    )
}

export default Exercicios