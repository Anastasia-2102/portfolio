import imageUrl from './image-url.js'

const heroPhoto = (photo, width, height, brightness, sepia, description) => {
  const src = imageUrl(photo, width, height, brightness, sepia)
  const alt = description
  return [src, alt]
}

export default heroPhoto