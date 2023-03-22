import * as React from 'react'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import { graphql, Link } from 'gatsby'


const BlogPage = ({data}) => {
  return (
    <Layout pageTitle="My Blog Posts">
      <ul>
        {
          //iterate over nodes and then return list item for every node visited
          data.allMdx.nodes.map(node=>(
           
              
              
              /* <li >
                <h1>{node.frontmatter.title}</h1>
                <br/>
                {node.frontmatter.date}
                <br/>
                  {node.excerpt}
              </li> */


              <article key={node.id}>
                <h2>
                <Link to={`/blog/${node.frontmatter.slug}`}>
                {node.frontmatter.title}
                </Link>
                
                </h2>
                <p>Posted on: {node.frontmatter.date}</p>
                <p>{node.excerpt}</p>
              </article>
            
            
          ))
        }
      </ul>
    </Layout>
  )
}

export const Head = () => <Seo title="My Blog Posts" />

export const query=graphql`query  {
  allMdx(sort: {frontmatter: {date: DESC}}) {
    nodes {
      frontmatter {
        date(formatString: "MMMM,D,YYYY")
        title
        slug
      }
      id
      excerpt
    }
  }
}`




// export const query=graphql`
// query {
//   allFile {
//     nodes {
//       name
//     }
//   }
// }`

export default BlogPage