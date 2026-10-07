import imageUrl from './image-url.js'

const heroPhoto = (photo, width, height, brightness, sepia, description) => {
  const src = imageUrl(photo, width, height, brightness, sepia)
  const alt = description
  const thumb = imageUrl(photo, 300, 200, brightness, sepia)
  return [src, alt, thumb]
}

export default heroPhoto