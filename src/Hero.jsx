import heroPhoto from './hero-photo.js'
import './hero.css'

function Hero() {
  const [src, alt, thumb] = heroPhoto("https://images.unsplash.com/photo-1629317422263-9317e911014a", 300, 200, -20, 20, 0, "MacBook Pro on a wooden table")
  return (
    <div className="hero">
      <img src={src} alt={alt} />
      <h2>Learning, building, and growing every day.</h2>
    </div>
  )
}

export default Hero