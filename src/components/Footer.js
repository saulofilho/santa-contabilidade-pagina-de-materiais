import React from "react"
import './Footer.css'
import LogoFooter from '../../static/assets/logo-branco.png'

const Footer = () => {
  return (
    <footer>
      <div className="infos-footer">
        <div className="sobre-nos"></div>
        <div className="para-empresas"></div>
        <div className="entre-em-contato"></div>
        <div className="redes-sociais"></div>
      </div>
      <div className="logo-footer">
        <img src={LogoFooter} alt=""/>
      </div>
    </footer>
  )
}

export default Footer
