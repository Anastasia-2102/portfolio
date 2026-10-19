function PhotoControls({ onNext, onPrevious, onColor, onBlackAndWhite, onReset, position,
  total }) {
  return (
  <div>
    <p>{position} of {total}</p>
    <p className="hero-buttons">
      <button onClick={onPrevious}>Previous photo</button>
      <button onClick={onNext}>Next photo</button>
      <button onClick={onBlackAndWhite}>Black and White</button>
      <button onClick={onColor}>In color</button>
      <button onClick={onReset}>Reset</button>
    </p>
  </div>
  )
}

export default PhotoControls