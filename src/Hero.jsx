import { useState } from 'react'
import heroPhoto from './hero-photo.js'
import './hero.css'
import photos from './photos.js'
import PhotoControls from './PhotoControls.jsx'



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
  const { id, description } = photos[settings.index]
  const { src, alt, thumb } = heroPhoto({
  photo: id,
  width: 300,
  height: 200,
  brightness: -20,
  sepia: settings.sepia,
  sat: settings.sat,
  description: description
})

const caption = `Photo ${settings.index + 1} of ${photos.length}: ${description}`
  return (
  <div>
    <div className="hero">
      
      <img src={src + "&blur=" + blur} alt={alt} />
      <h2>Learning, building, and growing every day.</h2>
    </div>
      <p>{caption}</p>
    <PhotoControls
      onNext={nextPhoto}
      onPrevious={previousPhoto}
      onColor={showColor}
      onBlackAndWhite={showBlackAndWhite}
      position={settings.index + 1}
      total={photos.length}
    />
    <input type="range" min="0" max="100" step="10" value={settings.sepia} onChange={readSepia} />
    <p>Sepia: {settings.sepia}</p>
    <input onChange={readNote} />
    <p>{note}</p>
  </div>
)
}

export default Hero