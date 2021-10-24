
export const Post = ({ user, post }) => {
    return (
        <div className="post">
            <div className="user-info">
                <div className="user-img">
                    <img srcSet="https://thispersondoesnotexist.com/image" alt={`Foto do Usuario ${user.name}`}/>
                </div>
                <div className="user">
                    <p>{user.name}</p>
                    <p>{user.lastTimePost}</p>
                </div>
                <span className="material-icons">more_vert</span>
            </div>
            <div className="post-info">
                <p>{post.description}</p>
                <img srcSet={post.img} alt="imagem do post"/>
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
}