import React from 'react'
import Link from 'gatsby-link'
import Resume from '../components/resume'

const IndexPage = ({ data }) => (
  <div className='main-container'>
    <Resume content={data.allMarkdownRemark} />
  </div>
)

export default IndexPage

export const pageQuery = graphql`
query AllResumeSections {
  allMarkdownRemark(filter: {frontmatter: {path: {regex: "/^resume-section/"}}}) {
    edges {
      node {
        html
        frontmatter {
          title
          path
          date
        }
      }
    }
  }
}`;