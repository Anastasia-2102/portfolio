function LikeButton({ likes, onLike }) {
let label = "Like"

if (likes > 0) {
    label = "Liked"
}

return <button onClick={onLike}>{label} {likes}</button>
}

export default LikeButton