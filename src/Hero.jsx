import imageUrl from './image-url.js'
import './hero.css'

function Hero() {
  const src = imageUrl(600, 300, -20)
  return (
    <div className="hero">
      <img src={src} alt="MacBook Pro on a wooden table" />
      <h2>Learning, building, and growing every day.</h2>
    </div>
  )
}

export default Hero