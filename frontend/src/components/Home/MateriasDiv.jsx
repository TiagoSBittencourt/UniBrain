import React from 'react';
import "./MateriasDiv.css";

function MateriasDiv() {
  
  return (
    <>
      <h1 className="cursosDisponiveis">Cursos Disponíveis</h1>
      <div className="materias-container">
        <div className="materia-item">
          <div className="materia-imagem">
            {/* <img src="/assets/c2.jpg" alt="Cálculo 2" /> */}
          </div>
          <div className="materia-conteudo">
            <h2 className="materia-titulo">Cálculo 2</h2>
            <p className="paragrafo">
              Aprenda Cálculo 2 de forma interativa e gamificada. Nosso site oferece 
              trilhas de aprendizado divertidas que ajudam você a dominar tópicos como 
              integrais, derivadas e muito mais.
            </p>
          </div>
        </div>

        <div className="materia-item">
          <div className="materia-imagem">
            {/* <img src="/assets/pea-2.jpg" alt="Probabilidade e Estatística Aplicada a Engenharia" /> */}
          </div>
          <div className="materia-conteudo">
            <h2 className="materia-titulo">Probabilidade & Estatística</h2>
            <p className="paragrafo">
              Entenda conceitos fundamentais de probabilidade e estatística de forma prática, 
              com aplicações diretas em Engenharia. Nosso site tornará o aprendizado mais dinâmico e eficiente.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default MateriasDiv;
