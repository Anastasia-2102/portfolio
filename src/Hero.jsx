import imageUrl from './image-url.js'
import './hero.css'

function Hero() {
  const photo = "https://images.unsplash.com/photo-1629317422263-9317e911014a"
  const src = imageUrl(photo, 300, 200, -20)
  return (
    <div className="hero">
      <img src={src} alt="MacBook Pro on a wooden table" />
      <h2>Learning, building, and growing every day.</h2>
    </div>
  )
}

export default Hero