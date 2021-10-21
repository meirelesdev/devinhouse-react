import { Link } from 'react-router-dom'

const Menu = (props)=>{
  const { items } = props
  return (
    <nav className="menu">
      {items.map((item, index) => (
        <Link key={index} to={item.refs} className={item.class ?? "disabled"}>{item.title}</Link>
      ))}
  </nav>
  )
} 

export default Menu