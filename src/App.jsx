import Header from './Header.jsx'
import Hero from './Hero.jsx'
import About from './About.jsx'
import Skills from './Skills.jsx'
import Greeting from './Greeting.jsx'
import Footer from './Footer.jsx'
import Fortune from './Fortune.jsx'
import GitHubLink from './GitHubLink.jsx'
import ProjectCount from './ProjectCount.jsx'


import Gallery from "./Gallery.jsx"
import ImageBuilder from './ImageBuilder.jsx'
import Links from "./Links"
import ProjectCard from './ProjectCard.jsx'
import projects from './projects.js'
import "./flex-container.css"

function App() {
  const fortunes = [
  { text: "Keep learning something new every day.", author: "Anonymous" },
  { text: "Small steps can lead to big changes.", author: "Anonymous" },
  { text: "You are closer than you think.", author: "Anonymous" }
]
  return (
    <div className="container">
      <div className="intro">
        <Header />
        <p>Welcome to my Portfolio</p>
        <Links />
        <Hero />
      </div>
        <Greeting />
        <p>I am learning React and building my first portfolio.</p>
        <ProjectCount />
        <About />
        <Skills />
        <GitHubLink />
        <Fortune fortunes={fortunes}/>
      
      <div className="flex-container">
        <ProjectCard project={projects[0]} />
        <ProjectCard project={projects[1]} />
        <ProjectCard project={projects[2]} />
        <ProjectCard project={projects[3]} />
      </div>
      <Gallery />
      <ImageBuilder />
      <Footer />
    </div>
  )
}

export default App