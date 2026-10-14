import { useState } from 'react'
import projects from './projects.js'

function ClickLabPortfolioCard() {
  const project = projects[1]
  const [likes, setLikes] = useState(
     Number(localStorage.getItem("click-lab-likes"))
  )
  const [open, setOpen] = useState(false)
  const addLike = () => {
  const next = likes + 1
  setLikes(next)
  localStorage.setItem("click-lab-likes", next)
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
    <article className="card-pumpkin">
      <h2>{project.name}</h2>
      <p>{text}</p>
      <div className="description-control">
        <button onClick={toggleOpen}>{label}</button>
      </div>
      <div className="card-buttons">
        <a className="project-link" href={project.liveUrl} role="button">See it live</a>
        <a className="project-link outline" href={project.repoUrl} role="button">Read the code</a>
        <div className="like-controls">
          <button className="small-button" onClick={addLike}>Like {likes}</button>
          <button className="small-button" onClick={removeLike}>Unlike</button>
          <button className="small-button" onClick={resetLikes}>Reset</button>
        </div>
      </div>
    </article>
  )
}

export default ClickLabPortfolioCard