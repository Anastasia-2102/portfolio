import { useState } from 'react'

function GreetingCardGeneratorPortfolioCard() {
  const name = "Greeting Card Generator"
  const description = "A project where I practiced building a greeting card generator."
  const liveUrl = "https://anastasia-2102.github.io/greeting-card-generator/"
  const repoUrl = "https://github.com/Anastasia-2102/greeting-card-generator"

  const [likes, setLikes] = useState(0)

  const addLike = () => {
    setLikes(likes + 1)
  }
  return (
    <article className="card-violet">
      <h2>{name}</h2>
      <p>{description}</p>
      <p>
        <a href={liveUrl}>See it live</a> · <a href={repoUrl}>Read the code</a>
      </p>
      <button onClick={addLike}>Like {likes}</button>
    </article>
  )
}

export default GreetingCardGeneratorPortfolioCard