import { useState } from 'react'
const randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

function Fortune() {
  const fortunes = [
     { text: "Keep learning something new every day.", author: "Anonymous" },
     {text: "Small steps can lead to big changes.", author: "Anonymous"},
     {text: "You are closer than you think.", author: "Anonymous"}
  ]

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