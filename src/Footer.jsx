function Footer() {
  const year = new Date().getFullYear()
  const github = "https://github.com/Anastasia-2102"
  return (
   <div>
     <p>&copy; {year} Anastasia</p>
     <p>
      <a href={github}>My GitHub</a>
     </p>
   </div>
  )
}


export default Footer