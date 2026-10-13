import { useState } from 'react'
import projects from './projects.js'

function CapstonePortfolioCard() {
  const project = projects[0]
  const [likes, setLikes] = useState(
   Number(localStorage.getItem("capstone-likes"))
  )
  const [open, setOpen] = useState(false)
  const addLike = () => {
  const next = likes + 1
  setLikes(next)
  localStorage.setItem("capstone-likes", next)
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
    <article className="card-jade">
      <h2>{project.name}</h2>
      <p>{text}</p>
      <button onClick={toggleOpen}>{label}</button>
      <p className="card-buttons">
        <a href={project.liveUrl} role="button">See it live</a> 
        <a href={project.repoUrl} role="button" className="outline">Read the code</a>
        <button onClick={addLike}>Like {likes}</button>
        <button onClick={removeLike}>Unlike</button>
        <button onClick={resetLikes}>Reset</button>
      </p>
      
    </article>
  )
}

export default CapstonePortfolioCard