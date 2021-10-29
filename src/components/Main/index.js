import { Content } from "../ContentDay"
import Footer from "../Footer"
import Header from "../Header"

const Main = props => {
  return <>
    <main className="container">
      <Header items={props.items} />
      <h1>{props.title}</h1>
      <Content content={props.content}>
        {props.children}
      </Content>
    </main>
    <hr />
    <Footer />
  </>
}

export default Main