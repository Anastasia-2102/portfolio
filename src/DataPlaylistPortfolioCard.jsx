import { useState } from 'react'

function DataPlaylistPortfolioCard() {
  const name = "Data Playlist"
  const description = "Songs from a chart, served by an API I deployed myself."
  const liveUrl = "https://anastasia-2102.github.io/data-playlist/"
  const repoUrl = "https://github.com/Anastasia-2102/data-playlist"

  const [likes, setLikes] = useState(0)

  const addLike = () => {
    setLikes(likes + 1)
  }
  const removeLike = () => {
  if (likes > 0) {
    setLikes(likes - 1)
  }
}
  const resetLikes = () => {
  setLikes(0)
}
  return (
    <article className="card-azure">
      <h2>{name}</h2>
      <p>{description}</p>
      <p>
        <a href={liveUrl}>See it live</a> · <a href={repoUrl}>Read the code</a>
      </p>
      <button onClick={addLike}>Like {likes}</button>
      <button onClick={removeLike}>Unlike</button>
      <button onClick={resetLikes}>Reset</button>
    </article>
  )
}

export default DataPlaylistPortfolioCard