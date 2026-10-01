import Header from './Header.jsx'
import About from './About.jsx'
import Skills from './Skills.jsx'
import Greeting from './Greeting.jsx'

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function Fortune() {
  let fortunes = [
    "Keep learning something new every day.",
    "Small steps can lead to big changes.",
    "You are closer than you think."
  ]

  let fortuneIndex = randomNumber(0, fortunes.length - 1)

  return <p>{fortunes[fortuneIndex]}</p>
}

function Footer() {
  let year = new Date().getFullYear()
  return <p>&copy; {year} Anastasia</p>
}

function GitHubLink() {
  let url = "https://github.com/Anastasia-2102"
  let label = "My GitHub"
  return <a href={url}>{label}</a>
}

function ProjectCount() {
  let projects = [
    "Click Lab",
    "Capstone",
    "API Tutorial",
    "Greeting Card Generator",
    "Signup Page",
    "Data Playlist"
  ]

  return <p>I have shipped {projects.length} projects so far.</p>
}

function App() {
  return (
    <div>
      <Header />
      <Greeting />
      <p>Learning to build websites with React.</p>
      <ProjectCount />
      <About />
      <Skills />
      <GitHubLink />
      <Fortune />
      <Footer />
    </div>
  )
}

export default App