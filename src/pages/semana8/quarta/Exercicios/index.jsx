import './style.css'
import { Button } from './Button'
import { Contato } from './Contato'

const Semana8QuartaExercicios = () => {
    const component = `export const Menu = (props) => <h1>{props.title}</h1>`
    const condicional = `export const Menu = (props) => {
        return (
            {props.title} ? <h1>{props.title}</h1> : <h1>Titulo Padrão</h1>
            )`
    const buttonText = `export const Button = (props) => (
        <button style={{backgroundColor: props.bg}}>{props.text}</button>
        )`
    const contato = `export const Contato = ({ photo, name, description }) => {
        return (
            <div className="contato">
                <img srcSet={photo} />
                <div className="info">
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>
        )
    }`

    return (
        <main className="container">
            <h1>Lista de Exercicios da Semana 8</h1>
            <ul>
                <li>
                    <h4>Ex 1 Componentes </h4>
                    <p>Resposta: Componentes são trechos de codigo reaproveitaveis</p>
                </li>
                <li>
                    <h4>Ex 2 Props</h4>
                    <p>Resposta: Componentes são variaveis que usamos para guarda valores de um componente</p>
                    Exemplo:
                    <pre>
                        {component}
                    </pre>
                </li>
                <li>
                    <h4>Ex 3 Renderização condicional</h4>
                    Resposta: Renderização condicional referece a quando tenho um elemento que so quero mostrar dependendo de alguma condição no meu codigo
                    <p>
                        Exemplo:
                        Neste Exemplo temos o component h1 renderizado com um titulo padrão caso o titulo não seja passado como propriedade
                    </p>
                    <pre>
                        {condicional}
                    </pre>
                </li>
                <li>
                    <h4>Ex 4 Componente {"<Button />"}</h4>
                    <p>
                        Codigo do Botão:
                    </p>
                    <pre>
                        {buttonText}
                    </pre>
                    <Button bg="red" text="Get Stated" />
                </li>
                <li>
                    <h4>Ex 5 Componente de Lista de Contatos</h4>
                    <p>
                        Codigo do componente Contato:
                    </p>
                    <pre>
                        {contato}
                    </pre>
                    <Contato name="Daniel" description="Daniel é um desenvolvedor de Software top." photo="https://thispersondoesnotexist.com/image" />
                    <Contato name="João" description="João é um desenvolvedor de Software top." photo="https://thispersondoesnotexist.com/image" />
                    <Contato name="Mario" description="Mario é um desenvolvedor de Software top." photo="https://thispersondoesnotexist.com/image" />
                    <Contato name="Antonio" description="Antonio é um desenvolvedor de Software top." photo="https://thispersondoesnotexist.com/image" />
                </li>
            </ul>
        </main>
    )
}

export default Semana8QuartaExercicios