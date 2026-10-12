import { useState } from 'react'
import builderUrl from './builder-url.js'

function ImageBuilder() {
  const photo = "photo-1642425146609-6c8ff4589d18"

  const [settings, setSettings] = useState({
  sat: 0, sepia: 0, blur: 0
})

  const showColor = () => {
  setSettings({ ...settings, sat: 0 })
}

const showBlackAndWhite = () => {
  setSettings({ ...settings, sat: -100 })
}

const noSepia = () => {
  setSettings({ ...settings, sepia: 0 })
}

const showSepia = () => {
  setSettings({ ...settings, sepia: 80 })
}

const showSharp = () => {
  setSettings({ ...settings, blur: 0 })
}

const showBlurred = () => {
  setSettings({ ...settings, blur: 100 })
}

  const reset = () => {
  setSettings({ sat: 0, sepia: 0, blur: 0 })
}
  const address = builderUrl({
  photo, sat: settings.sat, sepia: settings.sepia, blur: settings.blur
})
  return (
    <section>
      <h2>Image Builder</h2>
      <img src={address} alt="Image builder preview" />
      <p>{address}</p>

      <p>
        <button onClick={showColor}>Color</button>
        <button onClick={showBlackAndWhite}>Black and White</button>
      </p>

      <p>
        <button onClick={noSepia}>No Sepia</button>
        <button onClick={showSepia}>Sepia</button>
      </p>

      <p>
        <button onClick={showSharp}>Sharp</button>
        <button onClick={showBlurred}>Blurred</button>
      </p>

      <button onClick={reset}>Reset</button>
    </section>
  )
}

export default ImageBuilder