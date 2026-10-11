import heroPhoto from './hero-photo.js'
import './footer.css'

function Footer() {
  const year = new Date().getFullYear()
  const github = "https://github.com/Anastasia-2102"
  const [, alt, thumb] = heroPhoto({
  photo: "photo-1629317422263-9317e911014a", width: 300, height: 200, brightness: -20, sepia: 20, sat: 0, description: "MacBook Pro on a wooden table"
})
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