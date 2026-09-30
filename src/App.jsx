import Header from './Header.jsx'

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function Fortune() {
  let fortunes = [
    "Keep learning something new every day.",
    "Small steps can lead to big changes.",
    "You are closer than you think."
  ]

  let fortuneIndex = randomNumber(0, fortunes.length - 1)

  return <p>{fortunes[fortuneIndex]}</p>
}

function Footer() {
  let year = new Date().getFullYear()
  return <p>&copy; {year} Anastasia</p>
}

function App() {
  return (
    <div>
      <Header />
      <p>Learning to build websites with React.</p>
      <Fortune />
      <Footer />
    </div>
  )
}

export default App