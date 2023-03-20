// Step 1: Import React
import * as React from 'react'
import { Link } from 'gatsby'

// Step 2: Define your component
const AboutPage = () => (
    <main>
      <h1>About Me</h1>
      <Link to='/'>home</Link>
      <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
      <h1>Favorite food </h1>
      <p>sushi sushi sushi sushi </p>
      <h1>next vacation destination</h1>
      <p>poland</p>
    </main>
)

export const Head=()=><title>About me</title>


// Step 3: Export your component
export default AboutPage