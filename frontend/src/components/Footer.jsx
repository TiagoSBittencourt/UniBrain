import React from "react";
import './Footer.css';

const Footer=()=>{
    return (
        <div className="footer">
            <div className="sb_footer section_padding">
              <div className="sb_footer-links">
                <div className="sb_footer-links_div">
                  <h4>Trabalho</h4>
                  <a href="/employer">
                      <p>Funcionários</p>
                  </a>
                  <a href="/individual">
                      <p>Individual</p>
                  </a>
                </div>
                <div className="sb_footer-links_div">
                     <h4>Recursos</h4>
                      <a href="/resource">
                          <p>Centro de Recursos</p>
                      </a>                     
                </div>
                <div className="sb_footer-links_div">
                  <h4>Parceiros</h4>
                  <a href="/employer">
                      <p>Amarelo Girassol</p>
                  </a>
                </div>
                <div className="sb_footer-links_div">
                  <h4>Empresa</h4>
                  <a href="/about">
                      <p>Sobre Nós</p>
                  </a>
                  <a href="/career">
                      <p>Carreira</p>
                  </a>
                  <a href="/contact">
                      <p>Contato</p>
                  </a>
                </div>
                <div className="sb_footer-links_div">
                    <h4>Nossas Redes Sociais</h4>
                    <div className="redesSociais">     
                      <p><img src="/assets/github.png"  alt=""/></p>  
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
                  <a href="/terms"><div><p>Termos & Condições</p></div></a>
                  <a href="/privacy"><div><p>Privacidade</p></div></a>
                  <a href="/security"><div><p>Segurança</p></div></a>
                  <a href="/cookie"><div><p>Declarações de Cookies</p></div></a>
              </div>
            </div>

            </div>
        </div>
    )
}

export default Footer;