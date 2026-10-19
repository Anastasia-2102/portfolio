function PhotoControls({ onNext, onPrevious, onColor, onBlackAndWhite }) {
  return (
    <p className="hero-buttons">
      <button onClick={onPrevious}>Previous photo</button>
      <button onClick={onNext}>Next photo</button>
      <button onClick={onBlackAndWhite}>Black and White</button>
      <button onClick={onColor}>In color</button>
      
    </p>
  )
}

export default PhotoControls