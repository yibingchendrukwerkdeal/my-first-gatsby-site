import * as React from 'react'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import { graphql } from 'gatsby'

const BlogPost=({data,children})=>{
    
    return (
        <Layout pageTitle={data.mdx.frontmatter.title}>
            <p>posted on: {data.mdx.frontmatter.date}</p>
            <br/>
            {children}
        </Layout>
    )
}

export const Head=()=><Seo title="Blog posts"></Seo>

export const query=graphql`query ($id:String) {
    mdx (id:{eq:$id}){
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
    }
  }`


export default BlogPost