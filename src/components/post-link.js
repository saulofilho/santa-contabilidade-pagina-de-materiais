import React from "react"
import { Link } from "gatsby"

const PostLink = ({ post }) => (
  <ul className="work-list">
    <li>
      {/* <Link to={post.frontmatter.slug} className="post-link">
        {post.frontmatter.title}
      </Link> */}
      <div>
        <p>{post.frontmatter.title}</p>
      </div>
      <div>
        <p>{post.frontmatter.link}</p>
      </div>
      <div>
        <p>{post.frontmatter.image}</p>
      </div>
    </li>
  </ul>
)
export default PostLink
