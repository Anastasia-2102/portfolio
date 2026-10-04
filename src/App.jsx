import Header from './Header.jsx'
import Hero from './Hero.jsx'
import About from './About.jsx'
import Skills from './Skills.jsx'
import Greeting from './Greeting.jsx'
import Footer from './Footer.jsx'
import Fortune from './Fortune.jsx'
import GitHubLink from './GitHubLink.jsx'
import ProjectCount from './ProjectCount.jsx'
import CapstonePortfolioCard from './CapstonePortfolioCard.jsx'
import ClickLabPortfolioCard from './ClickLabPortfolioCard.jsx'
import DataPlaylistPortfolioCard from './DataPlaylistPortfolioCard.jsx'
import GreetingCardGeneratorPortfolioCard from './GreetingCardGeneratorPortfolioCard.jsx'
import Gallery from "./Gallery.jsx"
import Links from "./Links"
import "./flex-container.css"

function App() {
  return (
    <div className="container">
      <Header />
      <p>Welcome to my Portfolio</p>
      <Links />
      <Hero />
      <Greeting />
      <p>I am learning React and building my first portfolio.</p>
      <ProjectCount />
      <About />
      <Skills />
      <GitHubLink />
      <Fortune />
      <div className="flex-container">
        <CapstonePortfolioCard />
        <ClickLabPortfolioCard />
        <DataPlaylistPortfolioCard />
        <GreetingCardGeneratorPortfolioCard />
      </div>
      <Gallery />
      <Footer />
    </div>
  )
}

export default App