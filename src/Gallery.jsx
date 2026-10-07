import imageUrl from "./image-url.js"

const photo1 = "https://images.unsplash.com/photo-1570993492881-25240ce854f4"
const photo2 = "https://images.unsplash.com/photo-1555099962-4199c345e5dd"
const photo3 = "https://images.unsplash.com/photo-1621348016212-535c972093db"

function Gallery() {
  return (
    <div className="grid">
      <img src={imageUrl(photo1, 400, 250, 0)} alt="Workspace" />
      <img src={imageUrl(photo2, 400, 250, 0)} alt="Coding" />
      <img src={imageUrl(photo3, 400, 250, 0)} alt="Creative workspace" />
    </div>
  )
}

export default Gallery