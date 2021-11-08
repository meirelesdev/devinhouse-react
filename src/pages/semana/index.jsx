import { useParams } from "react-router"
import { Link } from "react-router-dom";
import Main from "../../components/Main";
import { content } from '../../data/conteudo-semanas-aulas'
import { toUpperFirtLetter } from '../../services/functions'

const Semana = () => {
  const { id } = useParams()
  const { dias, conteudo, exercicios, projetos } = content.conteudo[`semana${id}`];
  const arrDias = Object.keys(dias)
  const menu = arrDias.map(dia => {
    const refs = `/semana/${id}/${dia}`
    const title = `${toUpperFirtLetter(dia)}`
    const hasClass = dias[dia].conteudo.length > 0 ? "active" : false
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
        {conteudo.length > 0 && conteudo.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <div className="projetos">
        {projetos.length > 0 && (
          projetos.map((projeto, key) => (
            <Link key={key} to={projeto.url} target={projeto.target}>
              <div  className="projeto">
                <h3>{projeto.title}</h3>
                <p >{projeto.description}</p>
              </div>
            </Link>
          ))
        )}
      </div>
    </Main>
  )
}
export default Semana