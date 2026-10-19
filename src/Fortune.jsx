import { useState } from 'react'
const randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

function Fortune({fortunes}) {
  

  const [index, setIndex] = useState(0)
  const newFortune = () => {
  setIndex(randomNumber(0, fortunes.length - 1))
}
  const { text, author } = fortunes[index]
  return (
  <div className="fortune">
    <p>
      {text}
      <br />
      <small>{author}</small>
    </p>
    <button onClick={newFortune}>New Fortune</button>
  </div>
 )
}

export default Fortune