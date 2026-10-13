import { useState } from 'react'
import projects from './projects.js'

function DataPlaylistPortfolioCard() {
  const project = projects[2]
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

  let text = project.description
  let label = "Show More"
  if (open) {
  text = `${project.description} ${project.details}`
  label = "Show Less"
}
 
  return (
    <article className="card-azure">
      <h2>{project.name}</h2>
      <p>{text}</p>
      <button onClick={toggleOpen}>{label}</button>
      <p>
        <a href={project.liveUrl}>See it live</a> · <a href={project.repoUrl}>Read the code</a>
      </p>
      <button onClick={addLike}>Like {likes}</button>
      <button onClick={removeLike}>Unlike</button>
      <button onClick={resetLikes}>Reset</button>
    </article>
  )
}

export default DataPlaylistPortfolioCard