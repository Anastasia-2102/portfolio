import { useState } from 'react'

function GreetingCardGeneratorPortfolioCard() {
  const name = "Greeting Card Generator"
  const description = "A project where I practiced building a greeting card generator."
  const details = "I built this project using HTML and JavaScript to generate greeting cards with random messages and a surprise after five cards."
  const liveUrl = "https://anastasia-2102.github.io/greeting-card-generator/"
  const repoUrl = "https://github.com/Anastasia-2102/greeting-card-generator"

  const [likes, setLikes] = useState(0)
  const [open, setOpen] = useState(false)
  const addLike = () => {
    setLikes(likes + 1)
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
    <article className="card-violet">
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

export default GreetingCardGeneratorPortfolioCard