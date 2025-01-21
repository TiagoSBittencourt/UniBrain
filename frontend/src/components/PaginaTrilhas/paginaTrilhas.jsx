import React from 'react';
import "./paginaTrilhas.css";

function PaginaTrilhas() {
  
  return (
    <div className="materias-containerT">
      <div className="materia-itemT">
        <div className="materia-imagemT">
          {/* <img src="/assets/c2.jpg" alt="Cálculo 2" />*/}
        </div>
        <div className="materia-conteudoT">
          <h2 className="materia-tituloT">Cálculo 2</h2>
          <p className="paragrafoT">
            Aprenda Cálculo 2 de forma interativa e gamificada. Nosso site oferece 
            trilhas de aprendizado divertidas que ajudam você a dominar tópicos como 
            integrais, derivadas e muito mais.
          </p>
          
        </div>
      </div>

      <div className="materia-itemT">
        <div className="materia-imagemT">
          {/*<img src="/assets/pea-2.jpg" alt="Probabilidade e Estatística Aplicada a Engenharia" />*/}
        </div>
        <div className="materia-conteudoT">
          <h2 className="materia-tituloT">Probabilidade e Estatística Aplicada a Engenharia</h2>
          <p className="paragrafoT">
            Entenda conceitos fundamentais de probabilidade e estatística de forma prática, 
            com aplicações diretas em Engenharia. Nosso site tornará o aprendizado mais dinâmico e eficiente.
          </p>
          
        </div>
      </div>
    </div>
  );
}

export default PaginaTrilhas;
