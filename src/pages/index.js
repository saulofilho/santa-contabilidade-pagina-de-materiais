import React from "react"
import Helmet from 'react-helmet';
import { graphql } from 'gatsby'
import Layout from "../components/Layout"
import Materiais from "../components/Materiais"

const IndexPage = ({
  data: {
    site,
    allMarkdownRemark: { edges },
  },
}) => {

  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date)
    .map(edge => <Materiais key={edge.node.id} post={edge.node} html={edge.node.html} />)

  const Lancamentos = edges
    .filter(edge => !!edge.node.frontmatter.date)
    .map(edge => <Materiais key={edge.node.id} post={edge.node} html={edge.node.html} />)

  return (
    <Layout>
        <Helmet>
          <title>{site.siteMetadata.title}</title>
          <meta name="description" content={site.siteMetadata.description} />
        </Helmet>
        <div className="ultimos-lancamentos">
          {/* {console.log('posts', edges)} */}
          {Posts}
        </div>
        <div className="materiais">
          {Posts}
        </div>
    </Layout>
  )
}

export default IndexPage
export const pageQuery = graphql`
  query indexPageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { order: ASC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          html
          frontmatter {
            date(formatString: "DD.MM.YYYY")
            title
            link
            image
          }
        }
      }
    }
  }
`
