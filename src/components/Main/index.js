import { Content } from "../ContentDay"
import Footer from "../Footer"
import Header from "../Header"
import * as C from './Main.styles'

const Main = props => {
  return <>
    <C.Main >
      <Header items={props.screen ? [] : props.items} />
      <h1>{props.title}</h1>
      <Content content={props.content}>
        {props.children}
      </Content>
    </C.Main>
    <hr />
    <Footer />
  </>
}

export default Main