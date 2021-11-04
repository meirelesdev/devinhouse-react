import { Link } from 'react-router-dom'
import Menu from '../Menu/index'

const Header = ({ items, ...props }) => {
  return (
    <header className={props.screen}>
      <Link to="/">
        <h1 className="logo">
          DevInHouse
        </h1>
      </Link>
      <Menu items={items} />
    </header>
  )
}
export default Header