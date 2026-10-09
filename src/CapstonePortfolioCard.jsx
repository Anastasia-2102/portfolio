import { useState } from 'react'

function CapstonePortfolioCard() {
  const name = "National Parks Capstone"
  const description = "A national parks website I built to help families find parks to visit."
  const details = "I built it in Level 2 to practice working with an API and displaying national park information."
  const liveUrl = "https://anastasia-2102.github.io/capstone/"
  const repoUrl = "https://github.com/Anastasia-2102/capstone"

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
  let text = description
if (open) {
  text = description + " " + details
}

let label = "Show More"
if (open) {
  label = "Show Less"
}
  return (
    <article className="card-jade">
      <h2>{name}</h2>
      <p>{description}</p>
      {open && <p>{details}</p>}
      <button onClick={toggleOpen}>{label}</button>
      <p className="card-buttons">
        <a href={liveUrl} role="button">See it live</a> 
        <a href={repoUrl} role="button" className="outline">Read the code</a>
        <button onClick={addLike}>Like {likes}</button>
        <button onClick={removeLike}>Unlike</button>
        <button onClick={resetLikes}>Reset</button>
      </p>
      
    </article>
  )
}

export default CapstonePortfolioCard