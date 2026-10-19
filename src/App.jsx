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
import Section from './Section.jsx'

function App() {
  const live = projects.filter((project) => project.status === "live")
  
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
      
    <Section title="Projects">  
      <div className="flex-container">
        {live.map((project) => <ProjectCard key={project.name} project={project} />)}
      </div>
    </Section>  
      <Gallery />
      <ImageBuilder />
      <Footer />
    </div>
  )
}

export default App