import React from "react"
import { Link } from 'gatsby'
import './Footer.css'
import LogoFooter from '../../static/assets/logo-branco.png'
import Face from '../../static/assets/btn-face.png'
import Insta from '../../static/assets/btn-insta.png'
import WhatsApp from '../../static/assets/whatsapp-wht.png'

const Footer = () => {
  const scrollToContador = () => {
    document.querySelector('#fale-contador').scrollIntoView({ behavior: 'smooth' });
  }

  const scrollToPlanos = () => {
    document.querySelector('#planos').scrollIntoView({ behavior: 'smooth' });
  }

  const scrollToServicos = () => {
    document.querySelector('#servicos').scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <footer>
      <div className="infos-footer container">
        <div className="sobre-nos">
          <h4>
            SOBRE NÓS
          </h4>
          <p>
            Nós somos a Santa Contabilidade, uma empresa especialista em
            contabilidade digital. Estamos no mercado há mais de 10 anos, em
            constante atualização e qualificação. Nosso maior compromisso é com
            o sucesso do seu negócio. E nosso foco está em trazer a sua
            contabilidade para o mundo digital, com agilidade e redução de custos
          </p>
        </div>
        <div className="para-empresas">
          <h4>
            PARA EMPRESAS
          </h4>
          <p>
            <a href="https://santacontabilidade.com.br/">
              Nosso site
            </a>
          </p>
          <br/>
          <p>
            <a
              href="https://santacontabilidade.com.br/#fale-contador"
              onClick={() => {
                scrollToContador()
              }}
            >
            Trocar de contador
            </a>
          </p>
          <br/>
          <p>
            <a href="https://contabilidade.santacontabilidade.com.br/abertura-de-empresa">
            Abrir uma empresa
            </a>
          </p>
          <br/>
          <p>
            <a href="https://contabilidade.santacontabilidade.com.br/especialista">
            Fale com um especialista
            </a>
          </p>
          <br/>
          <p>
            <a
              href="https://santacontabilidade.com.br/#planos"
              onClick={() => {
                scrollToPlanos()
              }}
            >
            Escolha seu plano
            </a>
          </p>
          <br/>
          <p>
            <a
              href="https://santacontabilidade.com.br/#servicos"
              onClick={() => {
                scrollToServicos()
              }}
            >
            Contabilidade digital
            </a>
          </p>
          <br/>
          <p>
            <Link to={"/blog"}>
              Blog
            </Link>
          </p>
        </div>
        <div className="entre-em-contato">
          <h4>
            ENTRE EM CONTATO :)
          </h4>
          <p>
          Unidade Florianópolis
            <br/>
            <br/>
            Rua Adelino Boschetti Mateus,
            <br/>
            99
            <br/>
            <br/>
            São José - SC
            <br/>
            <br/>
            Telefones:
            <br/>
            (48) 3259-2880
            <br/>
            (48 )99647-0220
            <br/>
            <br/>
            francisco@santacontabilidade.com.br
          </p>
        </div>
        <div className="redes-sociais">
          <h4>
            SIGA-NOS NAS REDES SOCIAIS
          </h4>
          <p>
          Fique por dentro de tudo o que acontece no mundo do
          empreendedorismo e da contabilidade!
          </p>
          <div className="btns-sociais-wrapper">
            <button>
              <a href="https://www.facebook.com/santacontabil/">
                <img src={Face} alt="facebook logo"/>
              </a>
            </button>
            <button>
              <a href="https://www.instagram.com/santacontabil/?igshid=rqlxs7ahcjql">
                <img src={Insta} alt="instagram logo"/>
              </a>
            </button>
            <button>
              <a href="https://api.whatsapp.com/send?phone=554884289990&text=Ol%C3%A1,%20quero%20falar%20com%20um%20especilista.">
                <img src={WhatsApp} alt="whatsapp logo"/>
              </a>
            </button>
          </div>
        </div>
      </div>
      <div className="logo-footer">
        <div className="container">
          <img src={LogoFooter} alt=""/>
        </div>
      </div>
    </footer>
  )
}

export default Footer
