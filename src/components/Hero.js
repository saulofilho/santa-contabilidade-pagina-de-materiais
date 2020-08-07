import React from "react"
import './Hero.css'
import ImgHero from '../../static/assets/hero-img.png'

const Hero = () => {
  return (
    <section className="hero container">
      <div className="text-hero">
        <h1>
          Materiais educativos
        </h1>
        <p>
        Acesse gratuitamente e-books, webinars, vídeos, planilhas, mapas mentais
        e outros materiais para ampliar seus conhecimentos em gestão,
        empreendedorismo e potencializar O SEU SUCESSO!
        </p>
      </div>
      <div className="img-hero">
        <img src={ImgHero} alt="hero-ilustration"/>
      </div>
    </section>
  )
}

export default Hero
