import { useParams } from "react-router"
import Main from "../../components/Main";
import { content } from '../../data/conteudo-semanas-aulas'
import { toUpperFirtLetter } from '../../services/functions'

const Semana = () => {
    const { id } = useParams()
    const {dias, conteudo, exercicios } = content.conteudo[`semana${id}`];
    const arrDias = Object.keys(dias)
    const menu = arrDias.map(dia=>{
      const refs =`/semana/${id}/${dia}`
      const title =  `${toUpperFirtLetter(dia)}`
      const hasClass = dias[dia].conteudo.length > 0 ? "active": false
      return {
        refs,
        title,
        class: hasClass
      }
    })
    return (
        <Main items={menu} title={`Conteudo da Semana ${id}`}>
        <ul>
          {exercicios.length > 0 ? <li className="exercicios">Esta semana temos Exercicios</li> : <li className="exercicios">Esta semana não temos Exercicios</li>}
         {conteudo.length > 0 && conteudo.map((item, i)=>(
             <li key={i}>{item}</li>
         ))}
       </ul>
     </Main>
    )
}
export default Semana