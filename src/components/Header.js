import React from "react"
import './Header.css'
import LogoHero from '../../static/assets/logo-verde.png'
import loadable from '@loadable/component'

const SearchField = loadable(() => import('react-search-field'))

const Header = ({ onSearchClickExample }) => {
  return (
    <header className="container">
      <div className="header-left">
        <div className="logo-header">
          <img src={LogoHero} alt="" />
        </div>
      </div>
      <div className="header-right">
        <section className="search-header">
          <SearchField
            placeholder="O que você quer aprender hoje?"
            onSearchClick={onSearchClickExample}
          />
        </section>
        <div className="btns-wrapper">
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
      </div>
    </header>
  )
}

export default Header
