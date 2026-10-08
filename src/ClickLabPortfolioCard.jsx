import { useState } from 'react'

function ClickLabPortfolioCard() {
  const name = "Click Lab"
  const description = "An animal quiz game where you answer questions about animals."
  const liveUrl = "https://anastasia-2102.github.io/click-lab/"
  const repoUrl = "https://github.com/Anastasia-2102/click-lab"

  const [likes, setLikes] = useState(0)

  const addLike = () => {
    setLikes(likes + 1)
  }
  return (
    <article className="card-pumpkin">
      <h2>{name}</h2>
      <p>{description}</p>
      <p>
        <a href={liveUrl}>See it live</a> · <a href={repoUrl}>Read the code</a>
      </p>
      <button onClick={addLike}>Like {likes}</button>
    </article>
  )
}

export default ClickLabPortfolioCard