function Greeting() {
  let hour = new Date().getHours()
  let greeting = "Good evening"

  if (hour < 12) {
    greeting = "Good morning"
  } else if (hour < 18) {
    greeting = "Good afternoon"
  }

  return <p>{greeting}, and welcome to my portfolio.</p>
}

export default Greeting