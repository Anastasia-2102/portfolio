import imageUrl from './image-url.js'

const heroPhoto = ({ photo, width, height, brightness, sepia, sat, description }) => {
  const src = imageUrl({ photo, width, height, brightness, sepia, sat })
  const alt = description
  const thumb = imageUrl({ photo, width: 300, height: 200, brightness, sepia, sat })
  return {src, alt, thumb}
}

export default heroPhoto