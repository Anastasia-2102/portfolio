import { useState } from 'react'

function ClickLabPortfolioCard() {
  const name = "Click Lab"
  const description = "An animal quiz game where you answer questions about animals."
  const details = "I built this project to practice JavaScript, event handling, and interactive game features."
  const liveUrl = "https://anastasia-2102.github.io/click-lab/"
  const repoUrl = "https://github.com/Anastasia-2102/click-lab"

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

  let label = "Show More"

  if (open) {
  label = "Show Less"
}
  return (
    <article className="card-pumpkin">
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

export default ClickLabPortfolioCard