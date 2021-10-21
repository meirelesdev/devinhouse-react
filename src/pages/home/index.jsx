
import Header from '../../components/header/index'

function Home() { 
  const items = [
    { refs: "semana8", title: "Semana 8", class: "active" },
    { refs: "semana9", title: "Semana 9", class: "active" },
    { refs: "semana10", title: "Semana 10", class: "active" }
  ]
  return (
    <div className="container">
      <Header items={items} />
        <h1>Home</h1>
    </div>
  );
}

export default Home;
