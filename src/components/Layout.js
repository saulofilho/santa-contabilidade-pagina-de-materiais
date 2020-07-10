import React from "react"
import Header from './Header'
import Hero from './Hero'
import Footer from './Footer'
import 'prismjs/themes/prism-okaidia.css'

export default ({ children }) => {
  return (
    <div>
      <Header />
      <Hero />
      {children}
      <Footer />
    </div>
  )
}
