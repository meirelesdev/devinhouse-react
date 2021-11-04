import { useParams, Link } from "react-router-dom"
import Main from "../../../../components/Main"
import { content } from '../../../../data/conteudo-semanas-aulas'


const Exercicios = (props) => {
    const { id } = useParams()
    const { exercicios } = content.conteudo[`semana${id}`]
    console.log(exercicios.length)
    return (
        <Main screen="exercicios" items={[]} content={exercicios.length > 0 ? false : true} title={`Exercícios da Semana ${id}`}>
            <ul className="list-exercicios">
                {exercicios.length > 0 && exercicios.map((ex, i) => (
                    <li key={i}>
                        <Link className={ex.done ? 'active' : 'disabled'} to={ex.url} >{ex.title}</Link>
                    </li>
                ))}
            </ul>
        </Main>
    )
}

export default Exercicios