import { useState } from 'react'

function DataPlaylistPortfolioCard() {
  const name = "Data Playlist"
  const description = "Songs from a chart, served by an API I deployed myself."
  const details = "I built this project to practice working with an API and displaying song data."
  const liveUrl = "https://anastasia-2102.github.io/data-playlist/"
  const repoUrl = "https://github.com/Anastasia-2102/data-playlist"

  const [likes, setLikes] = useState(
    Number(localStorage.getItem ("data-playlist-likes"))
 )
  const [open, setOpen] = useState(false)
  const addLike = () => {
  const next = likes + 1
  setLikes (next)
  localStorage.setItem ("data-playlist-likes", next)
 }
  const toggleOpen = () => {
  setOpen(!open)
 }
  const removeLike = () => {
  if (likes > 0) {
    setLikes(likes - 1)
  }
 }
  const resetLikes = () => {
  setLikes(0)
 }
  let label = "Show More"

  if (open) {
  label = "Show Less"
 }
  return (
    <article className="card-azure">
      <h2>{name}</h2>
      <p>{description}</p>
      {open && <p>{details}</p>}
      <button onClick={toggleOpen}>{label}</button>
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