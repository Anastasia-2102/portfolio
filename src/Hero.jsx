import { useState } from 'react'
import heroPhoto from './hero-photo.js'
import './hero.css'

function Hero() {
  const [sat, setSat] = useState(0)
  const showColor = () => {
    setSat(0)
  }
  const showBlackAndWhite = () => {
    setSat(-100)
  }
  const [src, alt, thumb] = heroPhoto("https://images.unsplash.com/photo-1629317422263-9317e911014a", 300, 200, -20, 20, sat, "MacBook Pro on a wooden table")
  return (
  <div>
    <div className="hero">
      <img src={src} alt={alt} />
      <h2>Learning, building, and growing every day.</h2>
    </div>
    <p>
      <button onClick={showColor}>Color</button>
      <button onClick={showBlackAndWhite}>Black and White</button>
    </p>
  </div>
)
}

export default Hero