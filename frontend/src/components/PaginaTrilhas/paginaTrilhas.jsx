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
            
          </p>
          
        </div>
      </div>

      <div className="materia-itemT">
        <div className="materia-imagemT">
          {/*<img src="/assets/pea-2.jpg" alt="Probabilidade e Estatística Aplicada a Engenharia" />*/}
        </div>
        <div className="materia-conteudoT">
          <h2 className="materia-tituloT">Probabilidade & Estatística</h2>
          <p className="paragrafoT">
    
          </p>
          
        </div>
      </div>
    </div>
  );
}

export default PaginaTrilhas;
