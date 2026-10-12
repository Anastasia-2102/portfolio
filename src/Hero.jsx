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
  const [settings, setSettings] = useState({
  index: 0, sat: 0, sepia: 0
})

  const [blur, setBlur] = useState(0)

  const [note, setNote] = useState("")

  const readNote = (event) => {
  setNote(event.target.value)
  }

  const readSepia = (event) => {
    setSettings({ ...settings, sepia: Number(event.target.value) })
  }

  const showColor = () => {
    setSettings({ ...settings, sat: 0 })
  }

  const showBlackAndWhite = () => {
    setSettings({ ...settings, sat: -100 })
  }
  const moreBlur = () => {
    setBlur(blur + 100)
  }

  const removeBlur = () => {
    setBlur(0)
  }

  const nextPhoto = () => {
    if (settings.index === photos.length - 1) {
      setSettings({ ...settings, index: 0 })
    } else {
      setSettings({ ...settings, index: settings.index + 1 })
    }
  }

  const previousPhoto = () => {
    if (settings.index === 0) {
      setSettings({ ...settings, index: photos.length - 1 })
    } else {
      setSettings({ ...settings, index: settings.index - 1 })
    }
  }
  const { src, alt, thumb } = heroPhoto({
  photo: photos[settings.index],
  width: 300,
  height: 200,
  brightness: -20,
  sepia: settings.sepia,
  sat: settings.sat,
  description: descriptions[settings.index]
})

const caption = "Photo " + (settings.index + 1) + " of " + photos.length + ": " + descriptions[settings.index]
  return (
  <div>
    <div className="hero">
      
      <img src={src + "&blur=" + blur} alt={alt} />
      <p>{caption}</p>
      <h2>Learning, building, and growing every day.</h2>
    </div>
    <p className="hero-buttons">
      <button onClick={showColor}>Color</button>
      <button onClick={showBlackAndWhite}>Black and White</button>
      <button onClick={moreBlur}>More Blur</button>
      <button onClick={removeBlur}>No Blur</button>
      <button onClick={previousPhoto}>Previous</button>
      <button onClick={nextPhoto}>Next</button>
    </p>
    <input type="range" min="0" max="100" step="10" value={settings.sepia} onChange={readSepia} />
    <p>Sepia: {settings.sepia}</p>
    <input onChange={readNote} />
    <p>{note}</p>
  </div>
)
}

export default Hero