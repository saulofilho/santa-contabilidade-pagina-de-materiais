import React, { useState } from "react"
import Helmet from 'react-helmet';
import { graphql } from 'gatsby'
import Layout from "../components/Layout"
import Materiais from "../components/Materiais"
import TypeChecker from 'typeco';
import loadable from '@loadable/component'
import '../components/Search.css'

const SearchField = loadable(() => import('react-search-field'))

const IndexPage = ({
  data: {
    site,
    allMarkdownRemark: { edges },
  },
}) => {

  const posts = edges.filter(edge => !!edge.node.frontmatter.date)

  const [onSearchClickExampleList, setOnSearchClickExampleList] = useState([...posts]);

  const getMatchedList = (searchText) => {
    if (TypeChecker.isEmpty(searchText)) return posts;
    return posts.filter(post => post.node.frontmatter.title.toLowerCase().includes(searchText.toLowerCase()));
  };

  const onSearchClickExample = (value) => {
    setOnSearchClickExampleList(getMatchedList(value))
  }

  return (
    <Layout>
        <Helmet>
          <title>{site.siteMetadata.title}</title>
          <meta name="description" content={site.siteMetadata.description} />
        </Helmet>
        <section className="search">
          <div className="search-text-wrapper">
            <p>
              Guias completos e gratuitos sobre
              <br/>
              os principais temas de empreendedorismo
            </p>
          </div>
          <SearchField
            placeholder="Busque por palavras-chave"
            classNames="test-class"
            onSearchClick={onSearchClickExample}
          />
        </section>
        <main className="materiais-wrapper">
          <>
          <h2>Últimos lançamentos</h2>
          <div className="ultimos-lancamentos">
              {onSearchClickExampleList.map((post, index) => (
                <div className="" key={post + index}>
                  {post.node.frontmatter.tags == 'Destaque' ?
                    <Materiais post={post.node} html={post.node.html} />
                    :
                    null
                  }
                </div>
              ))}
            </div>
            </>
            <>
            <h2>Últimos lançamentos</h2>
            <div className="materiais">
              {onSearchClickExampleList.map((post, index) => (
                <div className="" key={post + index}>
                  {post.node.frontmatter.tags == 'Materiais' ?
                    <Materiais post={post.node} html={post.node.html} />
                    :
                    null
                  }
                </div>
              ))}
            </div>
            </>
        </main>
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
            tags
          }
        }
      }
    }
  }
`
