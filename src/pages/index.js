import React, { useState } from "react"
import Helmet from 'react-helmet';
import { graphql } from 'gatsby'
import Layout from "../components/Layout"
import Materiais from "../components/Materiais"
import TypeChecker from 'typeco';
import loadable from '@loadable/component'
import './index.css'
import '../components/Search.css'

const SearchField = loadable(() => import('react-search-field'))

const IndexPage = ({
  data: {
    site,
    allMarkdownRemark: { edges },
  }
}) => {

  const posts = edges.map(post => ({
    ...post.node.frontmatter,
    ...post.node,
  }))

  const postsDestaques = posts.filter(post => post.tags == "Destaque")
  const postMateriais = posts.filter(post => post.tags == "Materiais")

  const [onSearchClickExampleList, setOnSearchClickExampleList] = useState([...postMateriais]);
  const [showLoadMore, setShowLoadMore] = useState(true);
  const [limit, setLimit] = useState(12);

  const getMatchedList = (searchText) => {
    if (TypeChecker.isEmpty(searchText)) return postMateriais;
    return postMateriais.filter(post => post.title.toLowerCase().includes(searchText.toLowerCase()));
  };

  const onSearchClickExample = (value) => {
    setOnSearchClickExampleList(getMatchedList(value))
  }

  const increaseLimit = () => {
    setLimit(limit + limit)
  }

  const visiblePosts = onSearchClickExampleList.slice(0, limit || postMateriais.length)

  return (
    <Layout>
        <Helmet>
          <title>{site.siteMetadata.title}</title>
          <meta name="description" content={site.siteMetadata.description} />
        </Helmet>
        <section className="search container" id="search">
          <div className="search-text-wrapper">
            <p>
            Guias completos e gratuitos sobre
            <br/>
            os temas mais importantes do empreendedorismo
            </p>
          </div>
          <SearchField
            placeholder="O que VOCÊ QUER aprender hoje?"
            onSearchClick={onSearchClickExample}
          />
        </section>
        <main className="materiais-wrapper">
          <div className="lancamentos-wrapper">
            <h2 className="container">Principais lançamentos</h2>
            <div className="ultimos-lancamentos container">
                {postsDestaques.map((post, index) => (
                  <Materiais key={post + index} post={post} />
                ))}
              </div>
          </div>
          <div className="materiais-wrapper">
            <h2 className="container">Últimos lançamentos</h2>
            <div className="materiais container">
              {visiblePosts.map((post, index) => (
                <Materiais key={post + index} post={post} />
              ))}
            </div>
            {showLoadMore && visiblePosts.length < postMateriais.length && (
              <div className="btn-ver-mais">
                <button onClick={increaseLimit}>
                  VER MAIS
                </button>
              </div>
            )}
          </div>
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
