const randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

function Fortune() {
  let fortunes = [
    "Keep learning something new every day.",
    "Small steps can lead to big changes.",
    "You are closer than you think."
  ]

  let fortuneIndex = randomNumber(0, fortunes.length - 1)

  return <p>{fortunes[fortuneIndex]}</p>
}

export default Fortune