import './style.css'

export const Contato = ({ photo, name, description }) => {
    return (
        <div className="contato">
            <img srcSet={photo} alt={`Foto do contato ${name}`} />
            <div className="info">
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
        </div>
    )
}