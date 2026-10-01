import Header from './Header.jsx'
import About from './About.jsx'
import Skills from './Skills.jsx'
import Greeting from './Greeting.jsx'
import Footer from './Footer.jsx'
import Fortune from './Fortune.jsx'
import GitHubLink from './GitHubLink.jsx'
import ProjectCount from './ProjectCount.jsx'



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