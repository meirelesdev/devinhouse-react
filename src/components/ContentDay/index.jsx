export const Content = ({ children, ...props }) => {
    return (
        <section>
            <div className="content">
                {props.content && <h2>Conteúdo do dia</h2>}
                {children}
            </div>
        </section>
    )
}