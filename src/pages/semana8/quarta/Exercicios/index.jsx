import './style.css'
import { Button } from './Button'
import { Contato } from './Contato'
import { Post } from './Post'

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
    const postComponent = `export const Post = ({ user, post }) => {
        return (
            <div className="post">
                <div className="user-info">
                    <div className="user-img">
                        <img srcSet="https://thispersondoesnotexist.com/image" />
                    </div>
                    <div className="user">
                        <p>{user.name}</p>
                        <p>{user.lastTimePost}</p>
                    </div>
                    <span className="material-icons">more_vert</span>
                </div>
                <div className="post-info">
                    <p>{post.description}</p>
                    <img srcSet={post.img} />
                </div>
                <div className="comments-info">
                    <div className="comments">
                        <span className="material-icons favorite">favorite</span>
                        <p>Commments</p>
                        <p>Share</p>
                    </div>
                    <div className="likes">
                        Liked by <strong>John dow & 25 others</strong>
                    </div>
                </div>
            </div>
        )
    }`

    const user = { 
        name: "Daniel",
        lastTimePost:"5m"
    }
    const post = { 
        img: "https://i1.wp.com/mercadoeconsumo.com.br/wp-content/uploads/2019/04/Que-comida-saud%C3%A1vel-que-nada-brasileiro-gosta-de-fast-food-1024x683.jpg", 
        description:"Lorem Ipsum dolor sit amet, consectureru",
        comments: []
    }
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
                    <Button bg="black" text="Get Stated" />
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
                <li>
                    <h4>Ex 6 Componente de Post de rede social</h4>
                    <p>
                    Resposta: O componente post contem dois objetos como propriedade uma com os dados do usuario e outra com os dados do post.
                        Codigo do componente Post:
                    </p>
                    <pre>
                        {postComponent}
                    </pre>
                    <Post
                        user={user}
                        post={post}
                         />
                </li>
            </ul>
        </main>
    )
}

export default Semana8QuartaExercicios