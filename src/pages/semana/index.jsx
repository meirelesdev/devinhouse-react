import { useParams } from "react-router"
import Main from "../../components/Main";
import { content } from '../../data/conteudo-semanas-aulas'

const Semana = props => {
    const { id } = useParams()
    const {dias, conteudo } = content.conteudo[`semana${id}`];
    console.log(dias)
    console.log(conteudo)
    const items = [
        { refs: `/semana/${id}/segunda`, title: "Segunda"},
        { refs: `/semana/${id}/terca`, title: "Terça"},
        { refs: `/semana/${id}/quarta`, title: "Quarta", class: "active" },
        { refs: `/semana/${id}/quinta`, title: "Quinta", class: "active" },
        { refs: `/semana/${id}/sexta`, title: "Sexta", class: "active" },
      ]
    return (
        <Main items={items} title="Conteudo da Semana 8">
        <ul>
         {conteudo.length > 0 && conteudo.map((item, i)=>(
             <li key={i}>{item}</li>
         ))}
       </ul>
     </Main>
    )
}
export default Semana