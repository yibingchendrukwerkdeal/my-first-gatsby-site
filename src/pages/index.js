// Step 1: Import React
import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

// Step 2: Define your component
const IndexPage = () => (

  
    // <main>
    //   <h1>Welcome to my Gatsby site!</h1>
    //   <Link to='/about'>about</Link>
    //   <p>I'm making this by following the Gatsby Tutorial.</p>
    // </main>

    <Layout pageTitle="home page haha">
          <p>I'm making this by following the Gatsby Tutorial. this text is children</p>
    </Layout>
    


)

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>Home Page</title>

// Step 3: Export your component
export default IndexPage