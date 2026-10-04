function Links() {
  const github = "https://github.com/Anastasia-2102";
  const portfolio = "https://anastasia-2102.github.io/portfolio/";
  const capstone = "https://anastasia-2102.github.io/capstone/";

  return (
    <p>
      <a href={github}>GitHub</a>{" "}
      <a href={portfolio}>Portfolio</a>{" "}
      <a href={capstone}>Capstone</a>
    </p>
  );
}

export default Links;