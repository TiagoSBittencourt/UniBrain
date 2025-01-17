import React from 'react';
import { Link } from "react-router-dom";
import "./MateriasDiv.css";

function MateriasDiv() {
  return (
    <div className="materias-container">
      
      <div className="materia-item">
        <div className="materia-imagem">
          <img src="/assets/c2.jpg" alt="Cálculo 2" />
        </div>
       
        <div className="materia-conteudo">
          <h2 className="materia-titulo">Cálculo 2</h2>
          <p className="paragrafo">
            Aprenda Cálculo 2 de forma interativa e gamificada. Nosso site oferece 
            trilhas de aprendizado divertidas que ajudam você a dominar tópicos como 
            integrais, derivadas e muito mais.
          </p>
          <Link to="/register">
            <button className="materia-botao">Comece a aprender agora</button>
          </Link>
        </div>
      </div>

 
      <div className="materia-item">
       
        <div className="materia-imagem">
          <img src="/assets/probabilidade.jpg" alt="Probabilidade e Estatística Aplicada a Engenharia" />
        </div>

        <div className="materia-conteudo">
          <h2 className="materia-titulo">
            Probabilidade e Estatística Aplicada a Engenharia
          </h2>
          <p className="paragrafo">
            Entenda conceitos fundamentais de probabilidade e estatística de forma prática, 
            com aplicações diretas em Engenharia. Nosso site tornará o aprendizado mais dinâmico e eficiente.
          </p>
          <Link to="/register">
            <button className="materia-botao">Comece a aprender agora</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MateriasDiv;
