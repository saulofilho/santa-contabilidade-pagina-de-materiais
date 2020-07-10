import React from "react"
import './Header.css'
import LogoHero from '../../static/assets/logo-verde.png'

const Header = () => {
  return (
    <header>
      <div className="header-left">
        <div className="logo-header">
          <img src={LogoHero} alt="" />
        </div>
      </div>
      <div className="header-right">
        <p>search</p>
        <button className="btn-materiais">
          <a href="#">
            Materiais Gratuitos
          </a>
        </button>
        <button className="btn-fale">
          <a href="#">
            Fale com um especialista
          </a>
        </button>
      </div>
    </header>
  )
}

export default Header
