import './SectionTitle.css'
import React from 'react'
import Menu from '../MenuEx/Menu'
import { Link } from 'react-router-dom'

const SectionTitle = props => (
    <main className="SectionTitle">
        <aside className="menu">
            <nav>
                <Link to="/">Início</Link>
                <Link to="/useState">useState()</Link>
                <Link to="/useEffect">useEffect()</Link>
            </nav>
        </aside>
        <h3>{props.title}</h3>
        <section className="content">
            {props.children}
        </section>
    </main>
)

export default SectionTitle