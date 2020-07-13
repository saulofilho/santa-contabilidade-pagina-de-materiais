import React, { Fragment } from "react"
import Footer from './Footer'
import 'prismjs/themes/prism-okaidia.css'

export default ({ children }) => {
  return (
    <>
      <Fragment>{children}</Fragment>
      <Footer />
    </>
  )
}
