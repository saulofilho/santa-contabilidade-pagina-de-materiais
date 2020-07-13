import React from "react"
import './Materiais.css'

const Materiais = ({ post }) => (
  <div className="material-wrapper">
    <div className="material-image">
      <a href={post.link} className="">
        <div
          className="image"
          style={{
            backgroundImage: `url(${post.image})`
          }}
          alt={post.title}
        />
      </a>
    </div>
    <div
        className="blog-post-content"
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
  </div>
)

export default Materiais
