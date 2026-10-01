function ClickLabPortfolioCard() {
  let name = "Click Lab"
  let description = "A project where I practiced building interactive features with React."
  let liveUrl = "https://anastasia-2102.github.io/click-lab/"
  let repoUrl = "https://github.com/Anastasia-2102/click-lab"

  return (
    <article>
      <h2>{name}</h2>
      <p>{description}</p>
      <p>
        <a href={liveUrl}>See it live</a> · <a href={repoUrl}>Read the code</a>
      </p>
    </article>
  )
}

export default ClickLabPortfolioCard