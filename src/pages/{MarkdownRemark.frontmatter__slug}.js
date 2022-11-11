import React from "react"
import { graphql } from "gatsby"
import { MainLayout } from "../layouts"
import "./blog.css"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <MainLayout>
      <div className="blog-container">
        <div className="blog-post">
          <h1>{frontmatter.title}</h1>
          <p>{frontmatter.date}</p>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    </MainLayout>
  )
}

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`
