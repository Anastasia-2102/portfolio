function DataPlaylistPortfolioCard() {
  let name = "Data Playlist"
  let description = "Songs from a chart, served by an API I deployed myself."
  let liveUrl = "https://anastasia-2102.github.io/data-playlist/"
  let repoUrl = "https://github.com/Anastasia-2102/data-playlist"

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

export default DataPlaylistPortfolioCard