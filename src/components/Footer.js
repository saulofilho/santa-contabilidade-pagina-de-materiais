import React from "react"
import './Footer.css'
import LogoFooter from '../../static/assets/logo-branco.png'
import Face from '../../static/assets/btn-face.png'
import Insta from '../../static/assets/btn-insta.png'
import Linkedin from '../../static/assets/btn-linke.png'

const Footer = () => {
  return (
    <footer>
      <div className="infos-footer container">
        <div className="sobre-nos">
          <h4>
            SOBRE NÓS
          </h4>
          <p>
            Somos a Santa Contabilidade, empresa especialista em contabilidade
            digital. Nosso foco é ajudar e estruturar o mercado a migrar sua
            contabilidade para o meio digital, dando agilizade e redução de custos.
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
            <a href="https://santacontabilidade.com.br/">
              Contabilidade digital
            </a>
          </p>
          <br/>
          <p>
            <a href="https://santacontabilidade.com.br/">
              Planejamento Orçamentário
            </a>
          </p>
          <br/>
          <p>
            <a href="https://santacontabilidade.com.br/">
              Emisssão de NF-e
            </a>
          </p>
          <br/>
          <p>
            <a href="https://santacontabilidade.com.br/">
              Controle de estoque
            </a>
          </p>
        </div>
        <div className="entre-em-contato">
          <h4>
            ENTRE EM CONTATO :)
          </h4>
          <p>
            UNIDADE FLORIANÓPOLIS
            <br/>
            <br/>
            Rua Adelino Boschetti Mateus, 99 - São José - SC
            <br/>
            <br/>
            Telefone: 3257 0123
            <br/>
            Email: fran@fran.com
          </p>
        </div>
        <div className="redes-sociais">
          <h4>
            SIGA-NOS NAS REDES SOCIAIS
          </h4>
          <p>
            Fique por dentro de tudo o que acontece no mundo da contabilidade
            e ganhe tal tal
          </p>
          <div className="btns-sociais-wrapper">
            <button>
              <a href="https://www.instagram.com/santacontabil/?igshid=rqlxs7ahcjql">
                <img src={Insta} alt="instagram logo"/>
              </a>
            </button>
            <button>
              <a href="https://www.facebook.com/santacontabil/">
                <img src={Face} alt="facebook logo"/>
              </a>
            </button>
            <button>
              <a href="https://linktr.ee/santacontabil">
                <img src={Linkedin} alt="linkedin logo"/>
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
