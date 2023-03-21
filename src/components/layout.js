import * as React from 'react'
import { Link } from 'gatsby'
import { useStaticQuery, graphql } from 'gatsby';
import {
  //need to catch up with skipped tutorials on how this varialble name is formatted
  siteTitle,
} from './layout.module.css'


const Layout = ({ pageTitle, children }) => {

  const data=useStaticQuery(graphql`
  query {
      site {
        siteMetadata {
          title
        }
      }
    }
    `)

  return (
    <div>

      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/blog">Blog</Link></li>
        </ul>
      </nav>

      <main>
        <h1>{pageTitle}</h1>
        <header className={siteTitle}>{data.site.siteMetadata.title}</header> 
        {children}
      </main>

    </div>
  )
}

export default Layout