import imageUrl from './image-url.js'

const heroPhoto = (width, height, description) => {
  const src = imageUrl(width, height)
  const alt = description
  return [src, alt]
}

export default heroPhoto