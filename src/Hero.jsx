import imageUrl from './image-url.js'
import './hero.css'

function Hero() {
  const src = imageUrl(1200, 700)
  return (
    <div className="hero">
      <img src={src} alt="MacBook Pro on a wooden table" />
    </div>
  )
}

export default Hero