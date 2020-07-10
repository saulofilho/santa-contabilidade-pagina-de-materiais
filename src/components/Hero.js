import React from "react"
import './Hero.css'
import ImgHero from '../../static/assets/hero-img.png'

const Hero = () => {
  return (
    <section className="hero">
      <div className="text-hero">
        <h1>
          Materiais Educativos
        </h1>
        <p>
          Acesse gratuitamente eBooks, Webinars, Templates e outros materiais
          educativos para ampliar seus conhecimentos em tecnologia,
          empreendedorismo, marketing digital e outros.
        </p>
      </div>
      <div className="img-hero">
        <img src={ImgHero} alt="hero-ilustration"/>
      </div>
    </section>
  )
}

export default Hero
