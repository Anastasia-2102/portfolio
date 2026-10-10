import { useState } from 'react'
import builderUrl from './builder-url.js'

function ImageBuilder() {
  const photo = "photo-1642425146609-6c8ff4589d18"

  const [sat, setSat] = useState(0)
  const [sepia, setSepia] = useState(0)
  const [blur, setBlur] = useState(0)

  const showColor = () => {
    setSat(0)
  }

  const showBlackAndWhite = () => {
    setSat(-100)
  }

  const noSepia = () => {
    setSepia(0)
  }

  const showSepia = () => {
    setSepia(80)
  }

  const showSharp = () => {
    setBlur(0)
  }

  const showBlurred = () => {
    setBlur(100)
  }

  const reset = () => {
    setSat(0)
    setSepia(0)
    setBlur(0)
  }
  const address = builderUrl(photo, sat, sepia, blur)
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