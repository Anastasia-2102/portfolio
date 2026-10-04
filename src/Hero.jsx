import heroPhoto from './hero-photo.js'
import './hero.css'

function Hero() {
  const [src, alt] = heroPhoto(1200, 500, "Flowers in a clay vase")
  return (
    <div className="hero">
      <img src={src} alt={alt} />
      <h2>Learning, building, and growing every day.</h2>
    </div>
  )
}

export default Hero