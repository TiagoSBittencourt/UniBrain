import React from "react";
import './Footer.css';

const Footer=()=>{
    return (
        <div className="footer">
            <div className="sb_footer section_padding">
              <div className="sb_footer-links">
                <div className="sb_footer-links_div">
                  <h4>Trabalho</h4>
                  <a href="/">
                      <p>Funcionários</p>
                  </a>
                  <a href="/">
                      <p>Individual</p>
                  </a>
                </div>
                <div className="sb_footer-links_div">
                     <h4>Recursos</h4>
                      <a href="/">
                          <p>Centro de Recursos</p>
                      </a>                     
                </div>
                <div className="sb_footer-links_div">
                  <h4>Parceiros</h4>
                  <a href="/">
                      <p>Amarelo Girassol</p>
                  </a>
                </div>
                <div className="sb_footer-links_div">
                  <h4>Empresa</h4>
                  <a href="/">
                      <p>Sobre Nós</p>
                  </a>
                  <a href="/">
                      <p>Carreira</p>
                  </a>
<<<<<<< HEAD
                  <a href="/">
=======
                  <a href="mailto:suporteunibrain@gmail.com" target="_blank" rel="noopener noreferrer">
>>>>>>> main
                      <p>Contato</p>
                  </a>
                </div>
                <div className="sb_footer-links_div">
                    <h4>Nossas Redes Sociais</h4>
                    <div className="redesSociais">     
                    <p>
                       <a href="https://github.com/TiagoSBittencourt/UniBrain" target="_blank" rel="noopener noreferrer">
                          <img src="/assets/github.png" alt="GitHub" />
                       </a>
                      </p>
                      <p><img src="/assets/linkedin.png" alt=""/></p>                                                     
                    </div>
                </div>
              </div>

            <hr></hr>
            <div className="sb_footer-below">
              <div className="sb_footer-copyright">
                  <p>
                    @{new Date().getFullYear()} UniBrain. Todos os Direitos Reservados.
                  </p>
              </div>
              <div className="sb_footer-below-links">
                  <a href="/"><div><p>Termos & Condições</p></div></a>
                  <a href="/"><div><p>Privacidade</p></div></a>
                  <a href="/"><div><p>Segurança</p></div></a>
                  <a href="/"><div><p>Declarações de Cookies</p></div></a>
              </div>
            </div>

            </div>
        </div>
    )
}

export default Footer;