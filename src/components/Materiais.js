import React from "react"

const Materiais = ({ post, html }) => (
  <div className="material-wrapper">
    <a href={post.frontmatter.link} className="">
      <div>
        <img src={post.frontmatter.image} alt="teste"/>
      </div>
    </a>
    <div
        className="blog-post-content"
        dangerouslySetInnerHTML={{ __html: html }}
      />
  </div>
)
export default Materiais
