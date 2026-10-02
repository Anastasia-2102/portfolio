function ClickLabPortfolioCard() {
  const name = "Click Lab"
  const description = "An animal quiz game where you answer questions about animals."
  const liveUrl = "https://anastasia-2102.github.io/click-lab/"
  const repoUrl = "https://github.com/Anastasia-2102/click-lab"

  return (
    <article className="card-pumpkin">
      <h2>{name}</h2>
      <p>{description}</p>
      <p>
        <a href={liveUrl}>See it live</a> · <a href={repoUrl}>Read the code</a>
      </p>
    </article>
  )
}

export default ClickLabPortfolioCard