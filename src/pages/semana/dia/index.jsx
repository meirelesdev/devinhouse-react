import { useParams } from "react-router"
import { content } from '../../../data/conteudo-semanas-aulas'
import Main from '../../../components/Main'

const Dia = props => {
    const { id, dia } = useParams()
    const { exercicios, conteudo } = content.conteudo[`semana${id}`].dias[dia];
    console.log(exercicios)

    const items = [
        { refs: `/semana/${id}/${dia}/exercicios`, title: "Exercicios Da Semana", class: `${exercicios ? 'active': ''}` },
        { refs: "/", title: "Voltar Home", class: "active" },
        { refs: `/semana/${id}`, title: "Voltar Incio Semana", class: "active" },
    ]
    return (
        <Main items={items} content={conteudo.length > 0 ? true : false} title={`Semana ${id} dia --> ${dia}`}>
        <ul>
         {conteudo.length > 0 && conteudo.map((item, i)=>(
             <li key={i}>{item}</li>
         ))}
       </ul>
     </Main>
    )
}
export default Dia