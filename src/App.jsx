import Header from './Header.jsx'
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



function App() {
  return (
    <div className="container">
      <Header />
      <Greeting />
      <p>Learning to build websites with React.</p>
      <ProjectCount />
      <About />
      <Skills />
      <GitHubLink />
      <Fortune />
      <CapstonePortfolioCard />
      <ClickLabPortfolioCard />
      <DataPlaylistPortfolioCard />
      <Footer />
    </div>
  )
}

export default App