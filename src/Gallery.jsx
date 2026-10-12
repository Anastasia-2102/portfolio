import imageUrl from "./image-url.js"

const photo1 = "photo-1570993492881-25240ce854f4"
const photo2 = "photo-1555099962-4199c345e5dd"
const photo3 = "photo-1621348016212-535c972093db"

function Gallery() {
  return (
    <div className="grid">
      <img
  src={imageUrl({ photo: photo1, width: 400, height: 250, brightness: 0, sepia: 0 })}
  alt="Workspace" 
      />
      <img
  src={imageUrl({ photo: photo2, width: 400, height: 250, brightness: 0, sepia: 0 })}
  alt="Coding"
      />
      <img
  src={imageUrl({ photo: photo3, width: 400, height: 250, brightness: 0, sepia: 0 })}
  alt="Creative workspace"
      />
    </div>
  )
}

export default Gallery