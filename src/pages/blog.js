import React from "react"
import { graphql } from "gatsby"
import { MainLayout } from "../layouts"
import "./blog.css"
import { Link } from "gatsby"

export function BlogLink({post}){
  return (
    <li>
      <Link to={post.slug}>{post.title} ({post.date})</Link>
    </li>
  )
}

export default function Blog({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { allMarkdownRemark } = data // data.markdownRemark holds your post data
  const { edges } = allMarkdownRemark
  console.log(edges)
  return (
    <MainLayout>
      <div className="blog-container">
        <div className="blog-index">
          <ul>
          {edges.map((edge)=>{
            return (<BlogLink key={edge.node.id} post={edge.node.frontmatter}/>)
          })}
          </ul>
        </div>
      </div>
    </MainLayout>
  )
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC}) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
          }
        }
      }
    }
  }
`
