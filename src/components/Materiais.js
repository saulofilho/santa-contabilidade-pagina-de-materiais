import React from "react"
import './Materiais.css'

const Materiais = ({ post, html }) => (
  <div className="material-wrapper">
    <a href={post.frontmatter.link} className="">
      <img src={post.frontmatter.image} alt="teste"/>
    </a>
    <div
        className="blog-post-content"
        dangerouslySetInnerHTML={{ __html: html }}
      />
  </div>
)

export default Materiais
