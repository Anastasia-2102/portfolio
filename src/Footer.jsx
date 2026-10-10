import heroPhoto from './hero-photo.js'
import './footer.css'

function Footer() {
  const year = new Date().getFullYear()
  const github = "https://github.com/Anastasia-2102"
  const [, alt, thumb] = heroPhoto(
  "photo-1629317422263-9317e911014a", 300, 200, -20, 20, 0, "MacBook Pro on a wooden table"
)
  return (
   <footer>
     <p>&copy; {year} Anastasia</p>
     <p>
      <a href={github}>My GitHub</a>
     </p>
     <div className="footer-photo">
      <img src={thumb} alt={alt} width="300"/>
     </div> 
   </footer>
  )
}


export default Footer