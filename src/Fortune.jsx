import { useState } from 'react'
const randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

function Fortune() {
  const fortunes = [
    "Keep learning something new every day.",
    "Small steps can lead to big changes.",
    "You are closer than you think."
  ]

  const [index, setIndex] = useState(0)
  const newFortune = () => {
  setIndex(randomNumber(0, fortunes.length - 1))
}

  return (
  <div>
    <p>{fortunes[index]}</p>
    <button onClick={newFortune}>New Fortune</button>
  </div>
 )
}

export default Fortune