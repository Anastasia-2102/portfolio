import { useState } from 'react'
import heroPhoto from './hero-photo.js'
import './hero.css'

const photos = [
  "photo-1629317422263-9317e911014a",
  "photo-1631557777232-a2632ae3c67d",
  "photo-1668605335560-b0786d21fd85"
]

const descriptions = [
  "MacBook Pro on a wooden table",
  "Laptop and stationery on a desk",
  "Laptop, notebooks, and colorful markers on a desk"
]

function Hero() {
  const [sat, setSat] = useState(0)
  const [index, setIndex] = useState(0)
  const showColor = () => {
    setSat(0)
  }
  const showBlackAndWhite = () => {
    setSat(-100)
  }
  const nextPhoto = () => {
  if (index === photos.length - 1) {
    setIndex(0)
  } else {
    setIndex(index + 1)
  }
 }
  const previousPhoto = () => {
  if (index === 0) {
    setIndex(photos.length - 1)
  } else {
    setIndex(index - 1)
  }
 }
  const [src, alt, thumb] = heroPhoto(photos[index], 300, 200, -20, 20, sat, descriptions[index])
  return (
  <div>
    <div className="hero">
      <img src={src} alt={alt} />
      <p>Photo {index + 1} of {photos.length}</p>
      <h2>Learning, building, and growing every day.</h2>
    </div>
    <p className="hero-buttons">
      <button onClick={showColor}>Color</button>
      <button onClick={showBlackAndWhite}>Black and White</button>
      <button onClick={previousPhoto}>Previous</button>
      <button onClick={nextPhoto}>Next</button>
    </p>
  </div>
)
}

export default Hero