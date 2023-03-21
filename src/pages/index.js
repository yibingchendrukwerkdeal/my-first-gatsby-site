// Step 1: Import React
import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

import Seo from '../components/seo';





// Step 2: Define your component
const IndexPage = () => {

   

  

      return( 
      <Layout pageTitle="home page haha">
      <p>I'm making this by following the Gatsby Tutorial. this text is children</p>
        </Layout>)
    // <main>
    //   <h1>Welcome to my Gatsby site!</h1>
    //   <Link to='/about'>about</Link>
    //   <p>I'm making this by following the Gatsby Tutorial.</p>
    // </main>

   
    


    }

// You'll learn about this in the next task, just copy it for now
export const Head = () => <Seo title="Home page"></Seo>

// Step 3: Export your component
export default IndexPage