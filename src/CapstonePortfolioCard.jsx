function CapstonePortfolioCard() {
  let name = "National Parks Capstone"
  let description = "A national parks website I built to help families find parks to visit."
  let liveUrl = "https://anastasia-2102.github.io/capstone/"
  let repoUrl = "https://github.com/Anastasia-2102/capstone"

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

export default CapstonePortfolioCard